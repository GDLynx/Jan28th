function Player() {
    this.x = 480/2;
    this.health = 60;
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
        ctx.rect(this.x, this.y - 50, this.health, 11);
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

var onMobile;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    //alert("Mobile");
    onMobile = true;
    alert("Use your device by tilting it to control the creature");
} else {
    //alert("Desktop");
    onMobile = false;
    alert("You're not on a mobile device");
}

/// Check the device's orientation is accessible
if (window.DeviceOrientationEvent && onMobile) {
    window.addEventListener("deviceorientation", function(event)
    {
        /// Get Device Orientation (for Fish)
        //player.getDeviceOrientation();
        player.x = event.alpha;
        player.y = event.beta;
        player.rotation = Math.round(event.gamma);
        //player.rotation = Math.round(event.gamma) * 2;
    })
};

/*
if (!onMobile) {
    window.addEventListener("mousemove", function(e) {
        for (var p = 0; p < present.length; p++) {
            // present[p].desktopInput(e);
            present[p].position.y = e.clientY;
            present[p].position.x = e.clientX;
        }
    });
}
*/
