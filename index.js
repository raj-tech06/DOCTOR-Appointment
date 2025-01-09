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
let fetchData= async ()=>{

    try{
    let url='http://localhost:3000/appointments'

    let res= await fetch(url,{method:"GET"})
    let data= await res.json()
    console.log(data);

    let show=document.querySelector("#appointment-details")

    
    table_data = data.map((user)=>{
        
  
    show.innerHTML+=`
        <tr>
        <td>  ${user.name}   </td>
        <td> ${user.email}  </td>
        <td>  ${user.doctor}  </td>
        <td> ${user.date}  </td>
        <td>  ${user.time}   </td>
        <td><button onclick="del('${user.id}')"> Cancel  </button> </td> 
        <td><button onclick="formfill('${user.id}')"> Update </button> </td>
      </tr>
      `  
    })
   
}
catch(error){
    alert("error");
    
}

}

let del=(id)=>{

    let url=`http://localhost:3000/appointments/${id}`

    fetch(url,{method:"DELETE"})

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
    
        location.href="book.html"
        return false;
    
    }

    
 let formfill=async(id)=>{

    let url=`http://localhost:3000/appointments/${id}`
   let res=await fetch(url)
   let data=await res.json()
  
   let formdata=`
     Enter Name <input type="text" value="${data.name}" id="updatename"><br>
     Enter email <input type="text" value="${data.email}" id="updateemail"><br>
     Enter doctor <input type="text" value="${data.doctor}" id="updatedoctor"><br>
     Enter Date <input type="date" value="${data.date}" id="updatedate"><br>
     Enter time <input type="date" value="${data.time}" id="updatetime"><br>
    
      <input type="submit" onclick="finalupdate('${data.id}')">
   
   `

   document.querySelector("#appointment-details1").innerHTML=formdata

}

let finalupdate=(id)=>{

    let updatename=document.querySelector("#updatename").value;
    let updateemail=document.querySelector("#updateemail").value;
    let updatedoctor=document.querySelector("#updatedoctor").value;
    let updatedate=document.querySelector("#updatedate").value;
    let updatetime=document.querySelector("#updatetime").value;

    
try{
    let url=`http://localhost:3000/appointments/${id}`
      fetch(url,
        {method:"PUT",
         
        headers:{
            "Content-Type":"application/json",
        },

        body:JSON.stringify(
            {
                "name":updatename,
                "email":updateemail,
                "doctor":updatedoctor,
                "date":updatedate,
                "time":updatetime

            }
        )
        })
        
    }
    catch(error){
        console.log(error);
        
    }


 }

// --------------------end---------------------

























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

