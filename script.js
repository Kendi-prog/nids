function toggleSection(button, section) {
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden'); // Show the section
        button.textContent = `Hide ${button.textContent.split(' ')[1]}`; 
    } else {
        section.classList.add('hidden'); // Hide the section
        button.textContent = `Fetch ${button.textContent.split(' ')[1]}`; 
    }
}


async function fetchAlerts() {
    try {
        const response = await fetch('http://localhost:5000/api/alerts');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json(); 
       
        if (data && Array.isArray(data)) {  
            displayAlerts(data); 
            document.getElementById('total-alerts').innerText = data.length; 
        } else {
            console.error('Error: Alerts is not an array or is undefined');
            document.getElementById('total-alerts').innerText = '0';
        }
    } catch (error) {
        console.error('Error fetching alerts:', error);
        alert('Failed to fetch alerts. Please try again later.');
    }
}


// Function to display alerts in the UI
function displayAlerts(alerts) {
    if (!Array.isArray(alerts)) {
        console.error('Expected an array of alerts but received:', alerts);
        return;
    }
    
    const alertList = document.getElementById('alert-list');
    alertList.innerHTML = ''; 
    alerts.forEach(alert => {
        const alertItem = document.createElement('div');
        alertItem.className = 'alert-item item-container'; 
        alertItem.innerHTML = `
            <h3>Alert Details</h3>
            <div class="item-header">Message:</div> ${alert.message} <br>
            <div class="item-header">Severity:</div> ${alert.severity} <br>
            <div class="item-header">Protocol:</div> ${alert.protocol} <br>
            <div class="item-header">Source IP:</div> ${alert.sourceIP} <br>
            <div class="item-header">Destination IP:</div> ${alert.destinationIP} <br>
            <div class="item-header">Date:</div> ${new Date(alert.timestamp).toLocaleString()}
        `;
        alertList.appendChild(alertItem);
    });
}


async function fetchLogs() {
    try {
        const response = await fetch('http://localhost:5000/api/logs');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
         
        if (data && Array.isArray(data)) {  
            displayLogs(data); 
            document.getElementById('total-logs').innerText = data.length;
        } else {
            console.error('Error: Logs is not an array or is undefined');
            document.getElementById('total-logs').innerText = '0'; 
        }

    
    } catch (error) {
        console.error('Error fetching logs:', error);
        alert('Failed to fetch logs. Please try again later.');
    }
}

function displayLogs(logs) {
    const logList = document.getElementById('log-list');
    logList.innerHTML = ''; 

    if (Array.isArray(logs)) {
        logs.forEach(log => {
            const logItem = document.createElement('div');
            logItem.className = 'log-item item-container';
            logItem.innerHTML = `
                <h3>Log Details</h3>
                <div class="item-header">Message:</div> ${log.message} <br>
                <div class="item-header">Level:</div> ${log.level} <br>
                <div class="item-header">Source:</div> ${log.source} <br>
                <div class="item-header">Date:</div> ${log.timestamp ? new Date(log.timestamp).toLocaleString() : 'N/A'}
            `;
            logList.appendChild(logItem);
        });
    } else {
        console.warn('Expected logs to be an array but received:', logs);
        logList.innerHTML = 'No logs found or error in log data.';
    }
}

// Fetch users from the backend
async function fetchUsers() {
    try {
        const response = await fetch('http://localhost:5000/api/users'); 
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        if (data && Array.isArray(data)) {  
            displayUsers(data);    
        } else {
            console.error('Error: Alerts is not an array or is undefined');
        }
    } catch (error) {
        console.error('Error fetching users:', error);
        alert('Failed to fetch users. Please try again later.');
    }
}

// Function to display users in the UI
function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = ''; 
    users.forEach(user => {
        const userItem = document.createElement('div');
        userItem.className = 'user-item item-container';
        userItem.innerHTML = `
            <h3>User Details</h3>
            <div class="item-header">Username:</div> ${user.username} <br>
            <div class="item-header">Email:</div> ${user.email} <br>
            <div class="item-header">Role:</div> ${user.role}
        `;
        userList.appendChild(userItem);
    });
}


document.getElementById('fetch-alerts').addEventListener('click', () => {
    fetchAlerts();
    toggleSection(document.getElementById('fetch-alerts'), document.getElementById('alert-list'));
});

document.getElementById('fetch-logs').addEventListener('click', () => {
    fetchLogs();
    toggleSection(document.getElementById('fetch-logs'), document.getElementById('log-list'));
});

document.getElementById('fetch-users').addEventListener('click', () => {
    fetchUsers();
    toggleSection(document.getElementById('fetch-users'), document.getElementById('user-list'));
});


