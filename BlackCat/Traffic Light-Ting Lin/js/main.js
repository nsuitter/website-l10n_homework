	var button_stop = document.querySelector(".stop")
	var button_slow = document.querySelector(".slow")
	var button_go = document.querySelector(".go")
	var go_red = document.querySelector(".red")
	var go_yellow = document.querySelector(".yellow")
	var go_green = document.querySelector(".green")

	button_stop.addEventListener("click",changeColor)
	function changeColor(){
		clear_light();
   		go_red.style.backgroundColor ="red";
	}

	button_slow.addEventListener("click",changeColor2)
	function changeColor2(){
		clear_light();
   		go_yellow.style.backgroundColor ="yellow";
	}

	button_go.addEventListener("click",changeColor3)
	function changeColor3(){
		clear_light();
   		go_green.style.backgroundColor ="green";
	}

	function clear_light() {
		go_red.style.backgroundColor = "black";
		go_yellow.style.backgroundColor = "black";
		go_green.style.backgroundColor = "black";
	}