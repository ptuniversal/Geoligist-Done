class Stone{
    constructor(x,y,width,height){
    
        var options={
            'density':12,
            'friction': 0.9,
            'restitution':0.8    
        }

        this.body=Bodies.rectangle(x,y,40,60,options);
        this.x=x;
        this.y=y;
        this.width=40;
        this.height=60;

        World.add(world,this.body)

    }

    display(){

        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle)
        strokeWeight(1);
        stroke('blue');
        fill('white');
        rectMode(CENTER);
        rect(0,0,this.width,this.height);

        pop();

    }
}