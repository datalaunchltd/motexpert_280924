const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Database connection details from Heroku environment variables or local settings
// const connection = mysql.createConnection({
//   host: process.env.JAWSDB_URL ? process.env.JAWSDB_URL.split('@')[1].split(':')[0] : 'uf63wl4z2daq9dbb.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
//   user: process.env.JAWSDB_URL ? process.env.JAWSDB_URL.split(':')[1].split('//')[1] : 'z3rc3i22ilpdtyh7',
//   password: process.env.JAWSDB_URL ? process.env.JAWSDB_URL.split(':')[2].split('@')[0] : 'kchjfuortpxwbiuc',
//   database: process.env.JAWSDB_URL ? process.env.JAWSDB_URL.split('/')[1] : 'rdb73dbfwzyz1yh5'
// });

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'uf63wl4z2daq9dbb.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
  user: process.env.DB_USER || 'z3rc3i22ilpdtyh7',
  password: process.env.DB_PASSWORD || 'kchjfuortpxwbiuc',
  database: process.env.DB_NAME || 'rdb73dbfwzyz1yh5'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

// connection.query(query, params, (error, results) => {
//   if (error) {
//     console.error('Database query failed:', error);
//     return res.status(500).json({ error: 'Database query failed', details: error.message });
//   }
//   res.json(results);
// });


// Middleware
app.use(express.json()); // For parsing application/json
app.use(express.static(path.join(__dirname, 'Site'))); // Serve static files

// Function to check if a table is allowed
const allowedTables = ['testing_station', 'garage_records', 'tester_garages', 'tester_records', 'data_launch_notes', 'data_launch_mot_equipment']; // Add more tables as needed

function isTableAllowed(table) {
  return allowedTables.includes(table);
}

// app.get('/api/:table/data', (req, res) => {
//   const { table } = req.params;
//   const id = req.query.id;
//   const limit = parseInt(req.query.limit, 10) || 50; // Default to 50 records
//   const offset = parseInt(req.query.offset, 10) || 0; // Default to starting at record 0

//   if (!isTableAllowed(table)) {
//     return res.status(400).json({ error: 'Table not allowed' });
//   }

//   let query;
//   let params;

//   if (id) {
//     query = `SELECT * FROM ?? WHERE id = ?`;
//     params = [table, id];
//   } else {
//     query = `SELECT * FROM ?? LIMIT ? OFFSET ?`;
//     params = [table, limit, offset];
//   }
//   console.log('Executing query:', query, params);

//   connection.query(query, params, (error, results) => {
//     if (error) {
//       return res.status(500).json({ error });
//     }
//     res.json(results);
//   });
// });

app.get('/api/:table/data', (req, res) => {
  const { table } = req.params;
  const id = parseInt(req.query.id, 10);
  const limit = parseInt(req.query.limit, 10) || 50; // Default to 50 records
  const offset = parseInt(req.query.offset, 10) || 0; // Default to starting at record 0

  if (!isTableAllowed(table)) {
    return res.status(400).json({ error: 'Table not allowed' });
  }

  let query;
  let params;

  if (id) {
    query = `SELECT * FROM ?? WHERE id >= ? ORDER BY id DESC LIMIT ? OFFSET ?`;
    params = [table, id, limit, offset];
  } else {
    query = `SELECT * FROM ?? ORDER BY id DESC LIMIT ? OFFSET ?`;
    params = [table, limit, offset];
  }
  console.log('Executing query:', query, params);

  connection.query(query, params, (error, results) => {
    if (error) {
      return res.status(500).json({ error });
    }
    res.json(results);
  });
});






// POST endpoint to create a new record in a specific table
app.post('/api/:table/data', (req, res) => {
  const { table } = req.params;
  const newRecord = req.body;
  
  if (!isTableAllowed(table)) {
    return res.status(400).json({ error: 'Table not allowed' });
  }
  
  const columns = Object.keys(newRecord).join(',');
  const values = Object.values(newRecord);
  const placeholders = values.map(() => '?').join(',');
  
  connection.query(
    `INSERT INTO ?? (${columns}) VALUES (${placeholders})`,
    [table, ...values],
    (error, results) => {
      if (error) {
        return res.status(500).json({ error });
      }
      res.json({ id: results.insertId, ...newRecord });
    }
  );
});

// PUT endpoint to update a record in a specific table
app.put('/api/:table/data/:id', (req, res) => {
  const { table, id } = req.params;
  const updatedData = req.body;
  
  if (!isTableAllowed(table)) {
    return res.status(400).json({ error: 'Table not allowed' });
  }
  
  const setClause = Object.keys(updatedData)
    .map(key => `${key} = ?`)
    .join(', ');
  const values = [...Object.values(updatedData), id];
  
  connection.query(
    `UPDATE ?? SET ${setClause} WHERE id = ?`,
    [table, ...values],
    (error, results) => {
      if (error) {
        return res.status(500).json({ error });
      }
      res.json({ affectedRows: results.affectedRows, ...updatedData });
    }
  );
});

// DELETE endpoint to remove a record from a specific table
app.delete('/api/:table/data/:id', (req, res) => {
  const { table, id } = req.params;
  
  if (!isTableAllowed(table)) {
    return res.status(400).json({ error: 'Table not allowed' });
  }
  
  connection.query(
    `DELETE FROM ?? WHERE id = ?`,
    [table, id],
    (error, results) => {
      if (error) {
        return res.status(500).json({ error });
      }
      res.json({ affectedRows: results.affectedRows });
    }
  );
});

// New API endpoint to count rows in a specific table
app.get('/api/:table/count', (req, res) => {
  const { table } = req.params;

  if (!isTableAllowed(table)) {
    return res.status(400).json({ error: 'Table not allowed' });
  }

  const query = `SELECT COUNT(*) as count FROM ??`;

  connection.query(query, [table], (error, results) => {
    if (error) {
      return res.status(500).json({ error });
    }
    res.json({ count: results[0].count });
  });
});

// New API endpoint to get the largest ID in a specific table
app.get('/api/:table/max-id', (req, res) => {
  const { table } = req.params;

  if (!isTableAllowed(table)) {
    return res.status(400).json({ error: 'Table not allowed' });
  }

  const query = `SELECT MAX(id) as maxId FROM ??`;

  connection.query(query, [table], (error, results) => {
    if (error) {
      return res.status(500).json({ error });
    }
    res.json({ maxId: results[0].maxId });
  });
});



// Serve the home page for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Site', 'home.html'));
});

// Redirect /home to root URL without changing the URL displayed
app.get('/home', (req, res) => {
  res.redirect('/');
});

// Serve the index.html file for any other unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'Site', 'home.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
