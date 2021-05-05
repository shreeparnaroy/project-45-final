var john
var key=0
var keyig

function preload(){
john_walk=loadAnimation("images/b1.png","images/b2.png")
john_stand=loadAnimation("images/b1.png")
john_jump=loadAnimation("images/b3.png")
john_slide=loadAnimation("images/b4.png")
john_hurt=loadAnimation("images/b5.png")
keyig=loadImage("key.png")
}






function setup() {
  createCanvas(windowWidth,windowHeight);
  john = createSprite(500,450)
  john.addAnimation("image",pari_stand)
  john.scale=2.5
;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function spawnKeys() {
    if (frameCount % 60 === 0) {
    var key = createSprite(600,120,40,10);
    key.y = Math.round(random(80,120));
    key.addImage(keyig);
    key.scale=0.5
    key.velocityX = -3;
    key.lifetime = 200;  
    
  }}
