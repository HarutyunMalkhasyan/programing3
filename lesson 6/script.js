// function matrixGenerator(matrixSize,grass,grassEater,predator,jur,fruit,hunter,poacher){
//     var matrix = []

const socket = io()

//     for(let i = 0 ; i < matrixSize; i++){
//             matrix.push([])
//         for(let j = 0 ; j < matrixSize; j ++){
//                 matrix[i].push(0)
//         }
//     }

//     for(let i = 0; i < grass; i++){
//         let x = Math.floor(Math.random() * matrixSize)
//         let y = Math.floor(Math.random() * matrixSize)
//             matrix[y][x] = 1
//     }


//     for (let i = 0; i < grassEater; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 2

//     } 

//     for(let i = 0; i < predator; i++){

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 3
//     }

//     for(let i = 0; i < jur; i++){
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 4
//     }
//     for(let i = 0; i < fruit; i++){
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 5
//     }
//     for(let i = 0; i < hunter; i++){
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 6
//     }
//     for(let i = 0; i < poacher; i++){

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 7
//     }

//     return matrix
// }
// var matrix = matrixGenerator(40,40,2,2,1,1,1,1)
var side = 20


// var grassArr = []
// var grassEaterArr = []
// var predatorArr = []
// var jurArr = []
// var fruitArr = []
// var hunterArr = []
// var poacherArr = []
function setup() {
    frameRate(10)
    createCanvas(30 * side, 30 * side)
    // for(let y = 0; y < matrix.length; y ++){
    //     for(let x = 0; x < matrix[y].length; x++){
    //                 if(matrix[y][x] == 1){
    //                     var gr = new Grass(x,y)
    //                     grassArr.push(gr)
    //                 } else if (matrix[y][x] == 2){
    //                     var grEat = new GrassEater(x,y)
    //                     grassEaterArr.push(grEat)
    //                 } else if (matrix[y][x] == 3){
    //                    var pred = new Predator(x,y)
    //                    predatorArr.push(pred)
    //                 } else if (matrix[y][x] == 4){
    //                     var jur = new Jur(x,y)
    //                     jurArr.push(jur)
    //                 }else if (matrix[y][x] == 5){
    //                     var fr = new Fruit(x,y)
    //                     fruitArr.push(fr)
    //                 }else if (matrix[y][x] == 6){
    //                     var han = new Hunter(x,y)
    //                     hunterArr.push(han)
    //                 }else if (matrix[y][x] == 7){
    //                     var poh = new Poacher(x,y)
    //                     poacherArr.push(poh)
    //                 }

    //     }

    // }

}

function updateColor(matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green")
            } else if (matrix[y][x] == 2) {
                fill("yellow")
            } else if (matrix[y][x] == 3) {
                fill("red")
            } else if (matrix[y][x] == 4) {
                fill("blue")
            } else if (matrix[y][x] == 5) {
                fill("pink")
            } else if (matrix[y][x] == 6) {
                fill("black")
            } else if (matrix[y][x] == 7) {
                fill("brown")
            } else {
                fill("gray")
            }
            rect(x * side, y * side, side, side)
        }
    }

    //     for(let i in  grassArr){
    //         grassArr[i].mul()
    //       }

    //   for(let i in  grassEaterArr){
    //     grassEaterArr[i].eat()    
    //   }
    //   for(let i in predatorArr){
    //     predatorArr[i].eat()
    //   }
    //   for(let i in hunterArr){
    //     hunterArr[i].eat()
    //   }
    //   for(let i in jurArr){
    //     jurArr[i].eat()  
    //   }

    //   for(let i in poacherArr){
    //     poacherArr[i].eat()
    //   }

}
socket.on("send matrix", updateColor)