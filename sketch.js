var c1; var c2; var c3;
let blocks = []; var num = 20;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  c1 = color("#1892d9");
  c2 = color("#10e0be");
  c3 = color("#23cc31")
  
  var x = width/num;
  var h = height/num
  
  
  for (var i=0; i<num; i++) {
    blocks[i] = new Block(c1, c2, c3, x*i, h*i, h)
  }
  
}

function draw() {
  background(220);

   for (var i=0; i<num; i++) {
    blocks[i].display();
     blocks[i].move();
}

}