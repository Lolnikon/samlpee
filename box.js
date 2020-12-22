class Box {
    constructor(x, y, w, h) {
        var options = {
            restitution: 0.5,
            friction: 1,
            density: 0.04
        }

        this.body = Bodies.rectangle(x, y, w, h);
        this.width = w;
        this.height = h;
        World.add(myWorld, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("black");
        strokeWeight(3);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
    }
}