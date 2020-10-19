/*Exercise 6.2
Create a class name Rectangle with attributes topLeftXPos, topLeftYPos,
width and lenght. Add a method named collides(otherRectangle) that 
returns true only if the current rectangle collides with otherRectangle.

Test the collides(otherRectangle) method by using multiple test cases. 

Inserendolo nel codice, se hai l'angolo superiore sinistro del rettangolo in 
rectX, rectY, significa che il suo bordo sinistro è in rectX e il suo bordo
 superiore è in rectY. Quindi, se hai la dimensione del rettangolo rectWidth
di rectHeight, puoi ottenere il suo bordo destro usando rectX + rectWidth 
e il suo bordo inferiore usando rectY + rectHeight.




*/

class Rectangle {
    constructor(topLeftXPos, topLeftYPos, rectWidth, rectHeight) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.rectWidth = rectWidth;
        this.rectHeight = rectHeight;
    }
    collide(otherRectangle) {
        if (otherRectangle.topLeftXPos <= this.topLeftXPos + this.rectWidth || otherRectangle.topLeftYPos <= this.topLeftYPos + this.rectHeight) {
            return true
        } else {
            return false
        }
    }

}


let Rectangle1 = new Rectangle(2, 2, 4, 2);
let Rectangle2 = new Rectangle(5, 3, 4, 2);

console.log(Rectangle1);
console.log(Rectangle2);
console.log("collide: " + Rectangle1.collide(Rectangle2));