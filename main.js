var Cookie = document.getElementById("Cookie")
var Text = document.getElementById("Text")
var CPSText = document.getElementById("CPS")
var Score = 0
var ACPS = 0
var CPS = 0
var clickammount = 1
var leftDiv = document.getElementById("left")
var rightDiv = document.getElementById("right")
var centerDiv = document.getElementById("center")

if (navigator.platform == "Win32") {
    leftDiv.style.height = "120%"
    rightDiv.style.height = "120%"
    centerDiv.style.height = "120%"
} else if (navigator.platform == "Linux x86_64") {
    leftDiv.style.height = "125%"
    rightDiv.style.height = "125%"
    centerDiv.style.height = "125%"
} else {
alert("Unknown devise type\n--" + navigator.platform + "-- If you see this please tell zach")
leftDiv.style.height = "125%"
rightDiv.style.height = "125%"
} 
//if (localStorage.Score == undefined) {
//console.log("First Time")
//} else {
//Score = parseInt(localStorage.Score)
//CPS = parseInt(localStorage.CPS)
//}

setInterval(function(){ 
    //this code runs every second 
    Auto(ACPS)
    CPS = 0
}, 1000);

Cookie.addEventListener("click", function() {
Score += clickammount
CPS += 1
UpdateText()
Cookie.width = "320"
Cookie.height = "320"
setTimeout(function(){
    Cookie.width = "300"
    Cookie.height = "300"
}, 10);
});

function Auto(ammount){
Score += ammount
UpdateText()
if (ammount > 0) {
Cookie.width = "320"
Cookie.height = "320"
setTimeout(function(){
    Cookie.width = "300"
    Cookie.height = "300"
}, 10);
}}

function UpdateText(){
document.title = Score + " cookies - Cookie Clicker"
Text.innerText = "Cookies: " + Score
CPSText.innerText = "CPS: " + (ACPS)
UG1L.innerText = "Buy Grandma For $" + UG1P
UG2L.innerText = "Buy Cheff For $" + UG2P
UG3L.innerText = "Double Your Clicks For $" + UG3P

localStorage.Score = Score
localStorage.CPS = CPS
}
UpdateText()