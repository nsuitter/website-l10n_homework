document.getElementById("stop").addEventListener("click", 
function (){
	document.getElementById("red").style.background = "red";
	document.getElementById("yellow").style.background = "black";
	document.getElementById("green").style.background="black";});

document.getElementById("slow").addEventListener("click", 
function (){
	document.getElementById("yellow").style.background = "yellow";
	document.getElementById("red").style.background = "black";
	document.getElementById("green").style.background="black";});

document.getElementById("go").addEventListener("click", 
function (){
	document.getElementById("green").style.background = "green";
    document.getElementById("red").style.background = "black";
	document.getElementById("yellow").style.background="black";});