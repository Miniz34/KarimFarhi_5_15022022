const getProduct = JSON.parse(localStorage.getItem("product"));

console.log(getProduct);

const articles = document.getElementById("cart__items");
console.log(articles);

if (getProduct === null) {
  const emptyCart = `Le panier est vide`;
  articles.innerHTML = emptyCart;
} else {
  for (let i = 0; i < getProduct.length; i++) {
    articles.innerHTML += `<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
                <div class="cart__item__img">
                  <img src="https://media.but.fr/images_produits/produit-zoom/5609933152210_F.jpg" alt="Photographie d'un canapé">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${getProduct[i].name}</h2>
                    <p>Vert</p>
                    <p>${getProduct[i].price}</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : ${getProduct[i].quantity} </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${getProduct[i].quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article> `
  };
  console.log(getProduct.length)
  const totalPrice = document.getElementById('totalPrice');
  totalPrice.innerHTML = getProduct.priceTotal;
}


