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



// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ------------Validation du formulaire --------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------



// let formTest = document.querySelector(".cart__order__form__question");
// console.log(form.firstChild.nextSibling.firstName);
// console.log(form.firstName);

// ---------------------------------------------------------
// ------------Selection input formulaire ------------------
// ---------------------------------------------------------

let formFirstName = document.querySelector("#firstName");
console.log(formFirstName);

// selection input nom
let formLastName = document.querySelector("#lastName");
console.log(formLastName);

// Selection input adresse
let formAddress = document.querySelector("#address");
console.log(formAddress);

// selection input ville
let formCity = document.querySelector("#city");
console.log(formCity);

// selection input email
let formEmail = document.querySelector("#email");
console.log(formEmail);

// selection formulaire
let form = document.querySelector(".cart__order__form");
console.log(form);


// ---------------------------------------------------------
// ------------Validation des données ----------------------
// ---------------------------------------------------------

// écoute validation prénom
formFirstName.addEventListener('change', function () {
  validNameFirstName(this);
});

// écoute validation nom
formLastName.addEventListener('change', function () {
  validName(this);
});

// écoute validation adresse
formAddress.addEventListener('change', function () {
  validAddress(this);
});

// écoute validation ville
formCity.addEventListener('change', function () {
  validCity(this);
});

// écoute validation email
formEmail.addEventListener('change', function () {
  validEmail(this);
});

// écoute validation formulaire complet
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (validNameFirstName(formFirstName) && validName(formLastName) && validAddress(formAddress) && validCity(formCity) && validEmail(formEmail)) {
    form.submit();
    console.log("Données valides")
  } else {
    console.log("Données invalides")
    alert("Merci de vérifier les informations que vous avez renseigner");
  }
});

// ---------------------------------------------------------
// ------------Fonction vérifications des données-----------
// ---------------------------------------------------------

// G DONNE UNE SEQUENCE TRUE/FALSE, DEMANDER POURQUOI
// let nameFirstName = /^([A-Za-z][A-Za-z ,.'-]*){2,}$/g;                /^[a-zA-Z]{2,20}$/;       ;  <<< bonne version
const nameFirstName = /[A-Za-z -]{2,128}$/;
const addressRegex = /[A-Za-z -]{2,128}$/;                               // /(?=^.{5,255}$)^\w+(\s\w+){2,}$/;                          //  a refaire
const cityRegex = /[A-Za-z -]{2,128}$/;                               // /(?=^.{1,128}$)^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;                // a refaire
const emailRegex = /[A-Za-z -]{2,128}$/;                           // /(?=^.{5,255}$)^([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,})$/;


// Regarder pour regrouper ces fonctions

// Vérification du prénom
const validNameFirstName = function (validityName) {
  let testFirstName = nameFirstName.test(validityName.value);
  console.log(testFirstName);

  let testErrorName = nameFirstName.test(validityName.value);
  let error = formFirstName.nextElementSibling;
  console.log(error);
  if (testErrorName) {
    error.style.color = "#006600";
    error.innerHTML = `Prénom valide`;     // voir si je peux : error.classList.add('.text-succes'); sans bootstrap;
    return true;
  } else if (validityName.value.length < 2) {
    error.style.color = "";
    error.textContent = "Veuillez renseigner plus de 2 lettres";
    return false;
  } else {
    error.style.color = "";
    error.textContent = "Prénom invalide : veuillez n'utiliser que des lettres";
    return false;
  }
}

// Vérification du nom
const validName = function (validityNom) {
  let testNom = nameFirstName.test(validityNom.value);
  console.log(testNom);

  let testErrorNom = nameFirstName.test(validityNom.value);
  let error = formLastName.nextElementSibling;
  console.log(error);
  if (testErrorNom) {
    error.style.color = "#006600";
    error.innerHTML = `Nom valide`;
    return true;
  } else if (validityName.value.length < 2) {
    error.style.color = "";
    error.textContent = "Veuillez renseigner plus de 2 lettres";
    return false;
  } else {
    error.style.color = "";
    error.textContent = "Nom invalide : veuillez n'utiliser que des lettres";
    return false;
  }
}

// Vérification de l'adresse
const validAddress = function (validityAddress) {
  let testAddress = addressRegex.test(validityAddress.value);
  console.log(testAddress);

  let testErrorAddress = addressRegex.test(validityAddress.value);
  let error = formAddress.nextElementSibling;
  console.log(error);
  if (testErrorAddress) {
    error.style.color = "#006600";
    error.innerHTML = `Valide`;
    return true;
  } else {
    error.style.color = "";
    error.textContent = "Adresse invalide";
    return false;
  }
}

// Vérification de la ville
const validCity = function (validityCity) {
  let testCity = cityRegex.test(validityCity.value);
  console.log(testCity);

  let testErrorCity = addressRegex.test(validityCity.value);
  let error = formCity.nextElementSibling;
  console.log(error);
  if (testErrorCity) {
    error.style.color = "#006600";
    error.innerHTML = `Nom de ville valide`;
    return true;
  } else {
    error.style.color = "";
    error.textContent = "Ville invalide";
    return false;
  }
}

// Vérification de l'email
const validEmail = function (validityEmail) {
  let testEmail = emailRegex.test(validityEmail.value);
  console.log(testEmail);

  let testErrorEmail = addressRegex.test(validityEmail.value);
  let error = formEmail.nextElementSibling;
  console.log(error);
  if (testErrorEmail) {
    error.style.color = "#006600";
    error.innerHTML = `Adresse mail valide`;
    return true;
  } else {
    error.style.color = "";
    error.textContent = "Adresse mail invalide: veuillez renseigner une adresse mail au format xxxxx@xxx.xx";
    return false;
  }
}


// let testErrorName = nameFirstName.test(validityName.value);
// console.log(testErrorName);
// console.log(nameFirstName.test);



