var r, g, b;
var value = 0;

function setup() {
  createCanvas(500,500);
  stroke(0);
  frameRate(10);
}
function draw() {
  background(255);
  noStroke();


  if (mouseIsPressed) {
    r = random(255);
    g = random(255);
    b = random(255);
  }

  fill(value);
  ellipse(50,50,100,100);

  fill(255,0,120);
  rect(0,400,100,100);

  fill(255,0,0);
  rect(0,300,100,100);

  fill(255,0,255);
  rect(100,400,100,100);

  fill(170,0,255);
  rect(100,300,100,100);

}
