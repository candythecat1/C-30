class slingshot{
    constructor(body1,point2){
        options = {bodyA: body1,
            pointB: point2,
            stffness: 0.04,
            length: 50};
 this.slingshot = Constraint.create(options);
 World.add(world,this.slingshot);
this.sling1 = loadImage("sprites/sling1.png")
this.sling2 = loadImage("sprites/sling2.png")
this.sling3 = loadImage("sprites/sling3.png")

    }
    display(){
    image(this.sling1,210,70,50,150)
    image(this.sling2,180,60,45,100)
  
    if (this.slingshot.bodyA!== null ){
       var birdpos = this.slingshot.bodyA.position
        var pointBpos = this.slingshot.pointB
       if(birdpos.x < 250){
           push();
           stroke("#301707")
        strokeWeight(7)
        line(birdpos.x-15,birdpos.y,pointBpos.x-30, pointBpos.y+20)
        line(birdpos.x-15,birdpos.y,pointBpos.x+20, pointBpos.y+30)
        image(this.sling3,birdpos.x-30,birdpos.y-10,20,30)
        pop();
        }
       else{
            push();
            stroke("#301707")
            strokeWeight(3)
        line(birdpos.x-15,birdpos.y,pointBpos.x-30, pointBpos.y+20)
        line(birdpos.x-15,birdpos.y,pointBpos.x+20, pointBpos.y+30)
        image(this.sling3,birdpos.x+10,birdpos.y-10,20,30)
           pop();
        }
    }
    }
    
    
    fly(){
    this.slingshot.bodyA = null
    }
    attach(bodyS){
        this.slingshot.bodyA = bodyS

    }
}