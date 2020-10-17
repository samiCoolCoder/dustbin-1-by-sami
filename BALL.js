class ball2

{
    constructor(x,y,radius)
    {
        var option={
            'restitution':0.6,
            'density':1.2,
            'friction':1.0
        }
        this.radius=radius
        this.body=Bodies.circle(x,y,radius,option);
        World.add(world,this.body);
    }

    display()
    {
        fill("magenta")
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
}