var rectangle = {
  x : 0 ,
  y : 100 ,
  diameter : 100
};

var circle = {
  x : 10,
  y : 50 ,
  diameter : 200
}

function setup() {
  createCanvas(700, 700)
}

function draw() {
  //background
  background(3, 32, 126)
  
  //rectangle
  fill (255, 155, 138)
  stroke (60, 70, 60)
  rect (rectangle.x ,rectangle.y, rectangle.diameter, rectangle.diameter)

  rectangle.x = rectangle.x + 1
  
  //circle
  fill (249, 232, 122)
  stroke (249, 232, 122)
  ellipse (circle.x ,circle.y, circle.diameter, circle.diameter)
  
  circle.y = circle.y + 1
  
}

