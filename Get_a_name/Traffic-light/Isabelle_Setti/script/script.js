var buttonStop = document.querySelector(".stop")
var buttonSlow = document.querySelector(".slow")
var buttonGo = document.querySelector(".go")

var lightRed = document.querySelector(".red")
var lightYellow = document.querySelector(".yellow")
var lightGreen = document.querySelector(".green")


buttonStop.addEventListener("click", changeColorRed)
buttonSlow.addEventListener("click", changeColorYellow)
buttonGo.addEventListener("click", changeColorGreen)



	function changeColorRed() {
		lightRed.style.backgroundColor = "red"
		lightYellow.style.backgroundColor = "black"
		lightGreen.style.backgroundColor = "black"
	}

	function changeColorYellow() {
		lightRed.style.backgroundColor = "black"
		lightYellow.style.backgroundColor = "yellow"
		lightGreen.style.backgroundColor = "black"
	}

	function changeColorGreen() {
		lightRed.style.backgroundColor = "black"
		lightYellow.style.backgroundColor = "black"
		lightGreen.style.backgroundColor = "green"
	}