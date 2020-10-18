class Paper
{
    constructor(x,y,diamet){
        var options = {
            isStatic:false,
            restitution:0.2,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.circle(x,y,diamet,options);
        this.height  = diamet;
        this.width = diamet;
        
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill("red");
        ellipse(pos.x, pos.y, this.width, this.height);
    }

}