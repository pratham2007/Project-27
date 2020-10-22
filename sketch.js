
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rope1, rope2, rope3, rope4, rope5;
var bob1, bob2, bob3, bob4, bob5;
var roof;

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

  roof = new Roof();
  
  var bobDiameter = 40;
  var posx = width/2;
  var posy = height/2 + 150;

	bob1 = new Bob(posx-bobDiameter*2, posy, bobDiameter);
	bob2 = new Bob(posx-bobDiameter, posy, bobDiameter);
	bob3 = new Bob(posx, posy, bobDiameter);
	bob4 = new Bob(posx+bobDiameter, posy, bobDiameter);
	bob5 = new Bob(posx+bobDiameter*2, posy, bobDiameter);

	rope1 = new Rope(bob1.body, roof.body, -bobDiameter*2, 0);
	rope2 = new Rope(bob2.body, roof.body, -bobDiameter*1, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, bobDiameter*1, 0);
  rope5 = new Rope(bob5.body, roof.body, bobDiameter*2, 0);
  
  var h = createElement("h1", "Press Up arrow key or  Down Arrow key.");
  h.position(50, 600); 

	Engine.run(engine);
}

function draw() {
  background(220);

  Engine.update(engine);

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-55, y:-45});
	} else if(keyCode === DOWN_ARROW){
    Matter.Body.applyForce(bob5.body, bob5.body.position, {x:55, y:45});
  }
}
