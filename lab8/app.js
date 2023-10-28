
const fn = document.getElementById("fname").value;
const ln = document.getElementById("lname").value;


function sub(){
    
    const fn = document.getElementById("fname").value;
const ln = document.getElementById("lname").value;
   
    const form = document.getElementById("f1");

const formData = {
    fname:fn,
    lname:ln
};
localStorage.setItem("data" , JSON.stringify(formData))
console.log("form submitted");
}
function show(){
const data = JSON.parse(localStorage.getItem("data"));

const p =document.getElementById('dis');
p.innerHTML=data.fname + " " +data.lname;

}
function clearstorage(){
    localStorage.clear();
}
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }