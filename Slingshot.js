class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1= loadImage("sprites/sling1.png")
        this.sling2= loadImage("sprites/sling2.png")
        this.sling3= loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20)
        image(this.sling2,175,20)
      
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
        push()
        if(pointA.x < 175){
            strokeWeight(4);
            stroke(48,22,8)
            image(this.sling3,pointA.x-25, pointA.y-10,12,15)
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            line(pointA.x, pointA.y, pointB.x+20 , pointB.y);
        }
        else{
            strokeWeight(2);
            stroke(48,22,8)
            image(this.sling3,pointA.x-25, pointA.y-10,12,15)
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            line(pointA.x, pointA.y, pointB.x+20 , pointB.y);
            
        }       
        pop()
        }
    }
    
}