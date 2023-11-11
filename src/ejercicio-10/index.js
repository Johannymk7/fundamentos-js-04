// Escribe tu código aquí:

// Definir la clase Person primero
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age)
        this.grade = grade
    }

    introduce() {
        console.log(`Hola, soy, ${this.name}, tengo ${this.age} años y estoy en el grado ${this.grade},`)
    }
}

const student = new Student('Bob',19, 12)

student.introduce()
