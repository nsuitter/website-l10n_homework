var red = document.querySelector(".StopLight")
var yellow = document.querySelector(".SlowLight")
var green = document.querySelector(".GoLight")

var stop = document.querySelector(".StopButton")
var slow = document.querySelector(".SlowButton")
var go = document.querySelector(".GoButton")

stop.addEventListener("click", redLighton)
slow.addEventListener("click", yellowLighton)
go.addEventListener("click", greenLighton)

function redLighton() {
  red.style.backgroundColor = "red";
  yellow.style.backgroundColor = "black";
  green.style.backgroundColor = "black";
}

function yellowLighton() {
  red.style.backgroundColor = "black";
  yellow.style.backgroundColor = "yellow";
  green.style.backgroundColor = "black";
}

function greenLighton() {
  red.style.backgroundColor = "black";
  yellow.style.backgroundColor = "black";
  green.style.backgroundColor = "green"; 
}
