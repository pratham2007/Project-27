class Roof{
    constructor(){
        var option = {
            'isStatic':true
        }
       this.body = Bodies.rectangle(width/2, height/4, 250, 15, option);
       World.add(world, this.body);
    }
   display(){
       rectMode(CENTER);
       fill(51);
       rect(this.body.position.x, this.body.position.y, 350, 45);
   }
}