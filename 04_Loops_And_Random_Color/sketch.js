let size = 50;

function setup() {
  createCanvas(500, 500);
  frameRate(3);
}

function draw() {
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      fill(215, 200, 170);
      rect(size * x, size * y, size, size);
      
      fill(random(255), random(255), random(255));

      rect(12.5+size * x, 12.5+size * y, size/2, size/2);
    }
  }
}
