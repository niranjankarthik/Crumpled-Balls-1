var paperBall, ground;
var D1, D2, D3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	 ground = new Ground(400,height-20, 800,10);
	 paperBall = new Paper(120,370,20);
	 D1 = new Dustbin(620,365,200,15);
	 D2 = new Dustbin(620-93,313,15,90);
     D3 = new Dustbin(620+93,313,15,90);

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  ground.display();
  paperBall.display();

  D1.display();
  D2.display();
  D3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paperBall.body, paperBall.body.position,{x=85, y=-85});
	}
}


