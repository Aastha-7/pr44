var bgImg,basketImg,appleImg,bananaImg,melonImg,pineappleImg,orangeImg;
var bg;
function preload(){
  bgImg=loadImage("images/bg.jpg");
  basketImg=loadImage("images/basket.png");
  appleImg=loadImage("images/apple2.png");
  bananaImg=loadImage("images/banana2.png");
  melonImg=loadImage("images/melon2.png");
  orangeImg=loadImage("images/orange2.png");
  pineappleImg=loadImage("images/pineapple2.png");
}





function setup() {
  createCanvas(1000,400);
  bg=createSprite(400, 200, 1000, 400);
  bg.addImage(bgImg);
  bg.scale=1.3;
  basket=createSprite(100,350,100,100);
  basket.addImage(basketImg);
  basket.scale=0.3;

}


function draw() {
  background(255,255,255);  
  if(keyDown("RIGHT_ARROW")){
  basket.x=basket.x+5;
  }
  if(keyDown("LEFT_ARROW")){
    basket.x=basket.x-5;
  }
  

  drawSprites();
}