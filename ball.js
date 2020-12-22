class Ball {
    constructor(x, y, w, h) {
        var options = {
            density: 1,
            frictionAir: 0.005
            
        }

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(myWorld, this.body);
    }

    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        fill("black");
        translate(pos.x, pos.y);
        rotate(angle);
        ellipse(0, 0, this.width, this,height);
        pop();


    }
}