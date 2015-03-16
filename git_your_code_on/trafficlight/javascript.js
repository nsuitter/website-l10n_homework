

	var	red = document.querySelector (".turnred")
	var yellow = document.querySelector (".turnyellow")
	var green = document.querySelector (".turngreen")	
	var stop = document.querySelector (".stop")
	var slow = document.querySelector (".slow")
	var go = document.querySelector (".go")


	stop.addEventListener("click", turnLightRed)

	function turnLightRed() {
		red.setAttribute("class", "red")
		yellow.setAttribute("class", "black")
		green.setAttribute("class", "black")
	}

	

	slow.addEventListener("click", turnLightYellow)

	function turnLightYellow() {
	 	yellow.setAttribute("class", "yellow")
	 	red.setAttribute("class", "black")
	 	green.setAttribute("class", "black")
	 }

	

	go.addEventListener("click", turnLightGreen)

	function turnLightGreen() {
		green.setAttribute("class", "green")
		red.setAttribute("class", "black")
		yellow.setAttribute("class", "black")
	}

