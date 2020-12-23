const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10,box11, box12, box13, box14, box15;
var ground, ball1, string,engine,world;


function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world= engine.world;
  
  box1 = new box(500,543,80,80);
  box2 = new box(500,463,80,80);
  box3 = new box(500,383,80,80);
  box4 = new box(500,303,80,80);
  box5 = new box(500,223,80,80);
  box6 = new box(500,143,80,80);
  box7 = new box(590,543,80,80);
  box8 = new box(590,463,80,80);
  box9 = new box(590,383,80,80);
  box10 = new box(590,303,80,80);
  box11 = new box(590,223,80,80);
  box12 = new box(680,543,80,80);
  box13 = new box(680,463,80,80);
  box14 = new box(680,383,80,80);
  box15 = new box(680,303,80,80);

  ball1= new ball(200,400,40);
  string = new Rope(ball1.body,{x:200,y:50});
  
  var option={
    isStatic:true
  }
  ground = Bodies.rectangle(400,595,800,10,option);
  World.add(world,ground);
}

function draw() {
  background(255,255,255);
  rectMode(CENTER);
  fill("brown")
  rect(ground.position.x,ground.position.y,800,20);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display(); 
  box14.display();
  box15.display();
  ball1.display();
  string.display();
 /*  if(keyDown("down")){
    fill ("blue");
    ball1.display();
  } */

}

/* function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(ball1.body,ball1.body.position, {x:45,y:-45})
 }  
} */