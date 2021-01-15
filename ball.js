class Bob {
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 1.2,
            friction: 0.5,
            density: 0.3,
            }

        this.jumping = false;
        this.body = Bodies.circle(x, y, 62, options);
        this.diameter = 50;
        this.width = 75;
        this.height = 75;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill('lime');
        ellipse(0, 0, 124, 124);
        pop();
    }

    jump() {
        

        Matter.Body.applyForce(this.body, this.body.position, {x: -420, y: 0});

    }
            
}