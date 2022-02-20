const articles = document.getElementById("cart__items");
const getProduct = JSON.parse(localStorage.getItem("product"));
fetch("http://localhost:3000/api/products/")
  .then((response) =>
    response.json()
      .then((data) => {
        cartArticle = data;
        // console.log(cartArticle);
      }))


if (getProduct === null) {
  const emptyCart = `Le panier est vide`;
  articles.innerHTML = emptyCart;
} else {


  for (let i in getProduct) {

    let idProduct = getProduct[i].id;
    let colorProduct = getProduct[i].colorSelected;
    let nameProduct = getProduct[i].name;
    let priceProduct = + getProduct[i].price;
    let quantityProduct = getProduct[i].quantity;
    let priceTotalProduct = getProduct[i].price * quantityProduct;
    let imgUrl = getProduct[i].urlImg;

    // console.log(idProduct);
    // console.log(colorProduct);
    // console.log(nameProduct);
    // console.log(priceProduct);
    // console.log(quantityProduct);



    articles.innerHTML += `<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
                <div class="cart__item__img">
                  <img src="${imgUrl}" alt="Photographie d'un canapé">
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

    // if (getProduct[i].id == getProduct[i].id) {
    //   console.log("répétition")
    // } else {
    //   console.log("pas de répétition")
    // }
    // console.log(getProduct[i].id);
    // console.log(getProduct[1].id)
    // console.log(idProduct.length);


    // let quantites = getProduct[i].price;
    // console.log(quantites);

    // console.log(getProduct.length)
    // console.log(getProduct[i]);
    // const totalPrice = document.getElementById('totalPrice');
    // // totalPrice.innerHTML = quantityProduct * priceProduct;
    // console.log(totalPrice);


    function getTotals() {

      // Récupération du total des quantités
      let quantityTotal = document.getElementsByClassName('itemQuantity');
      let quantityLength = quantityTotal.length,
        totalQtt = 0;

      for (let i = 0; i < quantityLength; ++i) {
        totalQtt += quantityTotal[i].valueAsNumber;
      }

      let productTotalQuantity = document.getElementById('totalQuantity');
      productTotalQuantity.innerHTML = totalQtt;
      // console.log(totalQtt);

      // Récupération du prix total
      let totalPrice = 0;

      for (let i = 0; i < quantityLength; ++i) {
        totalPrice += (quantityTotal[i].valueAsNumber * getProduct[i].price);
      }

      let productTotalPrice = document.getElementById('totalPrice');
      productTotalPrice.innerHTML = totalPrice;
      // console.log(totalPrice);
    }
    getTotals();


  };

}



// ------------Validation des données---------------


