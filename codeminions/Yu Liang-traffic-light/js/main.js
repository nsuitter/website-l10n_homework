var stop = document.querySelector(".stop")
var slow = document.querySelector(".slow")
var go = document.querySelector(".go")
var red = document.querySelector(".red")
var yellow = document.querySelector(".yellow")
var green = document.querySelector(".green")

stop.addEventListener("click", RedLightOn)
slow.addEventListener("click", YellowLightOn)
go.addEventListener("click", GreenLightOn)

function RedLightOn() {
	red.style.backgroundColor = "red";
	yellow.style.backgroundColor = "black";
	green.style.backgroundColor = "black";
}

function YellowLightOn() {
	red.style.backgroundColor = "black";
	yellow.style.backgroundColor = "yellow";
	green.style.backgroundColor = "black";
}

function GreenLightOn() {
	red.style.backgroundColor = "black";
	yellow.style.backgroundColor = "black";
	green.style.backgroundColor = "green";
}