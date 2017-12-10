var value = false;

function setup(){
  var canvas = createCanvas(594,841);
  rectMode(CENTER);
  canvas.parent("myContainer");
  var value = 0;
  //background("#ffa046");
  background("#ff6384"); //make background change colour when mouse is clicked
}

function draw(){
  //background("#babcc2");
translate(width/2, height/2);
if (value == true) {
  rotate(radians(frameCount));
  //background("#ffa046");
  //scale(1.3);
}
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

function mousePressed() { //this function determines if the piece should rotate or not
  if (value == false) {
    value = true;
  }
  else {
    value = false;
  }
}
let loopState = true;
function keyPressed() { //when the spacebar is pressed the piece either stops or starts depending on which state it was in
  if (keyCode == "32" && loopState == true){
    loopState = false;
    noLoop();
  console.log("stop")
}
else if (keyCode == "32" && loopState == false){
  loopState = true;
  loop();
  console.log("start")

}
}
