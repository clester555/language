class Player{
    
    x = 100;
    y = 100;
    h = 100;
    w = 100;
    prize = null;
    hasConflict = false;

    constructor(name,pic){
        this.name = name;
        this.pic = pic;
    }

    setPosition(x,y){
        this.x=x;
        this.y=y;
    }

    setSize(w,h){
        this.w=w;
        this.h=h;
    }

    getName(){
        return this.name;
    }

    setPrize(prize){
        if(this.prize == null){
            this.prize =prize;
            this.pic = prize.pic;
        }else{
            this.hasConflict = true;
            this.prize = prize;
        }
        //this.pic = prize.pic;
    }

    setPic(pic){
        this.pic = pic;
    }

    setHasConflict(hasConflict){
        this.hasConflict = hasConflict;
    }

    getPrize(){
        return this.prize;
    }

    getPic(){
        return this.pic;
    }

    getHasConflict(){
        return this.hasConflict;
    }

    draw(){
        image(this.pic,this.x,this.y,this.w,this.h);
        text(this.name,this.x-40,this.y+80);
    }
}