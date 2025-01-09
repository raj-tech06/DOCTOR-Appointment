
let goBack=()=>{
    location.href="index.html";
}
// -----------------------------------------------------------------------------------














let del=(id)=>{

    let url=`http://localhost:3000/appointments/${id}`

    fetch(url,{method:"DELETE"})

}

let formfill=async(id)=>{

    let url=`http://localhost:3000/appointments/${id}`
   let res=await fetch(url)
   let data=await res.json()
  
   let formdata=`
   <div id="refillform">
      <p class="refillmsg">Update Your Appointment Details</p>
    <div> Enter Name <input type="text" value="${data.name}" id="updatename"></div><br>
     <div> Enter email <input type="text" value="${data.email}" id="updateemail"></div><br>
     <div> Enter doctor <select value="${data.doctor}" id="updatedoctor">
                    <option value="Dr. pankaj raghuwanshi">Dr. pankaj raghuwanshi</option>
                    <option value="Dr. radhe shyam">Dr. radhe shyam</option>
                    <option value="Dr. Akash chopda">Dr. Akash chopda</option>
                </select>
</div> <br>
     <div> Enter Date <input type="date" value="${data.date}" id="updatedate"></div><br>
     <div> Enter time <input type="time" value="${data.time}" id="updatetime"></div><br>
    
     <div> <input type="submit" onclick="finalupdate('${data.id}')" id="updatebutton"></div>
   </div>
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
