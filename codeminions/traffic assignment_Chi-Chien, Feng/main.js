
var red = document.querySelector(".red"),
    yellow = document.querySelector(".yellow"),
    green = document.querySelector(".green"),
    stop = document.querySelector(".stop"),
    slow = document.querySelector(".slow"),
    go = document.querySelector(".go"),
    black = function(){
        red.style.backgroundColor = "black";
        green.style.backgroundColor = "black";
        yellow.style.backgroundColor = "black";
    };

stop.addEventListener("click",function(){
        black();
        red.style.backgroundColor = "red";
        });
slow.addEventListener("click",function(){
        black();
        yellow.style.backgroundColor = "yellow";
        });
go.addEventListener("click",function(){
        black();
        green.style.backgroundColor = "green";
        });