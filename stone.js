class Stone {
    constructor(x, y,radius) {
      var options = {
          isStatic:true,
          restitution: 0,
          friction:1,
          density:1.2
          
      }
      this.radius = radius;
      this.body = Bodies.circle(x,y,radius,options);
      World.add(world,this.body);
    }

    display(){
      push();
      ellipseMode(RADIUS);
      fill("white");
      ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
   }