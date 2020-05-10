class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
     this.body = Bodies.circle(x,y,10,options);
      World.add(world, this.body);
  };

  display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("black");
    ellipse(pos.x, pos.y, 30);
  };
};
