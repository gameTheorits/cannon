

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var engine, world,mouseCan,mCon;
var tanker,ground;
var ball1,ball2;
var cb;
var sb
function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    tanker = new Tanker(100,320,100,100);
    ground = new Ground(600,390,1200,10);
    ball1 = new Ball(700,100,30);
    ball2 = new Ball(800,100,30);
    cb = new CanonBall(100,320);
    sb = new ShootBall(cb.body,{x:100,y:320});

}

function draw() {
// Remember to update the Matter Engine and set the background.
  background(255);
  Engine.update(engine);
  
  tanker.display();
  ground.display();
  cb.display();
  ball1.display();
  ball2.display();
  sb.display();

}
function mouseDragged(){
    Matter.Body.setPosition(cb.body, {x: mouseX , y: mouseY});
}
function keyReleased() {
 
  sb.shoot()  
}