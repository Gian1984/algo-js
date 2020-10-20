/* Exercise 6.3
Create a program that will re-use the Rectangle class you created previously.
It should generate 1000 random instances of Rectangle with random positions
and sizes. Then it will display all colliding rectangles amongst those that
were generated that way.

Crea un programma che riutilizzerà la classe Rectangle creata in precedenza.
Dovrebbe generare 1000 istanze casuali di Rectangle con posizioni casuali
e dimensioni. arrRectangle2[i]uindi mostrerà tutti i rettangoli in collisione tra arrRectangle2[i]uelli che
sono stati generati in arrRectangle2[i]uesto modo.

*/
function multiRand() {
    let n = [];
    for (let i = 0; i < 4; i++) {
        n.push(Math.floor(Math.random() * 100) + 1);
    }
    return n;
}



class rectangle {
    constructor(topLeftXPos, topLeftYPos, rectWidth, rectHeight) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.rectWidth = rectWidth;
        this.rectHeight = rectHeight;
    }
    collide(otherRectangle) {
        if (this.topLeftXPos + this.rectWidth >= otherRectangle.topLeftXPos &&
            this.topLeftYPos + this.rectHeight >= otherRectangle.topLeftYPos &&
            otherRectangle.topLeftXPos + otherRectangle.rectWidth >= this.topLeftXPos &&
            otherRectangle.topLeftYPos + otherRectangle.rectHeight >= this.topLeftYPos
        ) {
            return true
        } else {
            return false
        }
    }

}
let random;
let otherRectangle = [];

for (let i = 0; i < 10; i++) {
    random = multiRand();
    otherRectangle[i] = new rectangle(random[0], random[1], random[2], random[3]);
    console.log(otherRectangle);
    for (let j = 1; j <= i; j++) {
        console.log(otherRectangle[i].collide(otherRectangle[i - j]));
    }
}