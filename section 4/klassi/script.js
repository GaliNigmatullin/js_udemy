'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle { // наследлование 
    constructor(height, width, text, bgColor) {
        super(height, width);  // всегда на первом месте в конструкторе.. передает свойства родителя
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`text: ${this.text}, color: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'kkkk', 'black');
div.showMyProps();
console.log(div.calcArea());

const square = new Rectangle(10, 10);

console.log(square.calcArea());