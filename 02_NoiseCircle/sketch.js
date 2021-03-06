
let r = 255;
let g = 255;
let b = 255;
let speed = 4;
let diameter = 50;
let x1;
let y1;
let x2;
let y2;

function setup() {
  createCanvas(500, 500);
  frameRate(60);

  x1 = width/2;
  y1 = height/2;
  x2 = width/2;
  y2 = height/2;
  background(200);
}

function draw() {
  x1 += random(-speed, speed);
  y1 += random(-speed, speed);
  x1 = constrain(x1, 0, width);
  y1 = constrain(y1, 0, height);

  x2 = 500 - x1;
  y2 = 500 - y1;

  if (mouseIsPressed) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
  fill (r, g, b, 10);
  ellipse(x1, y1, diameter, diameter);

  fill (r,g,b,10);
  ellipse(x2,y1,diameter, diameter);

  fill (r,g,b,10);
  ellipse(x1,y2,diameter, diameter);

  fill (r,g,b,10);
  ellipse(x2,y2,diameter, diameter);
}
