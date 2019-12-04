class cell{
    constructor(x,y,w,h,v){
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.v = v;
    }
    set_black(){
      if(mouseX<=(this.x+this.h)&&mouseY<=(this.y+this.w)&&mouseY>=this.y&&mouseX>=this.x){
        this.v = 0;
      }
    }
    set_white(){
      if(mouseX<=(this.x+this.h)&&mouseY<=(this.y+this.w)&&mouseY>=this.y&&mouseX>=this.x){
        this.v = 1;
      }
    }
    display_white(){
      fill(255);
      rect(this.x,this.y,this.w,this.h);
    }
    display_black(){
      fill(0);
      rect(this.x,this.y,this.w,this.h);
    }
}