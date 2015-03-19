

	var go = document.querySelector(".go")
	var green = document.querySelector(".green")
	var slow = document.querySelector(".slow")
	var yellow = document.querySelector(".yellow")
	var stop = document.querySelector(".stop")
	var red = document.querySelector(".red")


	go.addEventListener("click", turnLightGreen)
	    
	function turnLightGreen(event) {
		LightOff()
	green.style.backgroundColor = "green"
}

	slow.addEventListener("click", turnLightYellow)
	    
	function turnLightYellow(event) {
		LightOff()
	yellow.style.backgroundColor = "yellow"
}

	stop.addEventListener("click", turnLightRed)
	    
	function turnLightRed(event) {
		LightOff()
	red.style.backgroundColor = "red"
}


	function LightOff() {
		green.style.backgroundColor = "black"
		yellow.style.backgroundColor = "black"
		red.style.backgroundColor = "black"
	
	
    }
