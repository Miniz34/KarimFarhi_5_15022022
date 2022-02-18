class Basket {
  constructor() {
    let basket = localStorage.getItem("basktet");
    if (basket == null) {
      this.basket = []
    } else {
      this.basket = JSON.parse(basket);
    }
  }




  save() {
    localStorage.setItem("basket", JSON.stringify(this.basket));
  }

  add(product) {
    let foundProduct = this.basket.find(p => p.id == product.id);
    if (foundProduct != undefined) {
      foundProduct.quantity++;
    } else {
      product.quantity = 1;
      basket.push(product);
    }
    this.saveBasket();
  }
}