
 var stop = document.querySelector(".stop")
 var red = document.querySelector(".red")

 var slow = document.querySelector(".slow")
 var yellow = document.querySelector(".yellow")

 var go = document.querySelector(".go")
 var green = document.querySelector(".green")

stop.addEventListener("click", changeColorRed)
slow.addEventListener("click", changeColorYellow)
go.addEventListener("click", changeColorGreen)

function changeColorRed(){
red.style.backgroundColor = "red";
yellow.style.backgroundColor = "black";
green.style.backgroundColor = "black";
}

function changeColorYellow(){
yellow.style.backgroundColor = "yellow";
red.style.backgroundColor = "black";
green.style.backgroundColor = "black";
}

function changeColorGreen(){
green.style.backgroundColor = "green";
yellow.style.backgroundColor = "black";
red.style.backgroundColor = "black";
}

