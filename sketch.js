var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  fixedRect1 = createSprite(800, 100, 50, 80);
  fixedRect1.shapeColor = "green";
  fixedRect1.debug = true;
  movingRect1 = createSprite(800, 800,80,30);
  movingRect1.shapeColor = "green";
  movingRect1.debug = true;

  movingRect1.velocityY = -5;
  fixedRect1.velocityY = +5;

 
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect, fixedRect);
  bounceOff(movingRect1, fixedRect1);
  drawSprites();
}
