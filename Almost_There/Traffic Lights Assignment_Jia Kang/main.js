document.getElementById('stop-button').addEventListener("click", lightupRed);
document.getElementById('slow-button').addEventListener("click", lightupYellow);
document.getElementById('go-button').addEventListener("click", lightupGreen);

function lightupRed() {
  turnoffLights();
  document.getElementById('stop-light').style.backgroundColor = "red";
}

function lightupYellow() {
  turnoffLights();
  document.getElementById('slow-light').style.backgroundColor = "yellow";
}

function lightupGreen() {
  turnoffLights();
  document.getElementById('go-light').style.backgroundColor = "green";
}

function turnoffLights() {
  document.getElementById('stop-light').style.backgroundColor = "black";
  document.getElementById('slow-light').style.backgroundColor = "black";
  document.getElementById('go-light').style.backgroundColor = "black";
}
