var stop = document.querySelector(".stop")
var slow = document.querySelector(".slow")
var go = document.querySelector(".go")
var red = document.querySelector(".red")
var yellow = document.querySelector(".yellow")
var green = document.querySelector(".green")

stop.addEventListener("click", redLightOn)
slow.addEventListener("click", yellowLightOn)
go.addEventListener("click", greenLightOn)

function redLightOn() {
	red.style.backgroundColor = "red";
	yellow.style.backgroundColor = "#000000";
	green.style.backgroundColor = "#000000";
}

function yellowLightOn() {
	red.style.backgroundColor = "#000000";
	yellow.style.backgroundColor = "yellow";
	green.style.backgroundColor = "#000000";
}

function greenLightOn() {
	red.style.backgroundColor = "#000000";
	yellow.style.backgroundColor = "#000000";
	green.style.backgroundColor = "green";
}

