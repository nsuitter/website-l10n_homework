var buttonStop = document.querySelector("#stop")
var buttonSlow = document.querySelector("#slow")
var buttonGo = document.querySelector("#go")

buttonStop.addEventListener("click", switchToRed)
buttonSlow.addEventListener("click", switchToYellow)
buttonGo.addEventListener("click", switchToGreen)

function switchToRed(event) {
	document.querySelector("#red").style.background = "red"
	document.querySelector("#yellow").style.background = "black"
	document.querySelector("#green").style.background = "black"
}

function switchToYellow(event) {
 	document.querySelector("#yellow").style.backgroundColor = "yellow"
	document.querySelector("#red").style.background = "black"
	document.querySelector("#green").style.background = "black"
}

function switchToGreen(event) {
 	document.querySelector("#green").style.backgroundColor = "green"
  	document.querySelector("#red").style.background = "black"
	document.querySelector("#yellow").style.background = "black"
}