const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, bwall, lwall, rwall, ground;

function preload() {}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, 670, width, 20);

  lwall = new Sidewall(550, 600, 10, 100);
  rwall = new Sidewall(450, 600, 10, 100);
  //Create the Bodies Here.

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();

  lwall.display();
  rwall.display();

  drawSprites();
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, { x: 30, y: -30 });
  }
}
