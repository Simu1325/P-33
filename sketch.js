const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,snow;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}


  engine = Engine.create();
  world = engine.world;
  snow = new Snow(200,200,100)
function draw() {
  background("snow1.jpg");
  Engine.update(engine); 
  snow.display();
  drawSprites();
}