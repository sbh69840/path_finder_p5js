let rows = 100;
let columns = 100;
let width_cell = 10;
let height_cell = 10;
//The draw size denotes the square size, that colors at one point of time, 2 means a 2x2 sized square.
//For now, I am not using this, as I have hard coded it.
let draw_size = 2;
let black = false;
let white = false;
let row_p;
let col_p;
let grid = [];
function setup() {
  createCanvas(740, 880);
  for(let i=0;i<rows;i++){
    for(let j =0;j<columns;j++){
      grid[i*rows+j] = new cell(i+i*height_cell,j+j*width_cell,width_cell,height_cell,1);
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
      if(grid[i*rows+j].v){
        grid[i*rows+j].display_white();
      }else{
        grid[i*rows+j].display_black();
      }
    }
  }
  // grid[mouseY+mouseX].set_visited();
  row_p = mouseY/height_cell;
  col_p = mouseX/width_cell;
  row_p = Math.floor(row_p);
  col_p = Math.floor(col_p);
  if(black){
    console.log(row_p,col_p);
    grid[col_p*rows+row_p].set_black();
    grid[(col_p+1)*rows+row_p].set_black();
    grid[(col_p+1)*rows+(row_p+1)].set_black();
    grid[col_p*rows+(row_p+1)].set_black();
  }
  if(white){
    grid[col_p*rows+row_p].set_white();
    grid[(col_p+1)*rows+row_p].set_white();
    grid[(col_p+1)*rows+(row_p+1)].set_white();
    grid[col_p*rows+(row_p+1)].set_white();
  }

}
function mousePressed(){
  if(mouseButton==LEFT){
    white = false;
    black = !black;
  }else{
    black = false;
    white = !white;
  }

}
function mouseDragged(){
  
}

class cell{
  constructor(x,y,w,h,v){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.v = v;
  }
  set_black(){
    this.v = 0;
  }
  set_white(){
    this.v = 1;
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