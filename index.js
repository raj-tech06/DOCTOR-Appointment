


//----------------login/signup button click pop-up show karna-----------------

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

// const loginBtn = document.getElementById('loginBtn');

// loginBtn.addEventListener('click', () => {

//     window.location.href = "drlogin.html";  
// });
// =---------------------------btn end---------------------------------------------------

// ------------------------------booking------------------------

document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting to a server

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // -------------------------confirmation message show---------------------------
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.textContent = `Thank you, ${name}! Your appointment with ${doctor} on ${date} at ${time} has been successfully booked.`;
// location.href="book.html"
    // ---------------------Reset the form after submit-------------------
    document.getElementById('appointment-form').reset();
});
// --------------------------booking end---------------------------------







