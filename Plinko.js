class Plinko {
    constructor(x,y,r){
        var options = {
            isStatic: true,
            restitution:0.8,
          friction:0.5,
          density:1.2
        }
        this.x = x;
        this.y = y;
        this.r = 20;

        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
       fill(255);
       circle(pos.x,pos.y,this.r);
    }
}