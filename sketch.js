
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ball_options;
var groundObj;

var leftSide, rightSide;


function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;


	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	leftSide = new Ground(1100, 600, 20 ,120);

	rightSide = new Ground(800, 600, 20, 120);

	ground = new Ground(width/2, 670, width, 20);


	//Create the Bodies Here.
	ball = Bodies.circle(200, 200, 30, ball_options);
	World.add(world, ball);

	Engine.run(engine);
	rectMode(CENTER);
}


function draw() {
  
  background(0);

  ground.display();

  leftSide.display();

  rightSide.display();

  fill("pink");
  ellipse(ball.position.x, ball.position.y, 30);
  

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:130, y:100});
	}
}

