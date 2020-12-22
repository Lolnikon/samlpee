
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Contraint = Matter.Constraint;

var myWorld, myEngine;
var ground, ball, rope;
var box1, box2, box3, box4, box5;

function setup() {
    createCanvas(3000,800);

    myEngine = Engine.create();
    myWorld = myEngine.world;

    ground = new Ground(1500, 790, 3000, 20);
    ball = new Ball(200,200,80,80);

    box1 = new Box(100, 100, 30, 200);
    box2 = new Box(200, 100, 30, 300)
    box3 = new Box(300, 100, 30, 250)
    box4 = new Box(400, 100, 30, 350)
    box5 = new Box(500, 100, 30, 200)

    rope = new Rope(ball.body, {x:500, y: 50});
}

function draw() {
    background("orange");
    Engine.update(myEngine);

    ground.display();

    ball.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    rope.display();
}