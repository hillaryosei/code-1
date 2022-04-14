function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(400, 300, 0);
  
  // Jollof Bowl
  fill (250, 200, 200);
  stroke (250, 200, 200);
  arc (200, 205, 200, 200, 0, 3.14);
  rect (165,300,70,10)

  // Rice
  fill (255, 165, 0); 
  stroke(255, 165, 0);
  arc ( 200, 231, 180, 180, 550, 25, PI + QUARTER_PI, OPEN)

  //spoon
  stroke (230)
  fill (200, 100, 10)
  strokeWeight (6)
  rect (160, 30, 270, 3)
  ellipse(200, 30, 125, 55); 
}
