let r = 255;// controls the rbg parameters
let g = 255;
let b = 255;
let speed = 3;
let diameter = 50;
let x1;
let y1;

function setup() {
  createCanvas(500, 500);
  //On setup ellipse appears in the middle of the screen
  x1 = width/2;
  y1 = height/2;
  background(200);
}

function draw() {
  //mouseX and Y controls x1 and y1
  //constrain them to the canvas
  x1 = mouseX;
  y1 = mouseY;
  x1 = constrain(x1, 0, width);
  y1 = constrain(y1, 0, height);

  let x2 = map(x1, 0, width, width, 0);
  let y2 = map(y1, 0, height, height, 0);

  let distanceFromCenter = dist(width/2, height/2, x1, y1);
  let newSize = map(distanceFromCenter, 0, 350, 80, 1);

  //colour changes randomly when the mouse is clicked
  if (mouseIsPressed) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
  fill (r, g, b, 120);
  ellipse(x1, y1, newSize, newSize);
  ellipse(x2, y1, newSize, newSize);
  ellipse(x1, y2, newSize, newSize);
  ellipse(x2, y2, newSize, newSize);
}
