let yellowRectX = 100;
let yellowRectY = -50;

let blueRectX = 300;
let blueRectY = -250;

let pinkCirX = -200;
let pinkCirY = 200;
let pinkCirDiam = 50;

let purpCirX = 600;
let purpCirY = 300;
let purpCirDiam = 100;

let bgColor = "gray";

let r1
let d1
let r2
let d2



function setup() {
  createCanvas(400, 400);
  r1 = pinkCirDiam / 2;
  r2 = purpCirDiam / 2;
}

function draw() {
  background(bgColor);
  noStroke();

  
  animateShapes();

  

  d1 = dist(mouseX, mouseY, pinkCirX, pinkCirY);
  d2 = dist(mouseX, mouseY, purpCirX, purpCirY)

  if (mouseIsPressed === true) {

    if (mouseX >= yellowRectX && mouseX <= yellowRectX + 50 && mouseY >= yellowRectY && mouseY <= yellowRectY + 50) {
      bgColor = "orange"
    } else if (mouseX >= blueRectX && mouseX <= blueRectX + 50 && mouseY >= blueRectY && mouseY <= blueRectY + 50) {
      bgColor = 'black'
    }

    if (d1 < r1) {
      bgColor = "darkRed";
    } else if (d2 < r2) {
      bgColor = "black";
    }
  } else {
    bgColor = "green";
  }
}


function animateShapes() {

  //yellow-brown rectangle
  fill(100, 100, 0, 100);
  rect(yellowRectX, yellowRectY, 50, 50);

  //light blue rectangle
  fill(0, 200, 200, 150);
  rect(blueRectX, blueRectY, 50, 50);

  //pink ellipse
  fill(255, 0, 255, 100);
  ellipse(pinkCirX, pinkCirY, pinkCirDiam);

  //purple ellipse
  fill(41, 25, 173, 100);
  ellipse(purpCirX, purpCirY, purpCirDiam);

  //animates the shapes in a straight line
  yellowRectY++;
  blueRectY++;
  pinkCirX++;
  purpCirX--;

  //moves the shapes back when they move off the canvas
  if (yellowRectY > 450) {
    yellowRectY = -50;
  }
  if (blueRectY > 450) {
    blueRectY = -50;
  }
  if (pinkCirX > 425) {
    pinkCirX = -25;
  }
  if (purpCirX < -100) {
    purpCirX = 550;
  }
}

