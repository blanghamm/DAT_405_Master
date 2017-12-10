let x;
let y;
let Size = 50;

function setup(){
  createCanvas(400, 400);
  x = 0;
  y = height/2;
}
function draw(){
  background(160);
  x = x + 1;
  console.log(x);

  if (x > 425){
    x = -25;
  }
  ellipse(x, y, Size, Size);
}
