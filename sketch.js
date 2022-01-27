var PLAY = 1;
var END = 0;
var gameState = PLAY;

var score = 0;
var backgr;
var player;
function preload(){
  banana1 = loadImage("banana.png");
  backImage = loadImage("jungle.jpg");
  stone1 = loadImage("stone.png");
  monkey_running =   loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
obstacle1IMG = loadImage("banana.png");
}


function setup() {
  createCanvas(600,400);
  backgr = createSprite(0,0,800,400);
  backgr.addImage(backImage);


player = createSprite(50,250,20,50);
player.addAnimation("Running",monkey_running);
player.scale = 0.18;

invisibleGround = createSprite(235,305,460,5);
invisibleGround.visible = false;

obstacleGroup = new Group();
}

function draw() {
  background(255,255,255);  
  player.collide(invisibleGround);

  player.velocityY = player.velocityY + 0.8

  text("Score: "+ score,200,50);

if (gameState === PLAY){
  spawnObstacles();

  score = score + Math.round(getFrameRate()/60);

  if(keyDown(UP_ARROW) ){
    player.velocityY = -8;  
  }

  if(obstacleGroup.isTouching(player)){
    gameState = END;
}
}

else if(gameState === END){
  player.velocityY = 0;
  obstacleGroup.setVelocityXEach(0);
}

  

  
  drawSprites();
} 
function spawnObstacles(){
  if(frameCount % 100 === 0) {
    var obstacle1 = createSprite(480,160,10,40);
    obstacle1.y = Math.round(random(190,280));
    //obstacle.debug = true;
    obstacle1.velocityX = -3;
    obstacleGroup.add(obstacle1);
    obstacle1.addImage(obstacle1IMG);
    obstacle1.scale = 0.05;
  }
}

function reset(){
  gameState === PLAY;
}