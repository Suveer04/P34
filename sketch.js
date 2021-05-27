const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1150,400,250,250);

  box1 = new Box(620, 530, 100,50);
  box2 = new Box(620, 460, 70,70);
  box3 = new Box(620,390, 70,70);
  box4 = new Box(620, 320,70,70);
  box5 = new Box(620, 250,70,70);
  box6 = new Box(740, 530,70,70);
  box7 = new Box(740, 460,70,70);
  box8 = new Box(740, 390, 70,70);
  box9 = new Box(740, 320, 70,70);
  box10 = new Box(740, 250,70,70);
  box11 = new Box(740,180, 70,70);
  box12 = new Box(740, 110,70,70);
  box13 = new Box(880,530,100,50);
  box14 = new Box(880,460,70,70);
  box15 = new Box(880, 390,70,70);
  box16 = new Box(880, 320, 70,70);
  box17 = new Box(880, 250, 70,70);
  box18 = new Box(880, 180, 70,70);
  box19 = new Box(880, 110, 70,70);
  box20 = new Box(880, 40, 70,70);
  box21 = new Box(610, 110, 150,40);
  box22 = new Box(745,40, 150,40);
  box23 = new Box(880,15, 150,40);
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
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
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();

  hero.display();
  rope.display();
  monster.display();
  

}

function mouseDragged(){
 Matter.Body.setPosition(hero.body,{x : mouseX, y : mouseY});
}