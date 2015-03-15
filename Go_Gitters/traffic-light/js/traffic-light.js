var buttonList = document.querySelector(".buttons");
var red = document.querySelector(".red");
var yellow = document.querySelector(".yellow");
var green = document.querySelector(".green");

buttonList.addEventListener("click", changeLight);

function changeLight(event) {
	var buttonName = event.target.getAttribute("class");
	if (buttonName == "stop") {
		red.style.backgroundColor = "red";
		yellow.style.backgroundColor = "black";
		green.style.backgroundColor = "black";
	} else if (buttonName == "slow") {
		red.style.backgroundColor = "black";
		yellow.style.backgroundColor = "yellow";
		green.style.backgroundColor = "black";
	} else {
		red.style.backgroundColor = "black";
		yellow.style.backgroundColor = "black";
		green.style.backgroundColor = "green";
	}
}
