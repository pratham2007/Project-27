class Bob{
    constructor(posx, posy, radius){
        var options = {
            restitution:0.9,
			friction:1,
			density:1.2
			}
		this.x = posx;
		this.y = posy;
		this.r = radius;
		this.body = Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);
	}
	display(){
      var pos = this.body.position;
	  push();
	  translate(pos.x, pos.y);
	  ellipseMode(CENTER);
	  fill(0, 255, 100);
	  ellipse(0, 0, this.r, this.r);
	  pop();
        }
    }
