


// //----------------login/signup button click pop-up show karna-----------------

document.getElementById('loginBtn').addEventListener('click', function() {
    Swal.fire({
        title: 'Login / Sign Up',
        html: `
            <p>Please login to your account or sign up to get started.</p><br>
            <a href="drlogin.html" class="swal-link">Login Here</a> <br><br>
            <a href="drsignup.html" class="swal-link">Sign Up Here</a>
        `,
        icon: 'info',
        confirmButtonText: 'Close'
    });
});


// // =--------------------------- login btn end---------------------------------------------------

// // ------------------------------booking------------------------

// Check if edit mode is on
window.onload = function() {
    const editIndex = localStorage.getItem('editIndex');
    if (editIndex !== null) {
        const users = JSON.parse(localStorage.getItem('users'));
        const user = users[editIndex];

        document.getElementById('name').value = user.name;
        document.getElementById('email').value = user.email;
        document.getElementById('doctor').value = user.doctor;
        document.getElementById('date').value = user.date;
        document.getElementById('time').value = user.time;
    }
};

// Handle form submission
document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const editIndex = localStorage.getItem('editIndex');

    if (editIndex !== null) {
        // If editing, update the existing user
        users[editIndex] = { name, email, doctor, date, time };
        localStorage.removeItem('editIndex');
    } else {
        // Add new user
        users.push({ name, email, doctor, date, time });
    }

    // Save updated users list in localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to book.html
    window.location.href = 'book.html';
});


// --------------------end---------------------



























// --------------------------booking end---------------------------------

// -----------------typejs---------------------

var typed = new Typed('#element', {
    strings: ['A good doctor treats the disease a great doctor treats the patient who has the disease'],
    typeSpeed: 50,
    backSpeed:50,
    loop: true,
    loopCount: Infinity,

  });
// ------------------------typejs end-------------------------------

// ----------------------------loader--------------------------------------------



