class Rubber{
	constructor(x,y){
		var options={
			'restitution':0.3,
			'friction':5,
			'density':1
		}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=20;
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rotate(this.body.angle)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipse(0,0,this.r,this.r);
			//draw the ellipse here to display the rubber ball

			pop()
	}

}