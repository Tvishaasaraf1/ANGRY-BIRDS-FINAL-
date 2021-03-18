class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png")
    this.path = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    //this.path = [[x1,y1],[x2,y2],[x3,y3],...]

    if(this.body.position.x>200&&this.body.velocity.x>10){
    var position = [this.body.position.x,this.body.position.y]
    this.path.push(position)
    }
    for(var i=0;i<this.path.length;i++){
      image(this.smoke,this.path[i][0],this.path[i][1])
    }
  }
}
