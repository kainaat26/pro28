
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 var ground,tree;
function preload()
{
	treeIMG = loadImage("tree.png");
	boyIMG = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

 ground = new Ground(400,650,800,20);
	stone1 = new Stone(140,580,5,10);

	//mango1 = new Mango(600,300,0,0);
	//mango2 = new Mango(600,210,10,10);
	//mango3 = new Mango(750,350,2,2);
	//mango4 = new Mango(100,100,2,2);
	//mango5 = new Mango(100,100,2,2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 ground.display();
 
image(treeIMG,500,160,300,500);
image(boyIMG,100,550,200,120);
stone1.display();

//mango1.display();
//mango2.display();
//mango3.display();
//mango4.display();
//mango5.display();
  drawSprites();
 
}



