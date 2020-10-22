const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bg = loadImage("donee.jpg")
}

function setup() {
	createCanvas(1200, 650);

	engine = Engine.create();
	world = engine.world;

  paper = new Paper(100,600,20,20)
  ground = new Ground(450,630,1500,50)
  ground2 = new Ground(1180,350,50,1500)
  ground3 = new Ground(10,350,50,1500)
  ground4 = new Ground(450,0,1500,50)
	bin1 = new Bin(600,530,30,150)
	bin2 = new Bin(700,530,30,150)
  bin3 = new Bin(650,530,130,30)
  greenbin = new Greenbin(650,530,10,50);
	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(bg); 
 
  ground.display()
  ground2.display()  
  ground3.display()
  ground4.display()
  bin1.display()
  bin2.display()
  bin3.display()
  greenbin.display();
  paper.display()
  textSize(20)
   text("You want to inculcate the habit of throwing the waste in the trash bin in young individuals and help keep your city clean",200,300)
   text("You have to be a model for others in throwing waste in the dustbin",340,350)
  text("Press UP ARROW KEY to throw the waste.Remember (in the green dustbin) GOOD LUCK ",300,400)
  text("paper",paper.x,paper.y)
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:21,y:-21})
	}
  }