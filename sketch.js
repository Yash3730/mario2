var back;
var mario;
var imagemario;
var ground;
var invibleground;
var cloud,cloudimage;
var pipe,pipeimage;
var coin,coinimage;

function preload() {

//back=loadImage("mario back.png") 
imagemario=loadAnimation("1.png","2.png","3.png")
imageground=loadImage("ground2.png")
cloudimage=loadImage("cloud.png")
pipeimage=loadImage("pipeorg.png")
coinimage=loadImage("coin.png")

}

function setup() {
  createCanvas(1500, 400);

  edges=createEdgeSprites()
  mario=createSprite(60,365)
  mario.addAnimation("running",imagemario)
  mario.scale=0.7;

  ground=createSprite(750,380,1500,10)
  ground.addImage(imageground)

  invisibleground=createSprite(750,390,1500,10)
  invisibleground.visible=false;

}
function draw() {
  background("skyblue");
  console.log(mario.y);
  if (keyDown("space")&&mario.y>288){
    mario.velocityY=-20;
    
  }
ground.velocityX=-5
if(ground.x<0){
  ground.x=ground.width/2
}

  mario.velocityY=mario.velocityY+1
  mario.collide(invisibleground);

spawnclouds();
spawnpipe();
spawncoin();
  drawSprites();
}

function spawnclouds(){
if(frameCount%60===0){
  cloud=createSprite(1500,random(100,200));
  cloud.addImage(cloudimage);
  cloud.scale=1.4;
  cloud.velocityX=-3;
  cloud.lifetime=600;
}
}
function spawnpipe(){
if (frameCount%200===0){
  pipe=createSprite(1500,300)
  pipe.addImage(pipeimage);
  pipe.scale=0.3;
  pipe.velocityX=-5;
  pipe.lifetime=600;
}
}


function spawncoin(){

if(frameCount%200===0){
  for (i=0;i<5;i++){
  coin=createSprite(1500+i*30,200)
  coin.addImage(coinimage);
  coin.scale=0.1;
  coin.velocityX=-5;
  coin.lifetime=600;
  }
}



}