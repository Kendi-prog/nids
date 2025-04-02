// Function to fetch alerts from the backend
async function fetchAlerts() {
    try {
        const response = await fetch('http://localhost:3000/alerts'); // Adjust the endpoint as necessary
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        displayAlerts(data.alerts);
        document.getElementById('total-alerts').innerText = data.alerts.length; // Update total alerts
    } catch (error) {
        console.error('Error fetching alerts:', error);
        alert('Failed to fetch alerts. Please try again later.');
    }
}

// Function to display alerts in the UI
function displayAlerts(alerts) {
    const alertList = document.getElementById('alert-list');
    alertList.innerHTML = ''; // Clear previous alerts
    alerts.forEach(alert => {
        const alertItem = document.createElement('div');
        alertItem.className = 'alert-item';
        alertItem.innerHTML = `
            <strong>Alert:</strong> ${alert.message} <br>
            <strong>Severity:</strong> ${alert.severity} <br>
            <strong>Date:</strong> ${new Date(alert.date).toLocaleString()}
        `;
        alertList.appendChild(alertItem);
    });
}

// Function to fetch logs from the backend
async function fetchLogs() {
    try {
        const response = await fetch('http://localhost:3000/logs'); // Adjust the endpoint as necessary
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        displayLogs(data.logs);
        document.getElementById('total-logs').innerText = data.logs.length; // Update total logs
    } catch (error) {
        console.error('Error fetching logs:', error);
        alert('Failed to fetch logs. Please try again later.');
    }
}

// Function to display logs in the UI
function displayLogs(logs) {
    const logList = document.getElementById('log-list');
    logList.innerHTML = ''; // Clear previous logs
    logs.forEach(log => {
        const logItem = document.createElement('div');
        logItem.className = 'log-item';
        logItem.innerHTML = `
            <strong>Log:</strong> ${log.message} <br>
            <strong>Date:</strong> ${new Date(log.date).toLocaleString()}
        `;
        logList.appendChild(logItem);
    });
}

// Function to fetch users from the backend
async function fetchUsers() {
    try {
        const response = await fetch('http://localhost:3000/users'); // Adjust the endpoint as necessary
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
    userList.innerHTML = ''; // Clear previous users
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

// Event listeners for buttons
document.getElementById('fetch-alerts').addEventListener('click', fetchAlerts);
document.getElementById('fetch-logs').addEventListener('click', fetchLogs);
document.getElementById('fetch-users').addEventListener('click', fetchUsers);

// Initial fetch for dashboard data
fetchAlerts();
fetchLogs();
fetchUsers();