class Paper{
    constructor(x,y,r){
        var option={
            isStatic:false,
            restitution:0.1,
            friction:0.1,
            density:1.5
        }
        this.r=r;
        this.body=Bodies.circle(x,y,r/2,option);
        this.image = loadImage("paper.png")
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER)
        fill("green");
        image(this.image,0,0,40,40)
        pop();
    }
}