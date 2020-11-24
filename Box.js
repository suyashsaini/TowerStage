class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.visibility=255;
    }
    score(){
      if(this.visibility<0 && this.visibility >-105){
        score++;
      }
    }
  display(){
  strokeWeight(3);
    if(this.body.speed <3){
      super.display();
  
  }
  else{
    World.remove(world, this.body);
    //visibility and tint only works for images
    push();
   this.visibility = this.visibility-5;
   pop();
  }
  
  }
  
  }