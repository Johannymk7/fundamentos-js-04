// Escribe tu código aquí:
class Rectangle {
    constructor(length, width) {
      this.length = length;
      this.width = width;
    }
  
    calculateArea() {
      return this.length * this.width;
    }
  }
  
  class Square extends Rectangle {
    constructor(sidelength) {
      // Llama al constructor de la clase padre (Rectangle)
      super(sidelength, sidelength);
    }
  }
  
  // Crea una instancia de la clase Square
  const square = new Square(7);
  
  // Accede al método calculateArea de la clase Rectangle (que es la clase padre de Square)
  console.log('Área del cuadrado:', square.calculateArea());