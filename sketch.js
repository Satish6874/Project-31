
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(1000,600);
  rectMode(CENTER);


  engine = Engine.create();
  world = engine.world;

  for(var k = 0; k<= width; k = k + 110){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
   }

   for(var j = 40; j<=width; j = j+60){
     plinkos.push(new Plinko(j,75));
   }

   for(var r = 15; r<=width; r=r+60){
     plinkos.push(new Plinko(r,175));
   }
   


  ground = new Ground(500,590,width,20);

  Engine.run(engine);
}

function draw() {
  background(0); 
  rectMode(CENTER);

  for(var k = 0;k < divisions.length;k++){
    divisions[k].display();
  }

  for(var i = 0;i < plinkos.length;i++){
    plinkos[i].display();
  }

  if(frameCount%100===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  if(frameCount%150===0){
    particles.push(new Particle(random(width-400,width-200),10,10));
  }

  if(frameCount%200===0){
    particles.push(new Particle(random(width-500,width-600),10,10));
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  ground.display();
  
  
}