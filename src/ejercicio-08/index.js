// Escribe tu código aquí:
class Product {
    constructor(name, price, quantity) {
      this.name = name
      this.price = price
      this._quantity = quantity
    }
  
    get quantity() {
      return this._quantity
    }
  
    set quantity(newQuantity) {
      this._quantity = newQuantity
    }
  
    get totalPrice() {
      return this.price * this._quantity
    }
  }
  
  const product = new Product('Hat', 19.99, 2)
  console.log('Total Price:', product.totalPrice)
  
  product.quantity = 5
  console.log('Updated Total Price:', product.totalPrice)