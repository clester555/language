class Maze{

    columns = 0;
    rows = 0;
    grid = [];
    stack = [];
    currentCell;
    deadEnd = [];

    constructor(width,height,left,top,cellSize){
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.cellSize = cellSize;
        this.create();
    }

    create(){
        this.columns = floor(this.width/this.cellSize);
        this.rows = floor(this.height/this.cellSize);
        for(let y = 0;y<this.rows;y++){
            for(let x = 0; x < this.columns; x++){
                let cell = new Cell(x,y,this.cellSize);
                this.grid.push(cell);
            }
        }
        this.currentCell = this.grid[0];
        this.currentCell.visited = true;
        let mazeFinished = false;
        while(!mazeFinished){
            let next = this.checkNeighbors(this.currentCell);
            if (next){
                next.visited = true;  
                this.stack.push(this.currentCell);
                this.removeWalls(this.currentCell,next);
                this.currentCell.setAsDeadEnd(false)
                this.currentCell = next;
            }else if(this.stack.length>0){
                this.currentCell = this.stack.pop();
            }else{
                mazeFinished = true;
            }
        }
    }
  
    
    draw(){
        for (let i = 0; i<this.grid.length;i++){
            this.grid[i].draw(this.left,this.top);
        }
    }


    checkNeighbors(cell){
        let neighbors = [];
        
        let top = this.grid[this.getIndex(cell.i, cell.j-1)]; 
        let right = this.grid[this.getIndex(cell.i+1, cell.j)];
        let left = this.grid[this.getIndex(cell.i-1, cell.j)];
        let bottom = this.grid[this.getIndex(cell.i, cell.j+1)];

        if (top && !top.visited){neighbors.push(top)};
        if (bottom && !bottom.visited){neighbors.push(bottom)}
        if (left && !left.visited){neighbors.push(left)}
        if (right && !right.visited){neighbors.push(right)}
        

      
        if (neighbors.length>0){
            let r = floor(random(0,neighbors.length));
            return neighbors[r];
         }else{
             return undefined;
        }
    
    }


    getIndex(i,j){
        if(i<0 || j<0 || i>this.columns-1 || j> this.rows-1){
            return -1;
        }
        return i + j * this.columns;
    }

    removeWalls(a,b){
        let x = a.i - b.i;
        if(x==1) {
            a.removeWall(3);
            b.removeWall(1);
        }else if (x==-1) {
            a.removeWall(1);
            b.removeWall(3);
        }
        let y = a.j - b.j;
        if(y==1) {
            a.removeWall(0);
            b.removeWall(2);
        }else if (y==-1) {
            a.removeWall(2);
            b.removeWall(0);
        }
    }
}

