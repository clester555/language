class Player{
    
    pic = null;
    
    constructor(x,y,left,top,size){
        this.x = x;
        this.y = y;
        this.left = left;
        this.top = top;
        
        this.size = size;
    }

    setPicture(pic){
        this.pic = pic;
    }


    draw(){
        let x = this.x*this.size + this.left;
        let y = this.y*this.size + this.top;
        image(this.pic,x,y,this.size,this.size);
    }
}