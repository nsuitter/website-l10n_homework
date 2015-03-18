

	var red = document.querySelector(".red")
	var yellow = document.querySelector(".yellow")
	var green = document.querySelector(".green")
	var stop = document.querySelector(".stop")
	var slow = document.querySelector(".slow")
	var go = document.querySelector(".go")

	stop.addEventListener("click", turnRed);
	slow.addEventListener("click", turnYellow);
	go.addEventListener("click", turnGreen)

	function turnRed () {
		red.style.backgroundColor = "red";
		yellow.style.backgroundColor = "black";
		green.style.backgroundColor = "black";
	}

	function turnYellow () {
		yellow.style.backgroundColor = "yellow";
		red.style.backgroundColor = "black";
		green.style.backgroundColor = "black";
	}

	function turnGreen () {
		green.style.backgroundColor = "green";
		red.style.backgroundColor = "black";
		yellow.style.backgroundColor = "black";
		
	}


