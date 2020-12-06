var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var helicopter
var wall1,wall2,wall3

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup(){
helicopter=createSprite(200,100,50,50)
helicopter.addImage(helicopterIMG)
helicopter.scale=0.5
wall1=createSprite(200,380,150,10)
wall1.shapeColor="red"
wall2=createSprite(130,350,10,50)
wall2.shapeColor="red"
wall3=createSprite(270,350,10,50)
wall3.shapeColor="red"

}

engine=Engine.create()
 world=engine.world 
 var objectOption={
  isStatic:true
 }
 object=Bodies.rectangle(200,390,400,20,objectOption)
 World.add(world,object)
 var ballOption={
   restitution:0.8
 }
 ball=Bodies.circle(200,100,20,ballOption)
 World.add(world,ball)


function draw() {
  background("black")
  Engine.update(engine)
  rectMode(CENTER)
  fill("brown")
  rect(object.position.x,object.position.y,400,20)
  ellipseMode(RADIUS)
  fill("blue")
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites()
}
