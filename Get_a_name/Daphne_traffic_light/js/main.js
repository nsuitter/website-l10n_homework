var stop = document.querySelector(".b1")
var slow = document.querySelector(".b2")
var go = document.querySelector(".b3")
var red = document.querySelector(".red")
var yellow = document.querySelector(".yellow")
var green = document.querySelector(".green")

stop.addEventListener("click", redon)
slow.addEventListener("click", yellowon)
go.addEventListener("click", greenon)

function redon() {
	red.style.backgroundColor = "#FF4500";
	yellow.style.backgroundColor = "black";
	green.style.backgroundColor = "black";
}

function yellowon() {
	red.style.backgroundColor = "black";
	yellow.style.backgroundColor = "#FFD700";
	green.style.backgroundColor = "black";
}

function greenon() {
	red.style.backgroundColor = "black";
	yellow.style.backgroundColor = "black";
	green.style.backgroundColor = "#32CD32";
}

// var div = document.querySelector("h1")
// var body = document.querySelector("body")

// h1.addEventListener("click", changeColor)

// function changeColor(event) {
// 	var elem = event.target
// 	var color = elem.getAttribute("class")
// 	body.setAttribute("class", color)
// }