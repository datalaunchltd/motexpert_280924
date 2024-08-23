// Complete code with all functionalities combined

let class_invoked_testingStation = false;
let class_invoked_garage = false;
let class_invoked_testers = false;
let class_invoked_motReconciliation = false;
let testingStationData = null;
let garageClassInstantiated;
let testingStationClassInstantiated;
let testersClassInstantiated

// Function to decode encoded strings
function decodeVTS(encodedString) {
    const prefix = '[VTS_]';
    if (encodedString.startsWith(prefix)) {
      const base64String = encodedString.substring(prefix.length);
      // Decode base64 string to UTF-8
      const decodedString = atob(base64String);
      return decodedString;
    }
    return encodedString;
}

 

function changePage(event, id, urlRedirectToPage) {
    if (event) {
        event.stopPropagation();
    }  
    let desiredPage = '';
    if (urlRedirectToPage) {
        desiredPage = urlRedirectToPage
    }
    else {
        event.target.classList.forEach((item, index) => {
            if (item === 'data-launch-change-page') {
            desiredPage = event.target.getAttribute('data-launch-menu-item');
            }
        });
    }
    let x = Array.from(document.getElementsByClassName('data-launch-main-screen'));
    x.forEach(el => {
        if (!el.classList.contains('data-launch-hide')) {
        el.classList.add('data-launch-hide');
        }
    });

    for (let i = 0; i < x.length; i++) {
        let attr = x[i].attributes;
        for (let y = 0; y < attr.length; y++) {
        if (attr[y].name === 'data-launch-page') {
            if (attr[y].value === desiredPage) {
            attr[y].ownerElement.classList.remove('data-launch-hide');
            }
        }
        }
    }

    console.log('desiredPage is ', desiredPage);
    let label = '';
    if (desiredPage === 'testingStation') {
      if (class_invoked_testingStation === false) {
        console.log('the testing station has NOT !!!!  been instantiated YET !!!!')
        class_invoked_testingStation = true;
        testingStationClassInstantiated = new TestingStation();
        label = 'Testing Stations'
      }
      else {
        console.log('the testing station has already been instantiated')
        label = 'Testing Stations'
        if (id) {
          testingStationClassInstantiated.openForm(true, id)
        }        
      }        
        // document.getElementById('data-launch-nav-menu-plus-icon').classList.add('data-launch-testing-stations-new-record')
    } else if (desiredPage === 'garage') {
      if (class_invoked_garage === false) {
        console.log('the garage has NOT !!!!  been instantiated YET !!!!')
        class_invoked_garage = true;
        if (id) {
          garageClassInstantiated = new Garage(id);
        } else {
          garageClassInstantiated = new Garage();
        }
        label = 'Garages'
      }
      else {
        console.log('the garage has already been instantiated')
        label = 'Garages'
        if (id) {
          let rec;
          for (let i = 0; i < garageData.length; i++) {
              if (garageData[i].id === parseInt(id)) {
                  rec = garageData[i]
              }        
          }          
          garageClassInstantiated.openForm(true, rec)
        }       
      }        
        // document.getElementById('data-launch-nav-menu-plus-icon').classList.add('data-launch-table-garages-new-record')
    } else if (desiredPage === 'globalOptionSets') {
        // new GlobalOptionSet()
        // label = 'Option Sets'
    } else if (desiredPage === 'testerRecords') {
      if (class_invoked_testers === false) {
        class_invoked_testers = true
        label = 'Testers'
        if (id) {
          testersClassInstantiated = new Testers(id);
        } else {
          testersClassInstantiated = new Testers();
        }
      }
      else {
        label = 'Testers'
        if (id) {
          testersClassInstantiated.openForm(true, id)
        }        
      }
    } else if (desiredPage === 'motReconciliations') {
      if (class_invoked_motReconciliation === false) {
        class_invoked_motReconciliation = true;
        new MOTReconciliation();
        label = 'MOT Reconciliations'
      }       
    }
    document.getElementById('data-launch-side-bar').classList.remove('data-launch-activate-menu');
    document.getElementById('data-launch-current-item-header').innerHTML = label;
}


// (function() {
//     emailjs.init("rR7dPPyGc_FeGArbd"); // Replace with your EmailJS user ID
//     })
// ();

// define('smsapi', [], function() {
//   return {
//     sendSMS: function(number, message) {
//       console.log('Sending SMS to ' + number + ': ' + message);
//     }
//   };
// });

// var smsapi2;
// require(['smsapi'], function(smsapi) {
//   smsapi.sendSMS('+447584433817', 'Hello, World!');
//   smsapi.sms.sendSms('+447584433817', 'My first message!').then(
//     function res(res) {
//       console.log('res', res);
//     },
//     function err(err) {
//       console.error(err);
//     }
//   );
//   smsapi2 = new smsapi('L8ktAalrNomQiTI3dnXfIGqF5xYHMLRo7NIWaP41');
// });

function toggleMenu() {
  console.log('clicked the menu');
  document.getElementById('data-launch-side-bar').classList.toggle('data-launch-activate-menu');
}

function closeMenu() {
  document.getElementById('data-launch-side-bar').classList.remove('data-launch-activate-menu');
}

