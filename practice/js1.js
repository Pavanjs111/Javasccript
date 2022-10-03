let h1= document.getElementById("i");
let btn=document.getElementById("btn");

function jsp()
{
    h1.innerHTML="java Training Center"
}

function qsp()
{
h1.innerHTML="Java testing center";
}

function m1()
{
h1.innerHTML="Double Clicked";
}
function m2()
{
    h1.innerHTML="Mouseover";
}
btn.addEventListener("click",jsp)
btn.addEventListener("dblclick",m1)
btn.addEventListener("mouseover",m2)