var ball = document.getElementById('ball'),
  ballPosition = 0,
  ballSpeed = 3,
  pageWidth = document.body.offsetWidth - ball.offsetWidth;
setInterval(function() {
  ball.style.left = (ballPosition += ballSpeed) + 'px';
  if (ballPosition <= 0 || ballPosition >= 490) {
    ballSpeed *= -1;
  }
}, 1000 / 60);

var ball2 = document.getElementById('ball2'),
  ball2Position = 0,
  ball2Speed = 3,
  pageHeight = document.body.offsetHeight + ball2.offsetHeight;
setInterval(function() {
  ball2.style.top = (ball2Position += ball2Speed) + 'px';
  if (ball2Position <= 0 || ball2Position >= 490) {
    ball2Speed *= -1;
  }
}, 1000 / 60);