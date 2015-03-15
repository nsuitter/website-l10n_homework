var red = document.querySelector (".red")
var yellow = document.querySelector (".yellow")
var green = document.querySelector (".green")
var Stop = document.querySelector (".Stop")
var Slow = document.querySelector (".Slow")
var Go = document.querySelector (".Go")

Stop.addEventListener("click", turnRedLight)
function turnRedLight () {
	red.style.backgroundColor = "red"
	yellow.style.backgroundColor = "black"
	green.style.backgroundColor = "black"

}
Slow.addEventListener("click", turnYellowLight)
function turnYellowLight () {
	red.style.backgroundColor = "black"
	yellow.style.backgroundColor = "yellow"
	green.style.backgroundColor = "black"

}

Go.addEventListener("click", turnGreenLight)
function turnGreenLight () {
	red.style.backgroundColor = "black"
	yellow.style.backgroundColor = "black"
	green.style.backgroundColor = "green"

}