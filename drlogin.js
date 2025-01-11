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
        localStorage.setItem("islogin",true)
        localStorage.setItem("check", true)
        // alert("Login successful!");
        window.location.href = 'index.html'; 
    } else {
        alert("Invalid login!");
    }
});



// VANTA.WAVES({
//     el: "#rrr",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200.00,
//     minWidth: 200.00,
//     scale: 1.00,
//     scaleMobile: 1.00
//   })

VANTA.BIRDS({
    el: "#rrr",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color1: 0x6015b8,
    color2: 0xd939b4,
    birdSize: 0.60,
    wingSpan: 22.00,
    speedLimit: 3.00,
    alignment: 37.00,
    cohesion: 39.00
  })