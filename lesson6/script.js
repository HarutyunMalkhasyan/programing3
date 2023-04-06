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

let Ses = []
function Season(s) {
    let color = []
    if (s == 1) {
        color = ["white"]
    }
    else if (s == 2) {
        color = ["#ffd966"]
    }
    else if (s == 3) {
        color = ["green"]
    }
    else if (s == 4) {
        color = ["#f1c232"]

    }
    Ses = color
    return Ses
}
Season(3)
console.log(Ses);
function updateColor(matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            var tBot = side - side * 0.1
            textSize(tBot);
            if (matrix[y][x] == 1) {
                fill(Ses[0])
                rect(x * side, y * side, side, side)
                text('🌿', x * side, y * side + tBot)
            } else if (matrix[y][x] == 2) {
                fill("yellow")
                rect(x * side, y * side, side, side)
                text('🦌', x * side, y * side + tBot)
            } else if (matrix[y][x] == 3) {
                fill("red")
                rect(x * side, y * side, side, side)
                text('🐆', x * side, y * side + tBot)
            } else if (matrix[y][x] == 4) {
                fill("blue")
                rect(x * side, y * side, side, side)
                text('💧', x * side, y * side + tBot)
            } else if (matrix[y][x] == 5) {
                fill("pink")
                rect(x * side, y * side, side, side)
                text('🍇', x * side, y * side + tBot)
            } else if (matrix[y][x] == 6) {
                fill("black")
                rect(x * side, y * side, side, side)
                text('👨', x * side, y * side + tBot)
            } else if (matrix[y][x] == 7) {
                fill("brown")
                rect(x * side, y * side, side, side)
                text('💀', x * side, y * side + tBot)
            } else {
                fill("gray")
                rect(x * side, y * side, side, side)

            }
            // rect(x * side, y * side, side, side)
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

function restart(){
    socket.emit("restart");
}
function addGrass() {
    socket.emit("add grass");
}
function addGrassEater() {
    socket.emit("add grassEater");
}
function addHunter() {
    socket.emit("add hunter");
}
function addPredator() {
    socket.emit("add predator");
}
function addFruits() {
    socket.emit("add fruits");
}
function addPoacher() {
    socket.emit("add poacher");
}
function addJur() {
    socket.emit("addWater");
}


socket.on ("send datas", function(count){
    document.getElementById("grass").innerHTML = count.grass;
    document.getElementById("grassEater").innerHTML = count.grassEater;
    document.getElementById("predator").innerHTML = count.predator;
    document.getElementById("water").innerHTML = count.jur;
    document.getElementById("poacher").innerHTML = count.poacher;
    document.getElementById("fruit").innerHTML = count.fruit;
    document.getElementById("hunter").innerHTML = count.hunter;
    
})