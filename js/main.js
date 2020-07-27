
function validateform(){  
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let uName=document.getElementById("userName").value;
    let email=document.getElementById("emailId").value
    console.log(email);
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/
    let password=document.getElementById("password").value
    let cnfmPass=document.getElementById("confirmPassword").value

    var x = document.forms["myForm"]["emailId"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
   
    if(uName==null || uName==""){
        document.getElementById("NameHelp").style.display="block"
        document.getElementById("userName").style.border = "2px solid red";
        
    }else if(uName.length<3){
        document.getElementById("NameHelp").style.display="none"
        document.getElementById("NameHelp2").style.display="block"
        document.getElementById("userName").style.border = "2px solid red";
       
    }else{
        document.getElementById("NameHelp").style.display="none"
        document.getElementById("NameHelp2").style.display="none"
        document.getElementById("userName").style.border = "2px solid green";
    }


    if(email==null || email==""){
        document.getElementById("emailId").style.border = "2px solid red";
        document.getElementById("EmailHelp").style.display="block"
    }
    else if(atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
        document.getElementById("emailId").style.border = "2px solid red";
        document.getElementById("EmailHelp").style.display="none"
        document.getElementById("EmailHelp2").style.display="block"
    } 
    else{
        document.getElementById("EmailHelp").style.display="none"
        document.getElementById("EmailHelp2").style.display="none"
        document.getElementById("emailId").style.border = "2px solid green";
    }

    if(password==null || password==""){
        document.getElementById("password").style.border = "2px solid red";
        document.getElementById("PasswordHelp").style.display="block"
    }else if(password.length<6){
        document.getElementById("password").style.border = "2px solid red";
        document.getElementById("PasswordHelp").style.display="none"
        document.getElementById("PasswordHelp2").style.display="block"
    }else{
        document.getElementById("PasswordHelp").style.display="none"
        document.getElementById("PasswordHelp2").style.display="none"
        document.getElementById("password").style.border = "2px solid green";
    }

    if(cnfmPass==null || cnfmPass==""){
        document.getElementById("confirmPassword").style.border = "2px solid red";
        document.getElementById("ConfPasswordHelp").style.display="block"
    } else if(password!=cnfmPass){
        document.getElementById("confirmPassword").style.border = "2px solid red";
        document.getElementById("ConfPasswordHelp").style.display="none"
        document.getElementById("ConfPasswordHelp2").style.display="block"
    }
    else{
        document.getElementById("ConfPasswordHelp").style.display="none"
        document.getElementById("ConfPasswordHelp2").style.display="none"
        document.getElementById("confirmPassword").style.border = "2px solid green";
    }

}