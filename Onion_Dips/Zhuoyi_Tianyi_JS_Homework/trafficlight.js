
	
var buttonList = document.querySelector(".button");
var redLight = document.querySelector(".red");
var yellowLight = document.querySelector(".yellow");
var greenLight = document.querySelector(".green");

buttonList.addEventListener("click", lightChanger);


function lightChanger(event) {
	var buttonName = event.target.getAttribute("class");

	if (buttonName == "stop") {
		redLight.style.backgroundColor = "red"; 
		yellowLight.style.backgroundColor = "black";
		greenLight.style.backgroundColor = "black";
	}  

	else if (buttonName == "slow") {
		redLight.style.backgroundColor = "black";
		yellowLight.style.backgroundColor = "yellow";
		greenLight.style.backgroundColor = "black";
	}  

	else if (buttonName == "go") {
		redLight.style.backgroundColor = "black";
		yellowLight.style.backgroundColor = "black";
		greenLight.style.backgroundColor = "green";
	}

}

