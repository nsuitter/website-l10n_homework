	var button_Stop = document.querySelector(".stop")
	var button_Slow = document.querySelector(".slow")
	var button_Go = document.querySelector(".go")
	var go_red = document.querySelector(".red")
	var go_yellow = document.querySelector(".yellow")
	var go_green = document.querySelector(".green")

	button_Stop.addEventListener("click",changeColor1)
	function changeColor1(){
		clear_light();
   		go_red.style.backgroundColor ="red";
	}

	button_Slow.addEventListener("click",changeColor2)
	function changeColor2(){
		clear_light();
   		go_yellow.style.backgroundColor ="yellow";
	}

	button_Go.addEventListener("click",changeColor3)
	function changeColor3(){
		clear_light();
   		go_green.style.backgroundColor ="green";
	}

	function clear_light() {
		go_red.style.backgroundColor = "black";
		go_yellow.style.backgroundColor = "black";
		go_green.style.backgroundColor = "black";
	}