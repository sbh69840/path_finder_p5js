let rows = 30;
let columns = 30;
let width_cell = 10;
let height_cell = 10;
let grid = [];
function setup() {
  createCanvas(740, 880);
  for(let i=0;i<rows;i++){
    for(let j =0;j<columns;j++){
      grid[i*rows+j] = new cell(i+i*width_cell,j+j*height_cell,width_cell,height_cell);
    }
  }
  console.log(grid[0]);
}

function draw() {
  background(0);
  noStroke();
  fill(255);
  for(var i=0;i<rows;i++){
    for(var j=0;j<columns;j++){
      grid[i*rows+j].display_white();
    }
  }
  grid[5*rows+5].display_black();

}
class cell{
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  display_white(){
    noStroke();
    fill(255);
    rect(this.x,this.y,this.w,this.h);
  }
  display_black(){
    noStroke();
    fill(0);
    rect(this.x,this.y,this.w,this.h);
  }
}