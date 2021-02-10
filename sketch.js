
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
var ground
var bin1,bin2,bin3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	bin1 = new Dustbin(500,690,200,20)
	bin2 = new Dustbin(415,605,20,150)
	bin3 = new Dustbin(594,605,20,200)



	//Create the Bodies Here.

	paper = new Paper(100,650)

	

	ground = new Ground(400,700,800,10)
	


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  keyPressed();
console.log(mouseX,mouseY);
  
	paper.display();

	ground.show();
	bin1.display()
	bin2.display()
	bin3.display()

 
}

function keyPressed(){
	if(keyCode ===32){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0.5 , y:-0.5})
	}
}



