//backgrpound variables
var r = 255;
var b = 0;

// rectangle variables
var rectangle = {
  x : 0 ,
  y : 100 ,
  diameter : 100
};

var rectangle1= {
  x: 200 ,
  y: 400 ,
  diameter : 20 ,
}

function setup() {
  createCanvas(700, 700)
}

function draw() {
  
  //background
  col = map(mouseX, 0, 700, 255, 0 )
  background(col)
  
  //moving rectangle
  fill (75, 108, 169)
  stroke (75, 108, 169)
  rect (rectangle.x ,rectangle.y, rectangle.diameter, rectangle.diameter)
  
  rectangle.x = rectangle.x + 1
  
  //moving rectangle 1
  fill (0)
  stroke (0)
  rect (rectangle1.x, rectangle1.y, rectangle.diameter, rectangle.diameter)

  rectangle1.x = rectangle1.x + 2
  
  //rectangle
  fill (234, 12, 0);
  stroke (234, 12, 0);
  rect(200, 100, 30, 60);
  
  //circles
  fill (0, 0, 133);
  stroke (0, 0, 133);
  ellipse (600, 0, 700, 700);
  
  fill (75, 108, 169)
  stroke (75, 108, 169)
  ellipse (600, 0, 450, 450);
  
  fill (0)
  stroke (0)
  ellipse (600, 0, 400, 400);
  
  //line
  line (0, 700, 700, 0)
  
  
}