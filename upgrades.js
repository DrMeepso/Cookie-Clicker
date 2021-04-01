//Define Upgrade 1   
//Grandma 
var UG1 = document.getElementById("Upgrade1")
var UG1L = document.getElementById("UG1L")
var UG1P = 100
var UG1A = 0

UG1.addEventListener("click", function() {
if (Score >= UG1P) {
UG1A += 1
ACPS += 1
Score -= UG1P
UG1P += Math.round(100*Math.pow(1.15,UG1A))
UpdateText()
}
});

//Define Upgrade 2  
//Garden
var UG2 = document.getElementById("Upgrade2")
var UG2L = document.getElementById("UG2L")
var UG2P = 1100
var UG2A = 0

UG2.addEventListener("click", function() {
if (Score >= UG2P) {
UG2A += 1
ACPS += 8
Score -= UG2P
UG2P += Math.round(1100*Math.pow(1.15,UG2A))
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
UG3P += Math.round(5*Math.pow(1.15,UG3A))
UpdateText()
}
});

//Define Upgrade 4  
//Mine
var UG4 = document.getElementById("Upgrade4")
var UG4L = document.getElementById("UG4L")
var UG4P = 12000
var UG4A = 0

UG4.addEventListener("click", function() {
if (Score >= UG4P) {
UG4A += 1
ACPS += 47
Score -= UG2P
UG4P += Math.round(12000*Math.pow(1.15,UG2A))
UpdateText()
}
});

//Define Upgrade 5
//Factory
var UG5 = document.getElementById("Upgrade5")
var UG5L = document.getElementById("UG5L")
var UG5P = 130000
var UG5A = 0

UG5.addEventListener("click", function() {
if (Score >= UG5P) {
UG5A += 1
ACPS += 260
Score -= UG5P
UG5P += Math.round(130000*Math.pow(1.15,UG2A))
UpdateText()
}
});

//Define Upgrade 6
//Bank
var UG6 = document.getElementById("Upgrade6")
var UG6L = document.getElementById("UG6L")
var UG6P = 130000
var UG6A = 0

UG6.addEventListener("click", function() {
if (Score >= UG6P) {
UG6A += 1
ACPS += 260
Score -= UG6P
UG6P += Math.round(130000*Math.pow(1.15,UG2A))
UpdateText()
}
});
//bottom
//Update Buttom Status
setInterval(function(){ 
if (Score >= UG1P) {UG1.disabled = false}else{UG1.disabled = true}
if (Score >= UG2P) {UG2.disabled = false}else{UG2.disabled = true}
if (Score >= UG3P) {UG3.disabled = false}else{UG3.disabled = true}
if (Score >= UG4P) {UG4.disabled = false}else{UG4.disabled = true}
if (Score >= UG5P) {UG5.disabled = false}else{UG5.disabled = true}
if (Score >= UG6P) {UG6.disabled = false}else{UG6.disabled = true}
}, 1);