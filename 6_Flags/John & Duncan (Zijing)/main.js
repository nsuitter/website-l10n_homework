
var stop = document.querySelector(".stop")
var slow = document.querySelector(".slow")
var go = document.querySelector(".go")

var red = document.querySelector(".red")
var yellow = document.querySelector(".yellow")
var green = document.querySelector(".green")	

stop.addEventListener("click", redLighton)
slow.addEventListener("click", yellowLighton)
go.addEventListener("click", greenLighton)

function redLighton() 
{
	red.style.backgroundColor = "red";
	yellow.style.backgroundColor = "black";
	green.style.backgroundColor = "black";
}

function yellowLighton() 
{
	red.style.backgroundColor = "black";
	yellow.style.backgroundColor = "yellow";
	green.style.backgroundColor = "black";
}

function greenLighton() 
{
	red.style.backgroundColor = "black";
	yellow.style.backgroundColor = "black";
	green.style.backgroundColor = "green";
}