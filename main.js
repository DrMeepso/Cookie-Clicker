var Cookie = document.getElementById("Cookie")
var Text = document.getElementById("Text")
var CPSText = document.getElementById("CPS")
var Score = 0
var ACPS = 0
var clickammount = 1
var leftDiv = document.getElementById("left")
var rightDiv = document.getElementById("right")
var centerDiv = document.getElementById("center")
var cookieWidth = 300
var cookieHeight = 300

//{
var click1 = new Audio("https://orteil.dashnet.org/cookieclicker/snd/clickb1.mp3");
var click2 = new Audio("https://orteil.dashnet.org/cookieclicker/snd/clickb2.mp3");
var click3 = new Audio("https://orteil.dashnet.org/cookieclicker/snd/clickb3.mp3");
//}


if (navigator.platform == "Win32") {
    leftDiv.style.height = "120%"
    rightDiv.style.height = "120%"
    centerDiv.style.height = "120%"
} else if (navigator.platform == "Linux x86_64") {
    leftDiv.style.height = "92%"
    rightDiv.style.height = "92%"
    centerDiv.style.height = "92%"
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
    //this code runs every msecond 
    Auto(ACPS / 200)
}, 1);

setInterval(function(){ 
    //this code runs every msecond 
    Cookie.width = lerp(Cookie.height, cookieHeight, 0.08)
    Cookie.height = lerp(Cookie.width, cookieWidth, 0.08)
}, 1);

Cookie.addEventListener("click", function() {
Score += clickammount
CPS += 1
UpdateText()
Cookieclick()
});

function Auto(ammount){
Score += ammount
UpdateText()
if (ammount > 0) {
}}

function Cookieclick () {

    cookieWidth = "320"
    cookieHeight = "320"
    setTimeout(function(){
        cookieWidth = "280"
        cookieHeight = "280"
        setTimeout(function(){
            cookieWidth = "300"
            cookieHeight = "300"
        }, 70);
    }, 60);

}

function UpdateText(){
document.title = Math.round(Score) + " cookies - Cookie Clicker"
Text.innerText = "Cookies: " + Math.round(Score)
CPSText.innerText = "CPS: " + (ACPS)
UG1L.innerText = "Buy Grandma \n$" + UG1P
UG2L.innerText = "Buy Garden \n$" + UG2P
UG3L.innerText = "Double Your Clicks \n$" + UG3P
UG4L.innerText = "Buy Mine\n$" + UG4P
UG5L.innerText = "Buy Factory\n$" + UG5P
UG6L.innerText = "Buy Bank\n$" + UG6P

localStorage.Score = Score
localStorage.CPS = CPS
}

function lerp (start, end, amt){
    return (1-amt)*start+amt*end
  }

function HackyWaky(CPS,Cookies) {
ACPS = CPS
Score = Cookies
}

UpdateText()