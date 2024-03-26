class Arrow{
    pic =null;

    constructor(x,y,size){
        this.x = x;
        this.y= y;
        
        this.size = size;
    }

    setPic(pic){
        this.pic = pic;
    }

    draw(){
        image(this.pic,this.x,this.y,this.size);
    }

    isHit(x,y){
        if (x>this.x && x<this.x+this.size){
            if(y>this.y && y< this.y+this.size){
                console.log("hit");
                return true;
            }
        }
        console.log("miss");
        return false;
    }
    
}