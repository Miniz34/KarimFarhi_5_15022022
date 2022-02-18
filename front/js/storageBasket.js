function saveBasket(basket) {
  localStorage.setItem("basket", basket);
}

function getBasket() {
  return localStorage.getItem("basket");
}

function addBasket(product) {
  let basket = getBasket();
  basket.push(product);
}