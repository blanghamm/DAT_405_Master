function setup() {
  createCanvas(1000, 500);
  strokeWeight(8);
  noFill();
  noLoop();
}

function draw() {
  background(50);
  for (var i = 0; i < 300; i++) {
    push();
    translate(random(width), random(height));
    rotate(random(2*PI));
    scale(random(1.5), random(1.5));
    stroke(random(255), random(255), random(255));
    ellipse(0, 0, 40, 40);
    pop();
  }
}
