// For First Page (Booking Form Page)
document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting to a server

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Store the form data in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('doctor', doctor);
    localStorage.setItem('date', date);
    localStorage.setItem('time', time);

    // Optionally, show confirmation message on the same page
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.textContent = `Thank you, ${name}! Your appointment with ${doctor} on ${date} at ${time} has been successfully booked.`;

    // Optionally reset the form
    document.getElementById('appointment-form').reset();
});

// For Second Page (Display Appointment Details)
window.addEventListener('DOMContentLoaded', () => {
    // Retrieve data from localStorage
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const doctor = localStorage.getItem('doctor');
    const date = localStorage.getItem('date');
    const time = localStorage.getItem('time');

    // Display the data on the page
    document.getElementById('display-name').textContent = name;
    document.getElementById('display-email').textContent = email;
    document.getElementById('display-doctor').textContent = doctor;
    document.getElementById('display-date').textContent = date;
    document.getElementById('display-time').textContent = time;
});
