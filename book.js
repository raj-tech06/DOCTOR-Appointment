// page load hone par localStorage se data fetch karenge aur show karenge
window.addEventListener('DOMContentLoaded', function() {
    // Get data from localStorage
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const doctor = localStorage.getItem('doctor');
    const date = localStorage.getItem('date');
    const time = localStorage.getItem('time');

    // Set values to the display elements
    document.getElementById('display-name').textContent = name;
    document.getElementById('display-email').textContent = email;
    document.getElementById('display-doctor').textContent = doctor;
    document.getElementById('display-date').textContent = date;
    document.getElementById('display-time').textContent = time;
});
