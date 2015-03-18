/*document.getElementById('stop').onclick = getRed;
document.getElementById('slow').onclick = getYellow;
document.getElementById('go').onclick = getGreen;

<li id="stop" class="button">Stop</li>
  <li id="slow" class="button">Slow</li>
  <li id="go" class="button">Go</li>*/

var lightGreen = document.querySelector(".green")
var lightRed = document.querySelector(".red")
var lightYellow = document.querySelector(".yellow")
var buttonStop = document.querySelector(".stop")
var buttonSlow = document.querySelector(".slow")
var buttonGo = document.querySelector(".go")

buttonGo.addEventListener("click", turnLightGreen)
buttonStop.addEventListener("click", turnLightRed)
buttonSlow.addEventListener("click", turnLightYellow)

function turnLightRed() {
lightRed.style.backgroundColor = "red"
lightYellow.style.backgroundColor = "black"
lightGreen.style.backgroundColor = "black"
}

function turnLightYellow() {
lightYellow.style.backgroundColor = "yellow"
lightRed.style.backgroundColor = "black"
lightGreen.style.backgroundColor = "black"
}

function turnLightGreen() {
lightGreen.style.backgroundColor = "green"
lightYellow.style.backgroundColor = "black"
lightRed.style.backgroundColor = "black"
}

/*document.getElementById('stopLight').style.backgroundColor = "black";

/*var list = document.querySelector("ul")
var body = document.querySelector("body")

list.addEventListener("click", changeColor)

function changeColor(event) {
	var elem = event.target
	var color = elem.getAttribute("class")
	body.setAttribute("class", color)
}*/