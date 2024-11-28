class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
};

class ShoppingCart {
  constructor (customerName, initialTotalCost=0) {
      this.customerName = customerName;
      this.totalCost = initialTotalCost;
      this.listOfProducts = [];
  };

  addItem = (product, quantity = 1) => {

      this.listOfProducts.push({product, quantity});
      this.totalCost += product.price * quantity;
  };
  getCurrentTotalCost = () => {
      
      return this.totalCost;
  };
  checkout = () => {
      console.log(`Заказ оформлен для ${this.customerName}. Общая стоимость заказа: ${this.getCurrentTotalCost()} рублей. Спасибо за покупку!`);
  };
};

const product = new Product('Картошка', 100);
const product2 = new Product('Морковка', 50);

const cart = new ShoppingCart('Николай');

cart.addItem(product, 2);
cart.addItem(product2, 4);

cart.checkout();
