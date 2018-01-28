
function Virus() {
    this.x = Math.floor(Math.random() * 640);
    this.y = Math.floor(Math.random() * 480);
    this.color = "";
    this.height = 10;
    this.width = 10;
    this.health = 3 + Math.floor(Math.random() * 10);

    if (this.health >= 8) {
        this.color = "red";
    }
    else if (this.health >= 4) {
        this.color = "maroon";
    } else {
        this.color = "orange";
    }
    /*
    this.range = function(i) {
        if (Math.random() * 2 =< 1) {
            return -i;
        } else {
            return i;
        }
    }
    */
    this.draw = function() {
        for (var i = 0; i < 1 + Math.random() * 3; i++) {
            ctx.beginPath();
            ctx.arc(this.x+i,this.y+i,this.health, 0, 2*Math.PI);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }
    }

    this.collision = function(other) {
        if (this.x < other.x + other.width &&
            this.x + this.width > other.x &&
            this.y < other.y + other.height &&
            this.height + this.y > other.y) {
                return true;
            }
    }
}
/*
var health = 60;
function Virus() {
    this.x = 480/2;
    this.y = 640/2;
    this.size = 10;
    this.height = this.size;
    this.width = this.size;
    this.rotation = 0;

    this.draw = function() {

        ctx.beginPath();
        ctx.rect(this.x, this.y - 50, 60, 10);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = "green";
        ctx.rect(this.x, this.y - 50, health, 11);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();

        ctx.save();
        ctx.translate( this.x, this.y );
        ctx.rotate( this.rotation );
        ctx.translate( -this.x, -this.y );
        ctx.ellipse(this.x, this.y, this.size + 10, this.size + 5, 0, 0, 2 * Math.PI);
        ctx.fillStyle = "grey";
        ctx.fill();
        ctx.ellipse(this.x, this.y, this.size + 10, this.size + 5, 0, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.restore();
        ctx.closePath();
    }
    //this.draw();
}


*/
