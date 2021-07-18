const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.body;

var ball, ground;
var engine,world;
var wedge, angle=60;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options ={
    restitution : 0.95,
    frictionAir : 0.01
}

var ground_options ={
    isStatic:true
}

var ops={
  isStatic:true
}

ball = Bodies.circle(100,10,20,ball_options);
World.add(world,ball);

wall = Bodies.rectangle(300, 150, 70, 10, ground_options);
World.add(world,wall);

ground = Bodies.rectangle(200,390,400,20,ground_options);
World.add(world,ground);

wedge= Bodies.rectangle(100,200,100,20,ops);
World.add(world,wedge);

rectMode(CENTER);
ellipseMode(RADIUS);

}

function draw() 
{
  background(0);
  Engine.update(engine);

  Matter.Body.rotate(wedge,angle)
  push();
  translate(wedge.position.x,wedge.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();

  angle += 0.1;

  ellipse(ball.position.x,ball.position.y,20);

  rect(ground.position.x,ground.position.y,400,20);

  rect(wall.position.x,wall.position.y,70,20);
}

