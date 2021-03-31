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
UG1P += Math.round(UG1P /2)
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
UG2P += Math.round(UG2P /2)
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
UG3P += Math.round(UG3P /2)
UpdateText()
}
});

//bottom
//Update Buttom Status
setInterval(function(){ 
if (Score >= UG1P) {UG1.disabled = false}else{UG1.disabled = true}
if (Score >= UG2P) {UG2.disabled = false}else{UG2.disabled = true}
if (Score >= UG3P) {UG3.disabled = false}else{UG3.disabled = true}

}, 1);