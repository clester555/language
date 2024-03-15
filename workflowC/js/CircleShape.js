class CircleShape{
    color = '#abcdef';
    x = 100;
    y = 100;
    d = 100;
   
    
    constructor(picture){
       this.pic = picture;
    }

    draw(){
        fill(this.color);
        circle(this.x,this.y,this.d);
        fill(this.textColor);
        text(this.word,this.x,this.y); 
        
    }

    setword(newWord){
        
    }
}