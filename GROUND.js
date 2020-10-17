class ground2

{
    constructor(x,y,width,height)
    {
        var option={
            'isStatic':true,
            'density':1.5,
            'friction':1.0,
            'restitution':1.0
        }
        this.width=width
        this.height=height
        this.gr=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.gr);
    }

    display()
    {
        fill("brown")
        rectMode(CENTER)
       rect(this.gr.position.x,this.gr.position.y,this.width,this.height)
    }
}