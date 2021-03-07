var starImg, fairyImg, bgImg;
var fairy , fairyVoice,fairyBody;
var star, starBody;
var canvas
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	canvas=createCanvas(800, 680);

	engine = Engine.create();
	world = engine.world;
	// fairyVoice.play();
	

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.16;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
     



	var star_options={
		resitution:1.3
	
	}

	var fairy_options={

		iStatic:true

	}

	starBody = Bodies.circle(650 , 30 , 5 ,star_options );
	World.add(world, starBody);

	fairyBody = Bodies.circle(650 , 30 , 5 ,fairy_options );
	World.add(world, fairyBody);
	
	Engine.run(engine);
	

}      



function draw() {
  background(bgImg);

 
if(keyDown("RIGHT_ARROW")){
	fairy.x=fairy.x+10
}
if(keyDown("LEFT_ARROW")){
	fairy.x=fairy.x-10
} 

if(keyDown("DOWN_ARROW")){
	star.velocityY=7
}


if(star.isTouching(fairy)){
	star.x=star.x
	star.y=fairy.y-30
star.velocityY=0
}
  drawSprites();

}


