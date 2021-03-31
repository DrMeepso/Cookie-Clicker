var Cookie = document.getElementById("Cookie")
var Text = document.getElementById("Text")
var CPSText = document.getElementById("CPS")
var Score = 0
var ACPS = 0
var CPS = 0
var clickammount = 1

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

//Define Upgrade 1   
//Grandma 
var UG1 = document.getElementById("Upgrade1")
var UG1L = document.getElementById("UG1L")
var UG1P = 1000
var UG1A = 0

UG1.addEventListener("click", function() {
if (Score >= UG1P) {
UG1A += 1
ACPS += 10
Score -= UG1P
UG1P = UG1P * 2
UpdateText()
}
});

//Define Upgrade 2  
//Cheff
var UG2 = document.getElementById("Upgrade2")
var UG2L = document.getElementById("UG2L")
var UG2P = 10000
var UG2A = 0

UG2.addEventListener("click", function() {
if (Score >= UG2P) {
UG2A += 1
ACPS += 100
Score -= UG2P
UG2P = UG2P * 2
UpdateText()
}
});

//Define Upgrade 3  
//Double Clicks
var UG3 = document.getElementById("Upgrade3")
var UG3L = document.getElementById("UG3L")
var UG3P = 5
var UG3A = 0

UG3.addEventListener("click", function() {
if (Score >= UG3P) {
clickammount += 1
UG3A += 1
Score -= UG3P
UG3P = UG3P * 2
UpdateText()
}
});

function Auto(ammount){
Score += ammount
UpdateText()
}

function UpdateText(){
Text.innerText = "Cookies: " + Score
CPSText.innerText = "CPS: " + (ACPS)
UG1L.innerText = "Buy Grandma For $" + UG1P
UG2L.innerText = "Buy Cheff For $" + UG2P
UG3L.innerText = "Double Your Clicks For $" + UG3P

localStorage.Score = Score
localStorage.CPS = CPS
}
UpdateText()