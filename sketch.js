const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,ground, ground2;
var ball, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    //getBackgroundImg();
    backgroundImg = loadImage("sprites/ground.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground2 = new Ground(600, height, 1200, 20);
    ground = new Ground(840,225,200,10);
    ground1 = new Ground(740,120,200,10);
    ground3 = new Ground(940,325,200,10);

    
    glass1 = new Glass(800,215,70,70);
    glass2 = new Glass(850,215,70,70);
    glass3 = new Glass(700,110,70,70);
    glass4 = new Glass(750,110,70,70);
    glass5 = new Glass(900,300,70,70);
    glass6 = new Glass(950,300,70,70);

    ball = new Ball(200,230);
    slingshot = new SlingShot(ball.body,{x:200, y:230});
    
}

function draw(){
    //if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    strokeWeight(4);
    ground2.display();
    ground.display();
    ground1.display();
    ground3.display();
    ball.display();
    slingshot.display();
    glass1.display();
    glass1.score();
    glass2.display();
    glass2.score();
    glass3.display();
    glass3.score();
    glass4.display();
    glass4.score();
    glass5.display();
    glass5.score();
    glass6.display();
    glass6.score();
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && ball.body.speed<1){
        Matter.Body.setPosition(ball.body,{x : 200, y: 230});
        //Matter.Body.setAngle(ball.body,0);
        slingshot.attach(ball.body);
        ball.trajectory = [];
    }
}

/*async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}*/
