class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.4,
            length:10,
        }
        this.slingshot1=loadImage("sling1.png");
        this.slingshot2=loadImage("sling2.png");
        this.slingshot3=loaadImage("sling3.png");
        this.pointB=pointB;
        this.sling=Constraint.create(options);
        World.add(world,this.sling);

    }
    fly(){
        this.sling.bodyA=null;
    }

    
    

display(){
    image(this.slingshot1,200,20);
    image(this.slingshot2,170,20);
    if(this.sling.bodyA){
        bodyA=this.sling.bodyA.position;
        pointB=yhis.pointB;
        push ();

        stroke(48,22,8);
        if(pointA.x<220){
            strokeWeight(7);
            line (pointA.X-20,pointA.y,pointB.x-10,pointB.y);
            line (pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
            image(this.slingshot3,pointA.x-30,pointA.y-10,15,30);
        }
        else{
            strokeWeight(3);
            line(pointA.x+25,pointA.y,pointB.X-10,pointB.y);
            line(pointA.x+25,pointA.y,pointB.x-10,pointB.y-3);
            image(this.slingshot3,pointA.x+25,pointA.y-10,15,30);

        }
        pop ();
    }

}

}