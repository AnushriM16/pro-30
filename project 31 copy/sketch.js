const Engine = Matter.Engine;
const World = Matter.World;
const Matter = Matter.events;
const Bodies = Matter.Bodies;

var engine,world
var particles = [];
var plinkos = [];
var rows = [];
var ground;
var divisions;

var divisionsHeight = 150;

function setup() {
  createCanvas(600,500);
  engine = Engine.create();
  ground = newGround(200,500,1700,10);

  for(var j = 40; j<=width; j=j+50){
    plinkos.push(newPlinko(j,55))
  }
  for (var j = 15; j<=width-10; j=j+50){
    plinkos.push(newPlinko(j,85))
  }
  for(var j = 40; j<=width-10; j=j+50){
    plinkos.push(newPlinko(j,120))
  }
  for(var j =15;j<=width-10; j=j+50){
    plinkos.push(newPlinko(j,150))
  }
  for(var j = 40; j<=width-10; j=j+50){
    plinkos.push(newPlinko(j,185))
  }
  for(var j = 15;j<=width-10; j=j+50){
    plinkos.push(newPlinko(j,225))
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(newPlinko(j,265))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,305))
  }
  for(var k = 0; k <=width; k = k+80){
    rows.push(new Rows(k, height-rowsHeight/2, 10, rowsHeight));
}
}

function draw() {
  background(0);  
  if(frameCount % 30 ===0){
    particle=newParticle(random(130,400),0,7,random(0,360));
    particles.push(particle);
  }
  Engine.update(engine,25);
  for(var i=0;i<particles.length;i++){
    particles(i).display();
  }
  for(var k = 0; k<rows.length;k++){
    rows[k].display();
 }
 for(var j = 0;j<plinkos.length;j++){
   plinkos[j].display();
 }
 ground.display();
 //divisons.display();

 drawSprites();
  
}