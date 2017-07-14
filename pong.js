var width = 100;
var height = 100;

var ball = document.getElementById('ball');
var x = width / 2;
var y = height / 2;
var xspeed = 0.5;
var yspeed = 1;
ball.style.top=x+'px';
ball.style.left=y+'px';
function update() {
  x = x + xspeed;
  y = y + yspeed;
  ball.style.top=x+'px';
  ball.style.left=y+'px';
}

ball.addEventListener('click',update);
