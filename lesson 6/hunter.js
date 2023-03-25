let LivingCreature = require("./LivingCreature")

module.exports = class Hunter extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        // this.energy = 100;
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
        let emptyCell = this.chooseCell(1,5);
        let newCell = emptyCell[Math.floor(Math.random()* emptyCell.length)]

        if (newCell) {
            this.energy += 5;
            let newX = newCell[0];
            let newY = newCell[1];

            for (let i = 0; i < fruitArr.length; i++) {
                if (fruitArr[i].x == newX && fruitArr[i].y == newY) {
                    fruitArr.splice(i, 1)
   
                }
                matrix[newY][newX] = 0;
                matrix[this.y][this.x] = 0;

                let x = Math.floor(Math.random() * matrix.length)
                let y = Math.floor(Math.random() * matrix.length)
        
                matrix[y][x] = 5
                    
            }

            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }
                matrix[newY][newX] = 6;
                matrix[this.y][this.x] = 0;
            }

        
           

            this.x = newX;
            this.y = newY;

          
        }



        else {
            this.move()
        }
    }

    move() {
        let emptyCell = this.chooseCell(0);
        let newCell = emptyCell[Math.floor(Math.random()* emptyCell.length)]

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 0;


            this.x = newX;
            this.y = newY;

            this.energy--

            if (this.energy < 0) {
                this.die()
            }
        }
    }

   die() {
        for (let i = 0; i < hunterArr.length; i++) {
            if (hunterArr[i].x == this.x && hunterArr[i].y == this.y) {
                hunterArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0;
    }
}