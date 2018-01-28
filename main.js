
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.style.cssText = "background:yellow;";
ctx.beginPath();
ctx.rect(0, 0, 640, 480);
ctx.fillStyle = "rgba(0,0,128, 0.5)";
ctx.fill();
ctx.closePath();

var virus = [];// = [];
var scenery = [];
var player = new Player();
var increments = 0;
var incInc = 1;
/*
increments += 1 + incrementsSpeed;
if (increments == 50 + Math.floor(Math.random() * 30)) {
    virus.push(new Virus());
    incrementsSpeed += 0.01;
    increments = 0;
}
*/

function game() {
    increments += 1 + incInc;
    if (increments >= 50) {
        virus.push(new Virus());
        increments = 0;
        incInc += 0.1;
    }
    ctx.clearRect(0,0, 640, 480);
    for (var a = 0; a < virus.length; a++) {
        virus[a].draw();
    }
    player.draw();
    for (var b = 0; b < virus.length; b++) {
        if (virus[b].collision(player)) {
            player.health -= virus[b].health;
            virus[b].health -= 0.5;
        }
    }

    for (var c = 0; virus.length; c++) {
        if (virus[c].health < 0) {
            virus.splice(virus.indexOf(virus[c]), 1);
        }
    }
    if (player.health < 0) {
        alert("Fail, please try again (refresh your browser)");
    }
}

setInterval(function() {
    game();
}, 120);
