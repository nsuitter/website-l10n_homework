var Stop = document.querySelector(".stop")
var Slow = document.querySelector(".slow")
var Go = document.querySelector(".go")

var Red = document.querySelector(".red")
var Yellow = document.querySelector(".yellow")
var Green = document.querySelector(".green")

Stop.addEventListener("click", redLight)
Slow.addEventListener("click", yellowLight)
Go.addEventListener("click", greenLight)

	function redLight() {
	Red.style.backgroundColor = "red";
	Yellow.style.backgroundColor = "black";
	Green.style.backgroundColor = "black";
	}

	function yellowLight() {
	Red.style.backgroundColor = "black";
	Yellow.style.backgroundColor = "yellow";
	Green.style.backgroundColor = "black";
	}

function greenLight() {
	Red.style.backgroundColor = "black";
	Yellow.style.backgroundColor = "black";
	Green.style.backgroundColor = "green";
}
