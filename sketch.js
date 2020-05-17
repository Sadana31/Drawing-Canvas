function setup() {
  createCanvas(700, 400);
  c = color("red");
  background("yellow");
}

function draw() {
  textSize(30);
  text("Drag the mouse to draw", 200,30);
  textSize(24);
  text("Press the space bar to change the color", 150,70);
  textAlign(CENTER);
  if (mouseIsPressed === true) {
    stroke(c);
    strokeWeight(4);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

}

function keyPressed(){
  if(keyCode===32){
    strokeWeight(7);
    c = color("green");
  }
}
