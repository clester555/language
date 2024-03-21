class Cell{

    constructor(x,y,size){
        this.i = x;
        this.j = y;
        this.size = size;
        this.visited = false;
        this.wall = [true,true,true,true];
        this.isDeadEnd = true;
    }

    draw(left,top){
        let x = this.i*this.size+left;
        let y = this.j*this.size+top;
        stroke(255);
        if(this.wall[0]){line(x,y,x+this.size,y)};
        if(this.wall[1]){line(x+this.size,y,x+this.size,y+this.size)};
        if(this.wall[2]){line(x+this.size,y+this.size,x,y+this.size)};
        if(this.wall[3]){line(x,y+this.size,x,y)};
        
        if(this.isDeadEnd){
            this.highLight(top,left);
        }
    }

    removeWall(index){
        this.wall[index]= false;
    }

    setAsDeadEnd(isDeadEnd){
        this.isDeadEnd = isDeadEnd;
    }


    highLight(top,left){
        let x = this.i*this.size;
        let y = this.j*this.size;
        noStroke();
        fill(0,255,0,150);
        rect(x+left,y+top,this.size,this.size);
    }
}