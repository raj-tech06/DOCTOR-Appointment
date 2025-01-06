


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


// Form submit hone par data ko localStorage mein store karenge
document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Form ko submit hone se rokna

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Store values in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('doctor', doctor);
    localStorage.setItem('date', date);
    localStorage.setItem('time', time);

    // Redirect to the second page (details.html)
    window.location.href = 'book.html'; 
});


// 
// --------------------------booking end---------------------------------

// -----------------typejs---------------------

var typed = new Typed('#element', {
    strings: ['I m a Doctor'],
    typeSpeed: 50,
    backSpeed:50,

  });
// ------------------------typejs end-------------------------------

// ----------------------------loader--------------------------------------------



