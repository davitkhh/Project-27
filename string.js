class String {
    constructor(bodyA, bodyB, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            // length: -1000
            pointB: {
                x: this.offsetX,
                y: this.offsetY
            }
        }
        
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }
    
    display() {
    var pointA = this.string.bodyA.position;
    var pointB = this.string.bodyB.position;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y + this.offsetY);
   }
}