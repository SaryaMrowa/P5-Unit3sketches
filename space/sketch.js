function setup() {
  
  resizeCanvas(windowWidth, windowHeight);
  background (0)
  
  setInterval(fetchISS, 100);
}

function fetchISS() {
  loadJSON('http://api.open-notify.org/iss-now.json', gotISS)
}

//make new funtion (can be named anything)
function gotISS(data) {
  //console.log(data.iss_position.longitude);

 var longitude = Number (data.iss_position.longitude);
 var latitude = Number (data.iss_position.latitude);
  
  var x= map(longitude, -180, 180, 0, width);
  var y= map(latitude, 90, -90, 0, height);
  
  fill(255);
  ellipse(x, y, 10, 10)
  
}



function draw() {
  
}