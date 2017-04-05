var ball = {
  //x: 0,
  //y: 250,
  
  position: {x: 0, y: 250},
  speed: {x: 1, y:10},
  
  draw: function() {
    this.position.x = this.position.x  + this.speed.x;
    this.position.y = this.position.y  + this.speed.y;
    ellipse(this.position.x, this.position.y, 10, 10);
    
    if(this.position.y > height) {
      this.speed.y = this.speed.y * -1;
    }
 
    if(this.position.x > width) {
      this.speed.x = this.speed.x * -1;
    }
  
    if(this.position.y < 0) {
      this.speed.y = this.speed.y * -1;
    }
  
  if(this.position.x < 0) {
      this.speed.x = this.speed.x * -1;
    }
    
  }

};


function setup() {
  resizeCanvas(500, 500);
}

function draw() {
 ball.draw();
  
}