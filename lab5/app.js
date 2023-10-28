
const input1 = document.getElementById('n2');
const arrow = () => {
    console.log("This is an arrow function");
    const t = document.getElementById("arrow")
    t.textContent="Execution completed "
}
const getAlert=()=>{
    alert("This is a alert message");
}


var no1= 4;
var no2= 6;
//date
function dates(){
const d = new Date();
document.getElementById("dt").innerHTML = d;
}
//Math 
const ran  = document.getElementById("ran")
ran.innerHTML= ran.textContent+ Math.floor(Math.random() * 10);
const PI = document.getElementById("pi") 
 PI.innerHTML= PI.textContent+Math.PI
 const round = document.getElementById("round")
 round.innerHTML=round.textContent+Math.round(8.8)
 const ceil = document.getElementById('ceil')
 ceil.innerHTML= ceil.textContent + Math.ceil(7.1)
const p = document.getElementById("arthmc");
p.innerHTML = `Arithmatic Operater sum of ${no1} + ${no2} = ${no1+no2}`;
//SET 
const set = new Set()
set.add("a")
set.add("a")
set.add("b")
set.add("b")
set.add("c")
set.add("d")
let text  = ""
set.forEach(function(value){
    text += value
})
const divset = document.getElementById("set")
divset.innerHTML= divset.textContent + text
//Maps

const CARS = new Map()
CARS.set(" Benz", "25L");
CARS.set(" Creata", "8L");
CARS.set(" Alto", "4L");
let textmp = "";
CARS.forEach (function(value, key) {
  textmp += key + ' -> ' + value 

})
const mp = document.getElementById("mpp")
mp.innerHTML= textmp
const arr = document.getElementById("s");
const compaines = ["Google", "Facebook", "Oracle" , "JPMC"];
//console.log("Before sort array",compaines);
const arr1 = document.getElementById("s1");
arr.innerHTML= `Before sorting :  ${compaines}`
arr.style.border= "5px dashed blue"
arr1.style.backgroundColor= "#ffcc66"
compaines.sort()
//console.log("After sort",compaines);    
arr1.style.border= "5px dashed pink"
arr1.innerHTML= `After sorting :  ${compaines}`