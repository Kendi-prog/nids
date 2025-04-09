async function fetchAlerts() {
    try {
        const response = await fetch('http://localhost:5000/api/alerts');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        console.log('Fetched alerts:', data); 

       
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
        alertItem.className = 'alert-item';
        alertItem.innerHTML = `
            <strong>Alert:</strong> ${alert.message} <br>
            <strong>Severity:</strong> ${alert.severity} <br>
            <strong>Protocol:</strong> ${alert.protocol} <br> <!-- Added protocol -->
            <strong>Source IP:</strong> ${alert.sourceIP} <br> <!-- Added sourceIP -->
            <strong>Destination IP:</strong> ${alert.destinationIP} <br> <!-- Added destinationIP -->
            <strong>Date:</strong> ${new Date(alert.timestamp).toLocaleString()}
        `;
        alertList.appendChild(alertItem);
    });
}


async function fetchLogs() {
    try {
        const response = await fetch('http://localhost:5000/api/logs');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        console.log('Fetched logs data:', data); // Check what you get here

        const logs = data.logs;  // Ensure logs are accessed from the returned object
        displayLogs(logs);  // Pass the logs to display
        document.getElementById('total-logs').innerText = logs.length; // Set log count
    } catch (error) {
        console.error('Error fetching logs:', error);
        alert('Failed to fetch logs. Please try again later.');
    }
}

function displayLogs(logs) {
    const logList = document.getElementById('log-list');
    logList.innerHTML = ''; // Clear existing logs

    if (Array.isArray(logs)) {
        logs.forEach(log => {
            const logItem = document.createElement('div');
            logItem.className = 'log-item';
            logItem.innerHTML = `
                <strong>Log:</strong> ${log.message} <br>
                <strong>Level:</strong> ${log.level} <br>
                <strong>Source:</strong> ${log.source} <br>
                <strong>Date:</strong> ${log.timestamp ? new Date(log.timestamp).toLocaleString() : 'N/A'}
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
        displayUsers(data.users);
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
        userItem.className = 'user-item';
        userItem.innerHTML = `
            <strong>User:</strong> ${user.username} <br>
            <strong>Email:</strong> ${user.email} <br>
            <strong>Role:</strong> ${user.role}
        `;
        userList.appendChild(userItem);
    });
}


document.getElementById('fetch-alerts').addEventListener('click', fetchAlerts);
document.getElementById('fetch-logs').addEventListener('click', fetchLogs);
document.getElementById('fetch-users').addEventListener('click', fetchUsers);


