
function setup() {
  createCanvas (640, 640);
  
}

function draw() {
  //bacground 
  background(23, 10, 133)
  
  //rectangle
  stroke(255, 68, 75)
  fill(255, 68, 75)
  rect(mouseX, 200, 75, 150);

stroke(0)
  fill(0)
  rect(mouseX, 90, 100, 70);

  
  //ellipse
  stroke(255, 236, 75)
  fill(255, 236, 75)
  ellipse(mouseX,60, 80, 90);
}
