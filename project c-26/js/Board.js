class Board {
    constructor(x, y, width, height, angle) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.image = loadImage("assets/board.png");
        
      }
      display() {
          var pos = this.body.postion;
          push();
          imageMode(CENTER);
          image(this.image, pos.x,pos.y, this.width, this.height);
    pop();

      }
       
        
}