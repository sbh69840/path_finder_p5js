let rows = 70;
let columns = 70;
let width_cell = 10;
let height_cell = 10;
let black = false;
let white = false;
let bug_x=0;
let bug_y=0;
let bug_xspeed = 1;
let bug_yspeed = 0;
let grid = [];
function setup() {
  createCanvas(770, 770);
  for(let i=0;i<rows;i++){
    for(let j =0;j<columns;j++){
      grid[i*rows+j] = new cell(i+i*height_cell,j+j*width_cell,width_cell,height_cell,1);
    }
  }
  frameRate(10);
}

function draw() {
  background(200);
  noStroke();
  fill(255);
  for(var i=0;i<rows;i++){
    for(var j=0;j<columns;j++){
      if(white){
        grid[i*rows+j].set_white();
      }
      if(black){
        grid[i*rows+j].set_black();
      }
      if(grid[i*rows+j].v){
        grid[i*rows+j].display_white();
      }else{
        grid[i*rows+j].display_black();
      }
    }
  }
  update();
}
function update(){
  bug_x = bug_x+bug_xspeed;
  bug_y = bug_y+bug_yspeed;
  bug_x = constrain(bug_x, 0, (rows)-1);
  bug_y = constrain(bug_y,0,(columns)-1);
  grid[rows*bug_x+bug_y].display_black();
}
function keyPressed(){
  if(keyCode===81){
    white = false;
    black = true;
  }
  if(keyCode===87){
    white=true;
    black=false;
  }
  if(keyCode===69){
    white=false;
    black=false;
  }
  if(keyCode===UP_ARROW){
    bug_xspeed=0;
    bug_yspeed=-1;
  }
  if(keyCode===DOWN_ARROW){
    bug_xspeed=0;
    bug_yspeed=1;
  }
  if(keyCode===RIGHT_ARROW){
    bug_xspeed=1;
    bug_yspeed=0;
  }
  if(keyCode===LEFT_ARROW){
    bug_xspeed=-1;
    bug_yspeed=0;
  }

}

