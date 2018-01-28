/* 
ORIGINALLY THE APPLCIATION WAS SUPPOSED TO ROTATE THE PLAYER'S SPRITE SO IT
WAS FACING THE APPROPRIATE DIRECTION HOWEVER DUE TO MATH - THIS IS NOT THE CASE
*/



function Player() {
    this.x = 480/2;
    this.y = 640/2;
    this.size = 10;
    this.rotation = 0;

    this.draw = function() {
        /*
        ctx.translate(this.width/2,this.height/2);
        ctx.rotate(1.1);
        alert("r" + this.rotation);
        ctx.ellipse(this.x, this.y, this.size + 10, this.size + 5, 0, 0, 2 * Math.PI);
        ctx.fillStyle = "grey";
        ctx.fill();
        ctx.ellipse(this.x, this.y, this.size + 10, this.size + 5, 0, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.restore();

        ctx.save();
//        ctx.translate(this.x, this.y);

      // increase the rotation by 20 more degrees
      //this.rotation+=20*Math.PI/180;

      // rotate the canvas by 20 degrees
      ctx.rotate(this.rotation);

      ctx.ellipse(this.x, this.y, this.size + 10, this.size + 5, 0, 0, 2 * Math.PI);
      ctx.stroke();


      // restore the context to its unrotated state
      ctx.restore();
      */

        //ctx.save();

        ctx.beginPath();
        // move the rotation point to the center of the rect
        //ctx.translate( this.x+this.size, this.y+this.size );
        // rotate the rect
        ctx.rotate(this.rotation);

        // draw the rect on the transformed context
        // Note: after transforming [0,0] is visually [x,y]
        //       so the rect needs to be offset accordingly when drawn
        //ctx.rect( this.x,this.y, this.x, this.y);
        ctx.trnaslate(this.x, this.y);
//        ctx.ellipse(this.x, this.y, this.size + 10, this.size + 5, 0, 0, 2 * Math.PI);
        ctx.fillRect(this.x, this.y, 20, 20);
        ctx.trnaslate(-this.x, -this.y);
        ctx.stroke();

        ctx.fillStyle="gold";
        ctx.fill();
        ctx.closePath();
        //ctx.restore();

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
