//Drmeepso was here 

var Cookie = document.getElementById("Cookie")
var Text = document.getElementById("Text")
var CPSText = document.getElementById("CPS")
var BTTag = document.createElement("IMG")
var Score = 0
var ACPS = 0
var clickammount = 1
var leftDiv = document.getElementById("left")
var rightDiv = document.getElementById("right")
var centerDiv = document.getElementById("center")
var middleDiv = document.getElementById("middle")
var cookieWidth = 300
var cookieHeight = 300
var botRightCent = document.createElement("CENTER")

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
    leftDiv.style.height = "92.5%"
    rightDiv.style.height = "92.5%"
    centerDiv.style.height = "92.5%"
} else {
alert("Unknown devise type\n--" + navigator.platform + "-- If you see this please tell zach")
leftDiv.style.height = "125%"
rightDiv.style.height = "125%"
} 

setInterval(function(){ 
    //this code runs every msecond 
    Auto(ACPS / 200)
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
}

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
if (ACPS >= 10) {
    document.getElementById("scroll").hidden = false
    document.getElementById("scroll").style = "background: url(img/cookieShower1.png);"
} 
if (ACPS >= 100) {
    document.getElementById("scroll").style = "background: url(img/cookieShower2.png);"
} 
if (ACPS >= 1000) {
    document.getElementById("scroll").style = "background: url(img/cookieShower3.png);"
}}

function lerp (start, end, amt){
    return (1-amt)*start+amt*end
  }

function HackyWaky(CPS,Cookies) {
ACPS = CPS
Score = Cookies
}

function BetaTag (Password) {
if (hashCode(Password) == "-1899007222" || localStorage.Tag == "Beta") {
    rightDiv.appendChild(botRightCent)
    botRightCent.appendChild(BTTag)
    BTTag.src = "img/BetaTester.png"
    BTTag.width = "100"
    BTTag.height = "100"
    localStorage.Tag = "Beta"
    return "Igh here you go"
}}

document.getElementById("scroll").hidden = true

hashCode = function(s){
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
}

UpdateText()
//dont look at this you meany
BetaTag()
