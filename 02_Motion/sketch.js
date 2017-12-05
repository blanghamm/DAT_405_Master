function setup(){
  createCanvas(400,400);
  rectMode(CENTER);
}

function draw(){
  background(240);
translate(width/2, height/2);
  for (var i = 0; i < 8; i++) {
    push();
    rotate(TWO_PI * i / 8);
    var tx = 200 * noise(0.02*frameCount);
    translate(tx, 0);
    fill("#ff6384");
    rect(0, 0, 20, 20);
  for (var j = 0; j < 6; j++) {
      push();
      rotate(TWO_PI * j / 6);
      var rx = 60 * noise(0.02*frameCount +10);
      fill("#ab80ff");
      ellipse(rx, 0, 8, 8);
      pop();
    }
    translate()
    pop();
  }
}
