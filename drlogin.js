document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    let loginEmail = document.getElementById('loginEmail').value;
    let loginPassword = document.getElementById('loginPassword').value;

    // Get stored data from localStorage
    let storedEmail = localStorage.getItem('email');
    let storedPassword = localStorage.getItem('password');

    // Validate login credentials
    if (loginEmail === storedEmail && loginPassword === storedPassword) {
        // alert("Login successful!");
        window.location.href = 'index.html'; 
    } else {
        alert("Invalid login!");
    }
});
