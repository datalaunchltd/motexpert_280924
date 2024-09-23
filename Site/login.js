function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        fetchData('data_launch_users', 1, 0, null, null, null, null, username, password).then(data => {
            console.log('Is there any data matches for the user? ', data);
            if (data[0] !== undefined) {
                let first = data[0].first_name;
                let second = data[0].last_name;
                let userId = data[0].id;
                
                // Set a cookie for first and last name
                document.cookie = `first_name=${first}; path=/`;
                document.cookie = `last_name=${second}; path=/`;
                document.cookie = `user_id=${userId}; path=/`;
    
                // Redirect to home page
                window.location.href = '/home.html';
            }
        });   
    } 
}

