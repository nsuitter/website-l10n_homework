var red = document.querySelector(".red")
var yellow = document.querySelector(".yellow")
var green = document.querySelector(".green")
var stop = document.querySelector(".stop")
var slow = document.querySelector(".slow")
var go = document.querySelector(".go")

stop.addEventListener("click", turnRedLight)
slow.addEventListener("click", turnYellowLight)
go.addEventListener("click", turnGreenLight)

function turnRedLight() {
  red.style.backgroundColor = "red";
  yellow.style.backgroundColor = "black";
  green.style.backgroundColor = "black";
}

function turnYellowLight() {
  red.style.backgroundColor = "black";
  yellow.style.backgroundColor = "yellow";
  green.style.backgroundColor = "black";
}

function turnGreenLight() {
  red.style.backgroundColor = "black";
  yellow.style.backgroundColor = "black";
  green.style.backgroundColor = "green";
}