class Poacher{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char,char1) {
        this.getNewCoordinates()
        let found = []

        for (let i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i]);
                }
            }


          
        }
        for (let i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i]);
                }
            }


          
        }
        return found;
    }



    eat() {
        let emptyCell = this.chooseCell(1,3);
        let newCell = random(emptyCell)
    
        if (newCell) {
            this.energy += 5;
            let newX = newCell[0];
            let newY = newCell[1];
    
            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                    break;
                }
            }
    
            for (let i = 0; i < predatorArr.length; i++) {
                if (predatorArr[i].x == newX && predatorArr[i].y == newY) {
                    predatorArr.splice(i, 1)
                    break;
                }
            }
            matrix[newY][newX] = 7;
            matrix[this.y][this.x] = 0;
    
            this.x = newX;
            this.y = newY;
    
            // if (this.energy > 20) {
            //     this.mul()
            // }
        } 
        
        
        
        else {
            this.move()
        }
    }

    move() {
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 7;
            matrix[this.y][this.x] = 0;


            this.x = newX;
            this.y = newY;

            this.energy--

            
        }
    }


  
}