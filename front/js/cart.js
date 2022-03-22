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
            let alt = getProduct[i].alt;

            // --- récupération du prix ---
            let checkProduct = data.find(item => item._id == idProduct);
            if (checkProduct != undefined) {
              var priceProduct = checkProduct.price;
            }

            let priceTotalProduct = priceProduct * getProduct[i].quantity;

            // Ajout des articles sur la page
            articles.innerHTML += `<article class="cart__item" data-id="${idProduct}" data-color="${colorProduct}">
                <div class="cart__item__img">
                  <img src="${imgUrl}" alt="${alt}">
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


          // Appel des fonction des modification et suppression
          let cart = JSON.parse(window.localStorage.getItem("product")) ?? [];
          if (cart.length) {
            let cartProduct = document.getElementById('cart__items');
            cartProduct.onchange = updateQuantite;

            let deleteItems = document.getElementsByClassName('deleteItem');
            for (const deleteitem of deleteItems) {
              deleteitem.onclick = removeItem;
            }

          }
        }
      }))
  .catch((err) => {
    alert("Impossible de se connecter à l'API : " + err.message);
  });


// Fonction de modification de quantité
function updateQuantite(event) {
  let article = event.target.closest('article');
  let itemFound = getProduct.find(item => item.id === article.dataset.id && item.colorSelected === article.dataset.color)
  itemFound.quantity = parseInt(event.target.value);
  window.localStorage.setItem('product', JSON.stringify(getProduct))
  location.reload();
}

// Fonction de supression de quantité
function removeItem(event) {
  let article = event.target.closest('article');
  let checkProduct = getProduct.filter(item => item.id !== article.dataset.id || item.colorSelected !== article.dataset.color)
  if (checkProduct != undefined) {
    getProduct = getProduct.filter(art => art.id !== article.dataset.id || art.colorSelected !== article.dataset.color);
    localStorage.setItem('product', JSON.stringify(getProduct))
    article.remove();
    location.reload();
  }
}


// ---------------------------------------------------------
// ------------Validation du formulaire --------------------
// ---------------------------------------------------------


// ------------Selection input formulaire ------------------

let formFirstName = document.querySelector("#firstName");

// selection input nom
let formLastName = document.querySelector("#lastName");

// Selection input adresse
let formAddress = document.querySelector("#address");

// selection input ville
let formCity = document.querySelector("#city");

// selection input email
let formEmail = document.querySelector("#email");
// console.log(formEmail);

// selection formulaire
let form = document.querySelector(".cart__order__form");

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

//--------Regex---------
const nameFirstName = /[-a-zA-Zàâäéèêëïîôöùûüç]{2,128}$/;
const addressRegex = /[A-Za-z0-9°àâäéèêëïîôöùûüç-]{2,128}$/;
const cityRegex = /^[a-zA-Zéèêëàâäîïôöûüùç\- ]{2,}$/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// -----Vérification du prénom-----
const validNameFirstName = function (validityName) {

  let testErrorFirstName = nameFirstName.test(validityName.value);
  let error = formFirstName.nextElementSibling;
  if (testErrorFirstName) {
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
  let testErrorName = nameFirstName.test(validityNom.value);
  let error = formLastName.nextElementSibling;
  if (testErrorName) {
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
  let testErrorCity = cityRegex.test(validityCity.value);
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
  let testErrorEmail = emailRegex.test(validityEmail.value);
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

// ------Fonction POST, envoi des informations clients et du contenu de la commande---------

var send = document.getElementById("order");
console.log(send);
function postOrder() {


  let productsId = [];

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

      document.location.href = `confirmation.html?id=${data.orderId}`;

    })
    .catch((err) => {
      alert("Impossible de se connecter à l'API : " + err.message);
    });

}