document.addEventListener("DOMContentLoaded", () => {
    // Example usage of create, update, and fetch functions
    const updatedData = {
      liam_test: 'yoyo'
    };
    
    // Creating a new record
    // createRecord('testing_station', { liam_test: 'initial value' })
    //   .then(() => fetchData('testing_station', 10, 0)) // Fetch 10 records starting from offset 0
    //   .catch(error => console.error('Error creating record:', error));
    
    // Updating a record
    // updateRecord('testing_station', 1, updatedData)
    //   .then(() => fetchData('testing_station', 10, 0)) // Fetch 10 records starting from offset 0
    //   .catch(error => console.error('Error updating record:', error));

    fetchData('testing_station', 1000, 0, 0).then(
      function success(res) {
        console.log('testing_station res', res);
        testingStationData = res;
        document.getElementById('data-launch-toggle-menu-button').style.display = 'flex'
      }
    );
    
    fetchData('garage_records', 100).then(
        function success (res) {
            console.log('garage_records res', res)
            garageData = res
        }
    )
    fetchData('tester_records', 100).then(
      function success (res) {
          console.log('tester_records res', res)
          testersData = res
      }
    )
  });
  
  // Function to update a record
  async function updateRecord(table, id, updatedData) {
    try {
      const response = await fetch(`/api/${table}/data/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      });
    
      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Error updating record: ${error.message}`);
      } else {
        const result = await response.json();
        console.log('Record updated successfully:', result);
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  
  async function fetchData(table, limit = 50, offset = 0, id = null) {
    try {
      let url = `/api/${table}/data?limit=${limit}&offset=${offset}`;
      if (id) {
        url = `/api/${table}/data?id=${id}&limit=${limit}&offset=${offset}`; // Include limit and offset
      }
  
      const response = await fetch(url);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Error fetching data: ${error.message}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
  

  async function countRows(table) {
    try {
      const url = `/api/${table}/count`; // Use the new endpoint to count rows
      const response = await fetch(url);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Error fetching row count: ${error.message}`);
      }
      const data = await response.json();
      return data.count; // Return the row count
    } catch (error) {
      console.error(error.message);
    }
  }
  
  let testing_station_next_id;
  let tester_record_next_id;
  let garage_record_next_id;
  // Usage example
  // countRows('testing_station').then(count => {
  //   console.log('Number of rows in the table:', count);
  //   testing_station_next_id = count++
  // });


  async function getMaxId(table) {
    try {
      const url = `/api/${table}/max-id`; // Use the new endpoint to get the max ID
      const response = await fetch(url);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Error fetching max ID: ${error.message}`);
      }
      const data = await response.json();
      return data.maxId; // Return the max ID
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // Usage example
  getMaxId('testing_station').then(maxId => {
    console.log('The largest ID in the table:', maxId);
    testing_station_next_id = maxId + 1;
    console.log('The next id will be', testing_station_next_id);
  });

  getMaxId('tester_records').then(maxId => {
    console.log('The largest ID in the table:', maxId);
    tester_record_next_id = maxId + 1;
    console.log('The next id will be', tester_record_next_id);
  });
  
  getMaxId('garage_records').then(maxId => {
    console.log('The largest ID in the table:', maxId);
    garage_record_next_id = maxId + 1;
    console.log('The next id will be', garage_record_next_id);
  });
  
  
  
// Function to create a new record
async function createRecord(table, recordData) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`/api/${table}/data`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(recordData)
        });
        
        if (!response.ok) {
          const error = await response.json();
          reject(new Error(`Error creating record: ${error.message}`));
        } else {
          const result = await response.json();
          resolve(result);
        }
      } catch (error) {
        reject(new Error(`Error creating record: ${error.message}`));
      }
    });
  }
  
  // Function to delete a record
  async function deleteRecord(table, id) {
    try {
      const response = await fetch(`/api/${table}/data/${id}`, {
        method: 'DELETE'
      });
    
      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Error deleting record: ${error.message}`);
      } else {
        const result = await response.json();
        console.log('Record deleted successfully:', result);
      }
    } catch (error) {
      console.error(error.message);
    }
  }



  // Example: Load content based on a URL parameter or user action
document.addEventListener("DOMContentLoaded", () => {
    // Example: load content based on a query parameter
    const urlParams = new URLSearchParams(window.location.search);
    console.log('url params' ,urlParams)
    let garageId = urlParams.get('garage')
    console.log('garageId ',garageId)
    if (garageId) {
        fetchData('garage_records', null, null, garageId).then(
            function success (res) {
                console.log('result is', res)
                garageData = res
                changePage(null, garageId, 'garage')
            },
            function error (err) {
                console.error(err)
            }
        )
    }
    // new Garage(garageId);
    // const section = urlParams.get('section') || 'default'; // Default or fallback section
    // loadContent(section);
});

  // // Usage example:
  // // Assuming there's a div with id="subgrid-container" in your HTML
  // const data = ['Item 1', 'Item 2', 'Item 3'];
  // const subGrid = new SubGrid(data, 'subgridTest');
  

//   function uploadImage() {
//     var formData = new FormData();
//     var imageFile = document.getElementById("imageFile").files[0];
    
//     if (!imageFile) {
//         alert("Please select an image to upload.");
//         return;
//     }

//     formData.append("imageFile", imageFile);

//     fetch('/api/upload-image', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.id) {
//             alert("Image uploaded successfully with ID: " + data.id);
//         } else {
//             alert("Image upload failed: " + data.error);
//         }
//     })
//     .catch(error => console.error('Error:', error));
// }


// function fetchImage(imageId) {
//   // Replace imageId with the ID you want to fetch
//   imageId = imageId || prompt("Enter the image ID to fetch:");

//   fetch(`/api/datalaunchimages/image/${imageId}`)
//   .then(response => {
//       if (response.ok) {
//           return response.blob(); // Convert the response to a blob (binary large object)
//       } else {
//           throw new Error("Image not found");
//       }
//   })
//   .then(blob => {
//       const imgElement = document.getElementById('displayedImage');
//       const objectURL = URL.createObjectURL(blob);
//       imgElement.src = objectURL;
//       imgElement.style.display = 'block'; // Make the image visible
//   })
//   .catch(error => {
//       console.error('Error fetching the image:', error);
//       alert(error.message);
//   });
// }
