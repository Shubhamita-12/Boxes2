const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world;
var ball1;
var ground;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  var ball1A = {
    restitution : 1
  }
  ball1 = Bodies.circle(100,100,50,ball1A);
  World.add(world,ball1);

  var groundA = {
  isStatic : true
  }
  
  ground = Bodies.rectangle(400,350,800,50,groundA);
  World.add(world,ground);

}

function draw() {
  background("yellow");  
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball1.position.x, ball1.position.y, 50, 50);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 50, 50);
  drawSprites();
}