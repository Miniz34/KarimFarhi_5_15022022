if (localStorage.getItem("product") === "[]") {
  localStorage.clear();
}

const articles = document.getElementById("cart__items");
let getProduct = JSON.parse(localStorage.getItem("product"));




// ----Contact de l'API pour récupération du prix-----
fetch("http://localhost:3000/api/products/")
  .then((response) =>
    response.json()
      .then((data) => {
        cartArticle = data;

        if (getProduct === null) {
          const emptyCart = `Le panier est vide`;
          articles.textContent = emptyCart;
        } else {

          // Initialisation du total prix et quantité
          var prixTotal = 0;
          var qtyTotal = 0;


          for (let i in getProduct) {

            // ----Affichage des éléments du panier -----
            let idProduct = getProduct[i].id;
            let colorProduct = getProduct[i].colorSelected;
            let nameProduct = getProduct[i].name;
            let quantityProduct = getProduct[i].quantity;
            let imgUrl = getProduct[i].urlImg;

            // --- récupération du prix ---
            let checkProduct = data.find(item => item._id == idProduct);
            if (checkProduct != undefined) {
              var priceProduct = checkProduct.price;
            }

            let priceTotalProduct = priceProduct * getProduct[i].quantity;

            // Ajout des articles sur la page
            articles.innerHTML += `<article class="cart__item" data-id="${idProduct}" data-color="${colorProduct}">
                <div class="cart__item__img">
                  <img src="${imgUrl}" alt="Photographie d'un canapé">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${getProduct[i].name}</h2>
                    <p>${colorProduct}</p>
                    <p>${priceTotalProduct} €</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>${getProduct[i].quantity} </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${getProduct[i].quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article> `

            // ------- addition des prix pour total-----
            prixTotal = priceTotalProduct + prixTotal;

            // ------- addition des quantités pour total-----
            qtyTotal = parseInt(quantityProduct) + qtyTotal;

            // ------- affichage des totaux-----
            let productTotalQuantity = document.getElementById('totalQuantity');
            productTotalQuantity.textContent = qtyTotal;

            let productTotalPrice = document.getElementById('totalPrice');
            productTotalPrice.textContent = prixTotal;

          };



          // ----modif quantités----
          function updateQty(event) {
            let qty = document.querySelector(".cart__item__content__settings__quantity");
            qty.addEventListener("change", (event) => {
              let qtyValueChoice = event.target.value;
              let article = event.target.closest('article');
              let checkProduct = getProduct.find(item => item.id == article.dataset.id && item.colorSelected == article.dataset.color)
              console.log(checkProduct);
              if (checkProduct != undefined) {
                checkProduct.quantity = qtyValueChoice;
                localStorage.setItem("product", JSON.stringify(getProduct));
                location.reload();
              }
            });

          }
          updateQty();

          // ----- Supression d'article-----
          function deleteQty(event) {
            let deleteBtn = document.querySelectorAll(".deleteItem");
            for (let j = 0; j < deleteBtn.length; j++) {
              deleteBtn[j].addEventListener("click", (event) => {
                let article = event.target.closest('article');
                console.log(deleteBtn);
                console.log(article);
                let checkProduct = getProduct.find(item => item.id == article.dataset.id && item.colorSelected == article.dataset.color);
                console.log(checkProduct);
                if (checkProduct != undefined); {
                  getProduct = getProduct.filter(art => art.id !== article.dataset.id || art.colorSelected !== article.dataset.color);
                  localStorage.setItem("product", JSON.stringify(getProduct));
                  location.reload();
                }
              }
              );
            }

          }

          deleteQty();

          if (localStorage.getItem("product") === "[]") {
            localStorage.clear();
          }
          // if (getProduct === "[]") {
          //   localStorage.clear();
          // }

        }
      }))
  .catch((err) => {
    alert("Impossible de se connecter à l'API : " + err.message);
  });

console.log(localStorage.product);
console.log(localStorage.getItem("product"));




// ---------------------------------------------------------
// ---------------------------------------------------------
// ------------Validation du formulaire --------------------
// ---------------------------------------------------------
// ---------------------------------------------------------

// ---------------------------------------------------------
// ------------Selection input formulaire ------------------
// ---------------------------------------------------------

