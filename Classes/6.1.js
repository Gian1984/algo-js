/*Exercise 6.1
Create a class named Circle with attributes xPos, yPos and radius. Add a method 
named move(xOffset, yOffset) that will adjust the position of the circle. 
Add a getter accessor named surface that will return the 
surface of the circle.

Test its method and accessors by modifying the values and checking 
if everything is consistent.*/


class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    get suface() {
        let sur = Math.PI * this.radius * this.radius;;
        return sur;
    }
    get position() {
        let pos = [this.xPos, this.yPos];
        return pos;
    }
    move(xOffset, yOffset) {
        this.xPos = xOffset;
        this.yPos = yOffset;
    }
}
let Mycircle = new Circle(15, 20, 15);

console.log(Mycircle.suface);
console.log("le cercle se trouve en: " + Mycircle.position);

Mycircle.move(3, 3);

console.log("la cercle s'est déplacer vers: " + Mycircle.position);