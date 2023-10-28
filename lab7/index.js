var a = window.innerHeight
var b = window.innerWidth
console.log(a);
document.getElementById("ww").innerHTML="width = " + b + "px<br>"+"height = " + a + "px<br>" ;
document.getElementById("shead").innerHTML="Available Screen Width = " + screen.availWidth + "px<br>"+"Available Screen Height = " + screen.availHeight + "px<br>" ;
document.getElementById("scolor").innerHTML="Screen Color Depth:  " + screen.colorDepth + "<br>"
document.getElementById("hre").innerHTML="Window URL:  " + window.location + "<br>"
document.getElementById("hre1").innerHTML="Hostname:  " + window.location.hostname + "<br>"
document.getElementById("port").innerHTML="PORT:  " + window.location.port + "<br>"
const goForward = ()=>{
    window.history.forward();
}
const goBack = ()=>{
    window.history.back();
}
function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }