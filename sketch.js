const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  wall=new Wall(150,200,20,150)
  wall1=new Wall(250,200,20,150)
  wall2=new Wall(200,130,200,20)
 wall3=new Wall(80,200,20,210)
 wall4=new Wall(320,200,20,210)
 wall5=new Wall(200,70,350,20)
 wall6=new Wall(200,40,20,60)
 wall7=new Wall(110,40,20,60)
 wall8=new Wall(290,40,20,60)
 wall9=new Wall(290,10,30,30)
 wall10=new Wall(110,10,30,30)
 wall11=new Wall(200,10,30,30)
 
  ground=new Ground(200,400,400,10)
}

function draw() {
  background(0);  
  Engine.update(engine)
  wall.display()
  wall1.display()
  wall2.display()
  wall3.display()
  wall4.display()
  wall5.display()
  wall6.display()
  wall7.display()
  wall8.display()
  wall9.display()
  wall10.display()
  wall11.display()
  ground.display()
  drawSprites();
}