var movingRect,fixedRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200,200,50,50);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  frameRate(240);
}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x - movingRect.x <fixedRect.width/2+movingRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2+movingRect.height/2 &&
    fixedRect.x - movingRect.y < fixedRect.height/2+movingRect.height/2
    ){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites();
}