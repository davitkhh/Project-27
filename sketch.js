
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var string1, string2, string3, string4, string5;
var roof;

function preload() {
	
}

function setup() {
	createCanvas(950, 950);

	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	bob1 = new Bob(225, 750);
	bob2 = new Bob(350, 750);
	bob3 = new Bob(475, 750);
	bob4 = new Bob(600, 750);
	bob5 = new Bob(725, 750);
	
	roof = new Roof(475, 75, 850, 75);

	var off = 124
	string3 = new String(bob3.body, roof.body, 0, 0);
	string2 = new String(bob2.body, roof.body, -off, 0);
	string1 = new String(bob1.body, roof.body, -off * 2, 0);
	string4 = new String(bob4.body, roof.body, off, 0);
	string5 = new String(bob5.body, roof.body, off * 2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  string2.display();
  string3.display();
  string1.display();
  string4.display();
  string5.display();

  roof.display();
  drawSprites();

  if (keyDown(UP_ARROW)) {
	console.log('jumping')
	bob1.jump();
  //   Matter.Body.applyForce(ball.body, ball.body.position, {x: 85, y: 200});
 }
 
}



