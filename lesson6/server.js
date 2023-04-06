var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});


server.listen(3001);

function matrixGenerator(matrixSize, grass, grassEater, predator, jur, fruit, hunter, poacher) {
    var matrix = []

    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0)
        }
    }

    for (let i = 0; i < grass; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        matrix[y][x] = 1
    }


    for (let i = 0; i < grassEater; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 2

    }

    for (let i = 0; i < predator; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 3
    }

    for (let i = 0; i < jur; i++) {
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 4
    }
    for (let i = 0; i < fruit; i++) {
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 5
    }
    for (let i = 0; i < hunter; i++) {
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 6
    }
    for (let i = 0; i < poacher; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 7
    }
    io.emit("send matrix", matrix)
    return matrix
}

matrix = matrixGenerator(50, 0, 0, 0, 0, 0, 0, 0)

grassArr = []
grassEaterArr = []
predatorArr = []
jurArr = []
fruitArr = []
hunterArr = []
poacherArr = []
const Predator = require("./predator.js")
const Grass = require("./grass.js")
const GrassEater = require("./grassEater.js")
const Hunter = require("./hunter.js")
const Jur = require("./jur.js")
const Poacher = require("./poacher.js")
const Fruit = require("./fruit.js")



function createObj() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                var grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                var pred = new Predator(x, y)
                predatorArr.push(pred)
            } else if (matrix[y][x] == 4) {
                var jur = new Jur(x, y)
                jurArr.push(jur)
            } else if (matrix[y][x] == 5) {
                var fr = new Fruit(x, y)
                fruitArr.push(fr)
            } else if (matrix[y][x] == 6) {
                var han = new Hunter(x, y)
                hunterArr.push(han)
            } else if (matrix[y][x] == 7) {
                var poh = new Poacher(x, y)
                poacherArr.push(poh)
            }

        }

    }
    io.emit("send matrix", matrix)
}


createObj()

function addGrass() {
    for (var i = 0; i < 2; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
            var gr = new Grass(x, y)
            grassArr.push(gr)
        }
    }
}
function addGrassEater() {
    for (var i = 0; i < 2; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
            grassEaterArr.push(new GrassEater(x, y))
        }
    }
}


function addPredator() {
    for (var i = 0; i < 2; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
            var pred = new Predator(x, y)
            predatorArr.push(pred)
        }
    }
}


// function addJur() {
//     for (var i = 0; i < 2; i++) {
//         var x = Math.floor(Math.random() * matrix[0].length)
//         var y = Math.floor(Math.random() * matrix.length)
//         if (matrix[y][x] = 0) {
//             matrix[y][x] = 4;
//             var jur = new Jur(x, y)
//             jurArr.push(jur)
//         }
//     }
// }
function addHunter() {
    for (var i = 0; i < 2; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 6
            var han = new Hunter(x, y)
            hunterArr.push(han)
        }
    }
}
function addFruits() {
    for (var i = 0; i < 2; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
            var fr = new Fruit(x, y)
            fruitArr.push(fr)
        }
    }
}
function addPoacher() {
    for (var i = 0; i < 2; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 7
            var poh = new Poacher(x, y)
            poacherArr.push(poh)
        }
    }
}


function addJur() {
    for (var i = 0; i < 2; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
            var jur = new Jur(x, y)
            jurArr.push(jur)
        }
    }
}
function restart() {
    grassArr = []
    grassEaterArr = []
    predatorArr = []
    waterArr = []
    bombArr = []
    flowersArr = []
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[y][x] = 0;
        }
    }
   
}


function gameMove() {
    for (let i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }
    for (let i in predatorArr) {
        predatorArr[i].eat()
    }
    for (let i in hunterArr) {
        hunterArr[i].eat()
    }
    for (let i in jurArr) {
        jurArr[i].eat()
    }

    for (let i in poacherArr) {
        poacherArr[i].eat()
    }
    io.sockets.emit("send matrix", matrix)
}


io.on('connection', function (socket) {
    createObj()
    socket.on("restart", restart)
    socket.on("add grass", addGrass);
    socket.on("add grassEater", addGrassEater);
    socket.on("add predator", addPredator);
    socket.on("add fruits", addFruits);
    socket.on("add poacher", addPoacher);
    socket.on("add hunter", addHunter);
    socket.on("addWater", addJur);
})


setInterval(function statitics() {
    // console.log(grassArr.length,waterArr.length);
        
    countd = {
        grass: grassArr.length,
        grassEater: grassEaterArr.length,
        predator: predatorArr.length,
        jur: jurArr.length,
        fruit: fruitArr.length,
        hunter: hunterArr.length,
        poacher: poacherArr.length
        
        
    }
    fs.writeFile("statics.json", JSON.stringify(countd), function () {
        io.emit("send datas", countd)
    })
    
}, 300);

setInterval(gameMove, 1000)