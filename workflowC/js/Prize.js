class Prize{
    name = 'name';
    pic  = null;
    x = 0;
    y = 0;
    h = 180;
    w = 180;


    constructor(name,pic){
        this.name =name;
        this.pic = pic;
    }

    setSize(size){
        this.w=size;
        this.h=size;
    }

    getPic(){
        return this.pic;
    }
    
    setLocation(x,y){
        this.x = x;
        this.y = y;
    }
    draw(){
        image(this.pic,this.x,this.y,this.w,this.h);
    }
}