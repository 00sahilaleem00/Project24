class Ground {
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(width/2,height-10,width,10,options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("yellow");
        rect(width/2,height-10,width,10);
    }
}