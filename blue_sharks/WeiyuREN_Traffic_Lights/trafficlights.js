document.getElementById('stop').onclick = getRed;
document.getElementById('slow').onclick = getYellow;
document.getElementById('go').onclick = getGreen;

function getRed() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
}

function getYellow() {
  clearLights();
  document.getElementById('slowLight').style.backgroundColor = "yellow";
}

function getGreen() {
	clearLights();
	document.getElementById('goLight').style.backgroundColor = "green";

}

function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}