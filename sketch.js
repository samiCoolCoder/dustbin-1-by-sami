var red1,red2,red3;
var ground1;
var paper1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

		
	


	engine = Engine.create();
	world = engine.world;

	paper1=new ball2(200,200,20);
	ground1=new ground2(400,height-10,800,20);
	red1=new ground2(600,630,10,100);
	red2=new  ground2(700,630,10,100);
	red3=new ground2(650,675,90,10)

	
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(0);
  paper1.display();
  ground1.display();
  red1.display();
  red2.display();
  red3.display();
  KeyPressed()
  drawSprites();

}

/*function keyPressed() {
	if (keyCode===RIGHT_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	 Body.applyForce(paper1,{x:paper1.position.x,y:paper1.position.y})
 }
   }
*/
   function KeyPressed()
   {
	if (keyCode===RIGHT_ARROW) 
	{
		Body.applyForce(paper1.body,paper1.body.position,{x:10.5,y:-5})
	}
   }
   

