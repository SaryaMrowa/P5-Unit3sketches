function setup() {
  resizeCanvas(500, 500);
  background(20, 3, 60);
}

function draw() {
  
}

function sayWord (word)  {
  console.log(word);
}


function drawPlanet(x, y, radius) {
  ellipse (x, y, radius, radius)
}

function drawRings(x, y) {
  var c = color(random(240), 59, 85);
  colorMode(HSB);
  fill(c);
  ellipse (x,y)
  noStroke()
  

}


function drawMoons(x,y) {
  var b = color(200, 50, 80) 
  rect
}

function mouseClicked() {
  var r= random(20, 150)
  drawPlanet (mouseX, mouseY, r);
  drawRings(mouseX, mouseY);
  drawMoons (mouseX, mouseY);
  
}