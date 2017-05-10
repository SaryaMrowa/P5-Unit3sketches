function setup() {
 	resizeCanvas(700, 700);
	strokeWeight(1)
	stroke(4);
}

function touchMoved() {
	rect(mouseX, mouseY, pmouseX, pmouseY);
	return false;
}

function draw() {
  fill(random(255), random(255), random(255))
}