let formFirstName = document.querySelector("#firstName");
// console.log(formFirstName);

// selection input nom
let formLastName = document.querySelector("#lastName");
// console.log(formLastName);

// Selection input adresse
let formAddress = document.querySelector("#address");
// console.log(formAddress);

// selection input ville
let formCity = document.querySelector("#city");
// console.log(formCity);

// selection input email
let formEmail = document.querySelector("#email");
// console.log(formEmail);

// selection formulaire
let form = document.querySelector(".cart__order__form");
// console.log(form);



// ------Fonction POST---------

var send = document.getElementById("order");
console.log(send);
function postOrder() {

  // send.addEventListener("click", function (event) {
  // event.preventDefault();
  let productsId = [];
  // for (let i = 0; i < getProduct.length; i++) {
  //   productsId.push(getProduct[i].id);
  // }
  for (const product of getProduct) {
    productsId.push(product.id);
  }

  productsId = [...new Set(productsId)];
  console.log(productsId);

  let clientData = {
    contact: {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      address: document.getElementById("address").value,
      city: document.getElementById("city").value,
      email: document.getElementById("email").value,
    },
    products: productsId,
  }

  fetch("http://localhost:3000/api/products/order", {
    method: "POST",
    body: JSON.stringify(clientData),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => {

      document.location.href = "confirmation.html" + "?id=" + data.orderId;

    })
    .catch((err) => {
      alert("Impossible de se connecter à l'API : " + err.message);
    });

}

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
    console.log("valide");

    postOrder();

  } else {
    console.log("Données invalides")
    alert("Merci de vérifier les informations que vous avez renseigné");
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
const emailRegex = /('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$')$/;                           // /(?=^.{5,255}$)^([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,})$/;


// -----Vérification du prénom-----
const validNameFirstName = function (validityName) {
  let testFirstName = nameFirstName.test(validityName.value);
  let testErrorName = nameFirstName.test(validityName.value);
  let error = formFirstName.nextElementSibling;
  if (testErrorName) {
    error.style.color = "#006600";
    error.textContent = `Prénom valide`;
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

// -----Vérification du nom----
const validName = function (validityNom) {
  let testNom = nameFirstName.test(validityNom.value);
  let testErrorNom = nameFirstName.test(validityNom.value);
  let error = formLastName.nextElementSibling;
  if (testErrorNom) {
    error.style.color = "#006600";
    error.textContent = `Nom valide`;
    return true;
  } else if (validityNom.value.length < 2) {
    error.style.color = "";
    error.textContent = "Veuillez renseigner plus de 2 lettres";
    return false;
  } else {
    error.style.color = "";
    error.textContent = "Nom invalide : veuillez n'utiliser que des lettres";
    return false;
  }
}

// -----Vérification de l'adresse--------
const validAddress = function (validityAddress) {
  let testAddress = addressRegex.test(validityAddress.value);
  let testErrorAddress = addressRegex.test(validityAddress.value);
  let error = formAddress.nextElementSibling;
  if (testErrorAddress) {
    error.style.color = "#006600";
    error.textContent = `Valide`;
    return true;
  } else {
    error.style.color = "";
    error.textContent = "Adresse invalide";
    return false;
  }
}

// ----Vérification de la ville-----
const validCity = function (validityCity) {
  let testCity = cityRegex.test(validityCity.value);
  let testErrorCity = addressRegex.test(validityCity.value);
  let error = formCity.nextElementSibling;
  if (testErrorCity) {
    error.style.color = "#006600";
    error.textContent = `Nom de ville valide`;
    return true;
  } else {
    error.style.color = "";
    error.textContent = "Ville invalide";
    return false;
  }
}

// ------Vérification de l'email-------
const validEmail = function (validityEmail) {
  let testEmail = emailRegex.test(validityEmail.value);
  let testErrorEmail = addressRegex.test(validityEmail.value);
  let error = formEmail.nextElementSibling;
  if (testErrorEmail) {
    error.style.color = "#006600";
    error.textContent = `Adresse mail valide`;
    return true;
  } else {
    error.style.color = "";
    error.textContent = "Adresse mail invalide: veuillez renseigner une adresse mail au format xxxxx@xxx.xx";
    return false;
  }
}




