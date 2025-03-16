class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
  calculatePerimeter() {
    return this.width * 2 + this.height * 2;
  }
}

const myRectangle = new Rectangle(5, 10);

console.log("Area of the rectangle: ", myRectangle.calculateArea());

console.log("Perimeter of the rectangle: ", myRectangle.calculatePerimeter());
