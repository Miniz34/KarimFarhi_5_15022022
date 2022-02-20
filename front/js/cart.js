const getProduct = JSON.parse(localStorage.getItem("product"));

console.log(getProduct);

const articles = document.getElementById("cart__items");
console.log(articles);




if (getProduct === null) {
  const emptyCart = `Le panier est vide`;
  articles.innerHTML = emptyCart;
} else {


  for (let i in getProduct) {

    let idProduct = getProduct[i].id;
    let colorProduct = getProduct[i].colorSelected;
    let nameProduct = getProduct[i].name;
    let priceProduct = getProduct[i].price;
    let quantityProduct = getProduct[i].quantity;
    let priceTotalProduct = getProduct[i].price * quantityProduct;
    console.log(idProduct);
    console.log(colorProduct);
    console.log(nameProduct);
    console.log(priceProduct);
    console.log(quantityProduct);
    articles.innerHTML += `<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
                <div class="cart__item__img">
                  <img src="https://media.but.fr/images_produits/produit-zoom/5609933152210_F.jpg" alt="Photographie d'un canapé">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${getProduct[i].name}</h2>
                    <p>${colorProduct}</p>
                    <p>${priceTotalProduct}</p>
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


    console.log(getProduct.length)
    const totalPrice = document.getElementById('totalPrice');
    totalPrice.innerHTML = quantityProduct * priceProduct;

  };






  let quantites = getProduct[0].price;
  console.log(quantites);

}

