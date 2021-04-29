var canvas
var b1;
var b2;
var b3
var b4
var b5
var b6;
var b7;
var b8;
var b1img,b2img,b3img,b4img,b5img,b6img,b7img,b8img
var playerscore=0;
var PLAY=1;
var END=0;
var gamestate=PLAY;
var finger;
var finger1,finger2;
var fingerimg
function preload(){
  b1img = loadImage("./b1.png");
  b2img = loadImage("./b2.png");
  b3img = loadImage("./b3.png");
  b4img = loadImage("./b4.png");
  b5img = loadImage("./b5.png");
  b6img = loadImage("./b6.png");
  b7img = loadImage("./b7.png");
  b8img = loadImage("./b8.png");
  fingerimg = loadImage("./b9.png")

}
function setup() {
  canvas=createCanvas(windowWidth,windowHeight);
  b1=createSprite((windowWidth/2)+random(-100,150),-100,10,10);
  b1.addImage(b1img)
  b1.scale=0.5
  b2=createSprite((windowWidth/2)+random(-150,200),-250,10,10);
  b2.addImage(b2img)
  b2.scale=0.5
  b4=createSprite((windowWidth/2)+random(-100,100),-350,10,10);
  b4.addImage(b4img)
  b4.scale=0.5
  b5=createSprite((windowWidth/2)+random(-200,200),-300,10,10);
  b5.addImage(b5img)
  b5.scale=0.5
  b7=createSprite((windowWidth/2)+random(-200,200),-400,10,10);
  b7.addImage(b7img)
  b7.scale=0.5
  b8=createSprite((windowWidth/2)+random(-200,200),-70,10,10);
  b8.addImage(b8img)
  b8.scale=0.5
  b6=createSprite((windowWidth/2)+random(-200,200),-170,10,10);
  b6.addImage(b6img)
  b6.scale=0.5
  b3=createSprite((windowWidth/2)+random(-200,200),-200,10,10);
  b3.addImage(b3img)
  b3.scale=0.5
  finger=createSprite(windowWidth/2-200,windowHeight-100,500,500);
  finger.addImage(fingerimg)
  finger.scale = 0.5
  finger1=createSprite(windowWidth/2,windowHeight-100,500,500);
  finger1.addImage(fingerimg)
  finger1.scale = 0.5
  finger2=createSprite(windowWidth/2+200,windowHeight-100,500,500);
  finger2.addImage(fingerimg)
  finger2.scale = 0.5
  console.log(displayHeight)
}

function draw() {
  background("white");
  fill("blue");
   
  textSize(18);  
  text("Score:"+playerscore,1300,50)
  text("Pop The bubbles which have a Rational Number In them",500,300)
  text("Don't let the fingers below pop the rational numbers",510,330)
  if(gamestate===PLAY){
    
    b1.velocityY=2
    b2.velocityY=3
    b3.velocityY=4
    b4.velocityY=5
    b5.velocityY=6
    b6.velocityY=7
    b7.velocityY=8
    b8.velocityY=9
    if(mousePressedOver(b1)){
      b1.lifetime=0
    playerscore=playerscore+1
    }
     if(mousePressedOver(b2)){
      b2.destroy();
    playerscore=playerscore-1
    }
     if(mousePressedOver(b3)){
      b3.destroy();
    playerscore=playerscore+1
    }
    if(mousePressedOver(b4)){
      b4.destroy();
    playerscore=playerscore+1
    }
    if(mousePressedOver(b5)){
      b5.destroy();
    playerscore=playerscore-1
    }
    if(mousePressedOver(b6)){
      b6.destroy();
    playerscore=playerscore+1
    }
    if(mousePressedOver(b7)){
      b7.destroy();
    playerscore=playerscore+1
    }
    if(mousePressedOver(b8)){
      b8.destroy();
    playerscore=playerscore-1
    }
    
     if(b1.isTouching(finger1)||b1.isTouching(finger2)||b1.isTouching(finger)){
      playerscore=playerscore-1
      b1.destroy();
     } 
     if(b2.isTouching(finger1)||b2.isTouching(finger2)||b2.isTouching(finger)){
      
      b2.destroy();
     } 
     if(b3.isTouching(finger1)||b3.isTouching(finger2)||b3.isTouching(finger)){
      playerscore=playerscore-1
      b3.destroy();
     }
      if(b4.isTouching(finger1)||b4.isTouching(finger2)||b4.isTouching(finger)){
        playerscore=playerscore-1
      b4.destroy();
     } 
     if(b5.isTouching(finger1)||b5.isTouching(finger2)||b5.isTouching(finger)){
      
      b5.destroy();
     } 
     if(b6.isTouching(finger1)||b6.isTouching(finger2)||b6.isTouching(finger)){
      playerscore=playerscore-1
      b6.destroy();
     } 
     if(b7.isTouching(finger1)||b7.isTouching(finger2)||b7.isTouching(finger)){
      playerscore=playerscore-1
      b7.destroy();
     }
     if(b8.isTouching(finger1)||b8.isTouching(finger2)||b8.isTouching(finger)){
      
      b8.destroy();
     }
  }
  
  drawSprites();
}
