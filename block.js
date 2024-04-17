class Block {
    constructor(c1, c2, c3, x, y, h) {
      this.c1 = c1;
      this.c2 = c2;
      this.c3 = c3;
    
    this.x = x;
    this.y = y;
      this.h = h;
      
      this.d = 10;
    }
    
    display() {
      
        
   this.SetGradientBlock(0, this.x, this.y, this.h, this.c1, this.c2, this.c3);
   this.SetGradientBlock(this.x, width, this.y, this.h, this.c1, this.c2, this.c3);  
      
    }
    
    move() {
      if(this.x > width || this.x < 0) {
        this.d *= -1;
      }
      this.x += this.d;
    }
    
    SetGradientBlock(min, max, y, h, c1, c2, c3) {
    
    
    var x = 0.5
    var range =max-min
     this.SetGradientBlock(min, min, x*range, y, h, c1, c2)
     this.SetGradientBlock(min + x*range, min + max , y, h, c2, c3)
  }
  
    SetGradientBlock(min, max, y, h, c1, c2) {
     for (var i=min; i<=max; i++) {
     var amt = map(i, min, max, 0, 1);
     var c3 = lerpColor(c1, c2, amt);
    
    stroke(c3);
    line(i, y, i, y + h);
      }
    
   }
    
  }
  