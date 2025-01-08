document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    // Validate password and confirmPassword
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Save the data in localStorage (for demo purposes)
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // alert("Signup successful! Please login.");
    window.location.href = 'drlogin.html';
});












