var bgImg ,bg;
var catImg,cat;
var mouse,mouseImg;
var mouseImg2,catImg2;
var catImg3,mouseImg3;

function preload() {
    //load the images here
  bgImg=loadImage("images/garden.png");
  catImg=loadAnimation("images/cat1.png");
  mouseImg=loadAnimation("images/mouse1.png")
  mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
  catImg2=loadAnimation("images/cat2.png","images/cat3.png")
  mouseImg3=loadAnimation("images/mouse4.png")
  catImg3=loadAnimation("images/cat4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 bg=createSprite(500,400);
 bg.addImage(bgImg);
bg.scale=1;

cat=createSprite(500,600);
cat.addAnimation("catsleepig",catImg);
cat.scale=0.15

mouse=createSprite(100,600);
mouse.addAnimation("mousestanding",mouseImg);
mouse.scale=0.15;
}

function draw() {

    background(255);

    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5; 
    cat.addAnimation("catRunning", catImg2);
    cat.changeAnimation("catRunning");
    
    mouse.addAnimation("mouseTeasing", mouseImg2);
    mouse.frameDelay = 25;
    mouse.changeAnimation("mouseTeasing");
}

}