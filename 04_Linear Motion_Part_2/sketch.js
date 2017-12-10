let size = 50;
let x = 0;
let y = 0;
let speedx = 10;
let speedy = 5;
let r = 255;
let g = 255;
let b = 255;

function setup() {
  createCanvas(500, 500);
  speedx = random(5);

}

function draw() {
  background(120);
  frameRate(60);

  x>width, r = 255, g = 0,255, b = 0,255;

  r = random(255);
  g = random(255);
  b = random(255);

  x = x + speedx;
  if (x>525){
     x =-50;
   }
  y = y + speedy;
  if (y>525){
      y =-50;
   }

  fill(r,g,b);
  ellipse(x, y, size, size);
}
