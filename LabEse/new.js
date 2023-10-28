function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(";");

    for (var i = 0; i < cookieArray.length; i++) {
      var cookie = cookieArray[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "";
  }

function handleSubmit(event){
    event.preventDefault(); 
    console.log("here");
let pass = document.getElementById("psss").value;
let email = document.getElementById("emmail").value;
var cookpass = getCookie("password");
var em = getCookie("email")
if(em==email && cookpass == pass){
    window.location.href = 'home.html'
}
  }
  
  
  const form = document.getElementById("form");
  const log = document.getElementById("log");
  form.addEventListener("submit", handleSubmit);
  