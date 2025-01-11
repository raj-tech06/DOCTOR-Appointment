// //----------------login/signup button click pop-up show karna-----------------




// document.getElementById('loginBtn').addEventListener('click', function() {
//     Swal.fire({
//         title: 'Login / Sign Up',
//         html: `
//             <p>Please login to your account or sign up to get started.</p><br>
//             <a href="drlogin.html" class="swal-link">Login Here</a> <br><br>
//             <a href="drsignup.html" class="swal-link">Sign Up Here</a>
//         `,
//         icon: 'info',
//         confirmButtonText: 'Close'
//     });
// });





let loginsignbtn=()=>{
  
    Swal.fire({
       
        // title: 'Login / Sign Up',
        html: `
       
            <p>Please login to your account</p> <a href="drlogin.html" class="link">Login Here</a> <br> <br>
             <p>Sign up to get started</p> <a href="drsignup.html" class="link">Sign Up Here</a>
        `,
        // icon: 'info',
        imageUrl:"img/pin-code.png" ,
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "Custom image",
        confirmButtonText: 'Close'
    });
};


// --------------------------- login btn end---------------------------------------------------

// ------------------------------booking------------------------
let fetchData= async ()=>{

    try{
    let url='http://localhost:3000/appointments'

    let res= await fetch(url,{method:"GET"})
    let data= await res.json()
    console.log(data);
    

    let show=document.querySelector("#appointment-details")

    
   data.map((user)=>{
        
  
    show.innerHTML+=`
<div id="appointment-div">
    <div> Name: <span>${user.name} </span></div><hr>
    <div> Email: <span>${user.email} </span></div><hr>
    <div> Doctor: <span>  ${user.doctor} </span></div><hr>
    <div> Date: <span> ${user.date} </span></div><hr>
    <div> Time: <span>${user.time} </span></div><hr>

    <span class="any">Click For any Changes</span> 
    <button onclick="condel('${user.id}')" class="btn1"> Cancel  </button>
    <button onclick="formfill('${user.id}')"  class="btn2"> Update </button> 

</div> <br>
    `
    })
     //     <tr>
    //     <td>  ${user.name}   </td>
    //     <td> ${user.email}  </td>
    //     <td>  ${user.doctor}  </td>
    //     <td> ${user.date}  </td>
    //     <td>  ${user.time}   </td>
    //     <td><button onclick="del('${user.id}')"> Cancel  </button> </td> 
    //     <td><button onclick="formfill('${user.id}')"> Update </button> </td>
    //   </tr>
    //   ` 
}
catch(error){
    alert("error");
    
}

}




let ins=()=>{
    let inpname=document.querySelector("#name").value 
    let inpemail=document.querySelector("#email").value 
    let inpdoctor=document.querySelector("#doctor").value 
    let inpdate=document.querySelector("#date").value 
    let inptime=document.querySelector("#time").value 

    try{
        let url='http://localhost:3000/appointments'
          fetch(url,
            {method:"POST",
             
            headers:{
                "Content-Type":"application/json",
            },
    
            body:JSON.stringify(
                {
                    "name":inpname,
                    "email":inpemail,
                    "doctor":inpdoctor,
                    "date":inpdate,
                    "time":inptime
    
                }
            )
            })
            
        }
        catch(error){
            console.log(error);
            
        }
        if(localStorage.getItem("islogin")=="true"){
            location.href="book.html";
          }
          else{
            alert("please login first")
        }
            
    
        // location.href="book.html"
        return false;
    
    }

    
// --------------------end---------------------



// ----------------check appointment click--------------
let check=()=>{

     if(localStorage.getItem("check")=="true"){
            location.href="book.html"
          }
          else{  
            
    Swal.fire({
                imageUrl:"img/img1.png" ,
                imageWidth: 270,
                imageHeight: 90,
                imageAlt: "Custom image",
                confirmButtonText: 'Login First',
                
        html: `
          <a href="drlogin.html" id="checklogin">Login</a>`,
        

        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
          <i class="fa fa-thumbs-up"></i> Great!
        `,
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: `
          <i class="fa fa-thumbs-down"></i> `,
        cancelButtonAriaLabel: "Thumbs down",
        

        // width: 600,
        // padding: "3em",
        // color: "red",
        background: "rgba(0, 0, 0, 0.856)",
        backdrop: `
          rgba(255, 255, 255, 0.764)
          url("")
          left top
          no-repeat
        `
      
      });
    }
    
// if(localStorage.getItem("check")=="true"){
//     location.href="book.html"
//     // location.href="drlogin.html";
//   }
//   else{
//     // alert("please login first")

//     Swal.fire({
//         imageUrl:"img/img1.png" ,
//         imageWidth: 270,
//         imageHeight: 90,
//         imageAlt: "Custom image",
//         confirmButtonText: 'Login First'
        
//     });
// }



    }

    
    






















// --------------------------booking end---------------------------------

// -----------------typejs---------------------

var typed = new Typed('#element', {
    strings: ['A good doctor treats the disease a great doctor treats the patient who has the disease'],
    typeSpeed: 50,
    backSpeed:50,
    loop: true,
    loopCount: Infinity

  });
// ------------------------typejs end-------------------------------

