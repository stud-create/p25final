class paperobj{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            density:1.2,
        }
        this.x=x;
		this.y=y
        this.r=r
        this.image=loadImage("paper.png")
         this.body=Bodies.circle(this.x,this.y,this.r,options)
         World.add(world, this.body);
    }
display(){
    var pos=this.body.position
    push()
    translate(pos.x, pos.y);
    angleMode(RADIANS)
    rotate(this.angle)
    imageMode(CENTER)
    image(this.image,0,0,this.r,this.r)
    pop()
    
}


}

