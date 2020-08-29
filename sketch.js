
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var dustbin1,dustbin2,dustbin3;
var paper;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground();
	paper = new Paper();
	dustbin1 = new Dustbin(650,675,100,20);
	dustbin2 = new Dustbin(600,615,20,100);
	dustbin3 = new Dustbin(700,615,20,100);
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  if(keyWentDown(RIGHT_ARROW)){
	  Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }
  if(keyWentDown(LEFT_ARROW)){
	  Body.applyForce(paper.body,paper.body.position,{x:-85,y:-85});
  }

  textSize(30);
  textAlign(CENTER);

  if(paper.body.position.x>width||paper.body.position.x<0||paper.body.position.y>height||paper.body.position.y<0){
	  text("GAME OVER",400,300);
	  text("REFRESH PAGE TO RESTART",400,350);
	  Body.setStatic(paper.body,true);
  } else if (paper.body.position.x - dustbin1.body.position.x < 100/2 + paper.body.circleRadius&&
        dustbin1.body.position.x - paper.body.position.x < 100/2 + paper.body.circleRadius&&
        paper.body.position.y - dustbin1.body.position.y < 20/2 + paper.body.circleRadius&&
        dustbin1.body.position.y - paper.body.position.y < 20/2 + paper.body.circleRadius){
	  text("YOU WIN!!!",400,250);
	  text("REFRESH PAGE TO RESTART",400,300);
	  Body.setStatic(paper.body,true);
  }
  else{
	  text("USE LEFT AND RIGHT ARROWS TO",400,200);
	  text("LAND THE PAPER BALL IN THE DUSTBIN",400,250);
  }
}



