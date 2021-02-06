class Mango{
  constructor(x, y,radius) {
      var options = {
          isStatic:true,
          restitution: 0.2,
          friction:0.3,
          density:1.0
              
          }
          this.radius = radius;
          this.body = Bodies.circle(x,y,radius,options);
          this.image = loadImage("mango.png");
          World.add(world,this.body);
        }
    
        display(){
          push();
          //ellipseMode(RADIUS);
          translate(this.body.position.x,this.body.position.y);
          imageMode(CENTER);
          image(this.image,0,0);
          //ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        }
       }