const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var m1, m2, m3, m4;
var m5, m6, m7,m8;

function preload() {
  
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
m1 = new Maze(125,125,250,10);
m2 = new Maze(125,675,250,10)
m3 = new Maze(400,400,10,400);
m4 = new Maze(600,125,100,10);
m5 = new Maze(600,675,100,10);
m6 = new Maze(850,550,200,10,);
m7 = new Maze(850,250,200,10);
m8 = new Maze(850,400,200,100);
m9 = new Maze(1050,250,10,150);
m10 = new Maze(1050,550,10,150);
}
function draw(){
background("black");
m1.display();
m2.display();
m3.display();
m4.display();
m5.display();
m6.display();
m7.display();
m8.display();
m9.display();
m10.display();
text(mouseX +"," +mouseY, mouseX,mouseY);
}