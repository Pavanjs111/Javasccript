

function validator()
{
    let user=document.getElementById("user");
    let msg=document.getElementById("msg")
    let reg=/^[A-Za-z]+$/g;
   


    if(user.value=="")
    {
        msg.innerHTML="Username Required";
        msg.style.display="block";
        return false;
    }
    else if(user.value.length<6)
    {
        msg.innerHTML="Username should contain minimum 6 Chracters";
        msg.style.display="block";
        return false;
    }
    else if(user.value.length>10)
    {
        msg.innerHTML="Username should not exceed more than 10 Chracters";
        msg.style.display="block";
        return false;
    }
    else if(reg.test(user.value)==false)
    {
        msg.innerHTML="Username should contain Only Alphabets";
        msg.style.display="block";
        return false;
    }
    else if(user.value=="username")
    {
        msg.innerHTML="Username cannot be username";
        msg.style.display="block";
        return false;
    }
    else
    {
        alert("Username Accepted")
        return true;
    }
}

// let s="Jspiders";
// console.log(s);
// console.log(s.length);

// let reg=/^[A-Za-z@]+$/g;
// console.log(reg.test("@spiders"));