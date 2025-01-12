document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    let number = document.getElementById('Number').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    // Validate password and confirmPassword
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Save the data in localStorage (for demo purposes)
    localStorage.setItem('Number', number);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // alert("Signup successful! Please login.");
    window.location.href = 'drlogin.html';
});




VANTA.TRUNK({
    el: "#rrr1",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xcfbec3,
    spacing: 7.00,
    chaos: 2.00
  })









