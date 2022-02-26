function getProductTemplate(product) {
  return `<a href="./product.html?id=${product._id}">
  <article>
    <img src="${product.productURL}" alt="Lorem ipsum dolor sit amet, Kanap name1">
    <h3 class="productName">${product.name}</h3>
    <p class="productDescription">${product.description}</p>
  </article>
  </a>`
}

//Récupération données API

fetch("http://localhost:3000/api/products")
  .then(function (res) {
    if (res.ok) {
      // for (let product of res){              <<<< ne fonctionne pas 
      // document.querySelector('#items').innerHTML += getProductTemplate;               <<<<<<< fonctionne
      // }
      return res.json();

    }
  })
  .then(function (value) {
    console.log(value);
    for (let product of value) {
      getProductTemplate;
    }
    getProductTemplate;
    document.querySelector('#items').innerHTML += getProductTemplate;
  })
  .catch(function (err) {
    // Une erreur est survenue
  });




// .then(function(productDescription) {
//   return console.log(product);
// })




function getProductTemplate(product) {
  return `<a href="./product.html?id=${product._id}">
    <article>
      <img src="${product.productURL}" alt="Lorem ipsum dolor sit amet, Kanap name1">
      <h3 class="productName">${product.name}</h3>
      <p class="productDescription">${product.description}</p>
    </article>
    </a>`
}

function getProductHref(product) {
  return `<a href="./product.html?id=42">`
}

const getProductImg =
  `<img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">`

function getProductTitle(product) {
  return `<h3 class="productName">Kanap name1</h3>`
}
function getProductP(product) {
  return `<p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>`
}

//Récupération données API

fetch("http://localhost:3000/api/products")
  .then(function (res) {
    const produits = res;
    console.table(produits);
    for (let produit in produits) {
      document.querySelector('#items').innerHTML = getProductTemplate;


    }
  })
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    // Une erreur est survenue
  });




// .then(function(productDescription) {
//   return console.log(product);
// })







const object = "hello world";
const promiseGetProducts = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (object == 'hello world') {
      resolve(object);
    } else {
      reject("accès aux objets impossible")
    }
  }, 2000);
});

promiseGetProducts.then(function (o) {
  console.log(o);
  return console.log("sup");
})
  .catch(function (n) {
    console.log(n);
  });



console.log(object);

// même résultat mais fléché

// const promiseGetProducts = new Promise((resolve, reject) => {
//   setTimeout(function() {
//   if(object == 'hello world'){
//     resolve(object);
//   }else{
//     reject("accès aux objets impossible")
//      }
//   }, 2000);
// });


// promiseGetProducts.then((o) => {
//   console.log(o);
//   return console.log("sup");
// })
// .catch((n) => {
//   console.log(n);
// });











// replacer plus haut si besoin
const addProductToCart = document.getElementById("addToCart");
addProductToCart.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("test");
  let selectColors = document.querySelector("#colors").value;
  let selectQuantity = document.querySelector("#quantity").value;
  let price = testArticle.price;
  let itemDetails = {
    id: id,
    name: testArticle.name,
    colorSelected: selectColors,
    quantity: selectQuantity,
    price: price,
    priceTotal: price * selectQuantity
  }
  console.log(itemDetails);

  const addToLocalStorage = function () {

    const addProductCart = document.getElementById("addToCart");
    addProductCart.addEventListener("click", function () {
      addToLocalStorage();
      console.log(quantity);
    })
  }
})
// fin contenu à replacer



// const confirmation = () => {
//   if (confirm(`${selectQuantity} ${selectColors} ${productName} a été ajouté au panier, cliquez sur OK pour y accéder, ou annuler pour retourner sur la page d'accueil. `) && selectQuantity < 2) {
//     window.location.href = "cart.html";
//   } else {
//     window.location.href = "index.html";
//   }
// }



if (checkLocalStorage++) {
  confirmation();
} else {

}











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





// ------------------------------------------------------------
// ------------------------------------------------------------
// ----------------// SAUVEGARDE PRODUCT.JS COMPLET------------
// ------------------------------------------------------------
// ------------------------------------------------------------

// Id du produit issue de l'API
let params = new URL(document.location).searchParams;
let id = params.get("id");
console.log(id);
console.log(document.location);

getArticle();

// Affichage du produit
function getArticle(article) {
  fetch("http://localhost:3000/api/products/" + id)
    .then((response) =>
      response.json()
        .then((data) => {
          console.log(data);
          testArticle = data;
          // Affichage des caractéristiques du produit via l'API : prix, nom, description, image
          document.getElementById("price").textContent = testArticle.price;
          document.getElementById("title").textContent = testArticle.name;
          document.getElementById("description").textContent = testArticle.description;
          document.querySelector(".item__img").innerHTML = `<img src="${testArticle.imageUrl}">`;
          // Boucle affichage des couleurs
          for (let colors of testArticle.colors) {
            let colorProduct = document.createElement("option");
            document.querySelector("#colors").appendChild(colorProduct);
            colorProduct.value = colors;
            colorProduct.innerHTML = colors;


            // console.log(id)
            // console.log(testArticle.name)
            // console.log(testArticle.price)
            // console.log(colorProduct.value)
          }




        }))
  // REPLACER ICI SI BESOIN


}

const getProducts = function ()
// récupération des valeurs d'articles 
{
  let selectColors = document.querySelector("#colors").value;
  let selectQuantity = document.querySelector("#quantity").value;
  let price = testArticle.price;
  let productName = testArticle.name;
  let productId = testArticle._id;
  // Tableau articles

  let itemDetails = {
    id: id,
    name: productName,
    colorSelected: selectColors,
    quantity: selectQuantity,
    price: price,
    priceTotal: price * selectQuantity
  }
  console.log(itemDetails);

  // Fenêtre confirmation, voir comment annuler avec plusieurs "if"

  const confirmation = () => {
    if (selectQuantity < 2) {
      alert(`${selectQuantity} ${selectColors} ${productName} a été ajouté au panier, cliquez sur OK pour y accéder, ou annuler pour retourner sur la page d'accueil. `)
      window.location.href = "cart.html";
    } else if (selectQuantity >= 2) {
      alert(`${selectQuantity} ${selectColors} ${productName} ont été ajouté au panier, cliquez sur OK pour y accéder, ou annuler pour retourner sur la page d'accueil. `)
      window.location.href = "cart.html";
    } else {
      window.location.href = "index.html";
    }
  }



  // --------------------------------------------------------------
  // ----------------------Local Storage --------------------------
  // --------------------------------------------------------------

  // Convertir données JSON du local storage en données JAVASCRIPT
  let checkLocalStorage = JSON.parse(localStorage.getItem("product"));
  console.log(checkLocalStorage);


  // Clé existante dans le localstorage (ne rien créer car elle existe déjà)

  if (checkLocalStorage) {
    checkLocalStorage.push(itemDetails);
    localStorage.setItem("product", JSON.stringify(checkLocalStorage))



    // console.log(id)
    //         console.log(testArticle.name)
    //         console.log(testArticle.price)
    //         console.log(colorProduct.value)




    function newQuantity(test) {
      let result;
      if (productId === id && selectColors === colorSelected) {
        result = 'positive';
      } else {
        result = 'NOT positive';
      }
      return result;
    }

    // const newQuantity = function (test) {
    //   let result;
    //   if (productId === id && selectColors === colorSelected) {
    //     result = "test"
    //     console.log("test");
    //   } else {
    //     result = "help"
    //     console.log("help");
    //   }
    //   return result;

  } else {
    // Clé n'existe pas dans le local storage (créer une nouvelle clé)
    checkLocalStorage = [];
    checkLocalStorage.push(itemDetails);
    localStorage.setItem("product", JSON.stringify(checkLocalStorage));

    console.log(checkLocalStorage);
  }




}

// Fonction ajouter au panier avec écoute du clic

let addToCart = document.getElementById("addToCart");
addToCart.addEventListener("click", function (event) {
  event.preventDefault();      // <<<<< Pas la moindre idée de l'utilité de cette ligne
  getProducts();



})













// --------------séparations des clés par id, couleurs, quantité---------------------------

// Clé existe 

if (checkLocalStorage) {
  checkLocalStorage.push(itemDetails);
  localStorage.setItem(id + selectColors + selectQuantity, JSON.stringify(checkLocalStorage))


} else {
  // Clé n'existe pas
  checkLocalStorage = [];
  checkLocalStorage.push(itemDetails);
  localStorage.setItem(id + selectColors + selectQuantity, JSON.stringify(checkLocalStorage));

}








// --------------gestion panier avec fonctions--------------------
function saveBasket(basket) {
  localStorage.setItem("panier", basket);
  checkLocalStorage = [];
  checkLocalStorage.push(itemDetails);
  localStorage.setItem("product", JSON.stringify(checkLocalStorage));
}

function getBasket() {
  return JSON.parse(localStorage.getItem("product"));
}

function addBasket(product) {
  let basket = getBasket
  basket.push(product);
}





let foundProduct = basket.find(p => p.id == product.id);
if (foundProduct != undefined) {
  foundProduct.quantity++;
} else {
  product.quantity = 1;
  basket.push(product);

}




















// --------------------------------------------------------------
// ----------------------Local Storage --------------------------
// --------------------------------------------------------------

// Convertir données JSON du local storage en données JAVASCRIPT
let checkLocalStorage = JSON.parse(localStorage.getItem("product"));
console.log(checkLocalStorage);


// Clé existante dans le localstorage (ne rien créer car elle existe déjà)

if (checkLocalStorage) {
  checkLocalStorage.push(itemDetails);
  localStorage.setItem("product", JSON.stringify(checkLocalStorage))
  // confirmation();



} else {
  // Clé n'existe pas dans le local storage (créer une nouvelle clé)
  checkLocalStorage = [];
  checkLocalStorage.push(itemDetails);
  localStorage.setItem("product", JSON.stringify(checkLocalStorage));
  // confirmation();

  console.log(checkLocalStorage);
}







// Condition d'achat et condition d'ajout au localstorage séparées

if (selectColors.value == "" || selectQuantity.value == 0 || selectQuantity.value >= 100) {
  alert("Veuillez choisir une couleur et une quantité d'article(s) entre 1 et 100")
} else {
  console.log("Article(s) ajouté !")
}

if (checkLocalStorage) {
  addStorage();
} //else if (condition de répétition id et couleur) {
// addItemStorage();}
else {
  initStorage();
}





if (checkLocalStorage[1].id == itemDetails.id && checkLocalStorage[1].colorSelected == itemDetails.colorSelected) {
  // console.log("YOUHOU") ----AJOUTER QUANTITE ONLY, DEMANDER DE L'AIDE PCQ JE SUIS UNE MERDE---

} else if (selectColors.value != undefined && selectQuantity.value != 0) {
  console.log("ajouter objets")
  // addStorage()
} else {
  console.log("plein le cul")
}









// if (selectColors.value == "" || selectQuantity.value == 0 || selectQuantity.value >= 100) {
//   alert("Veuillez choisir une couleur et une quantité d'article(s) entre 1 et 100")
// } //else if (condition de répétition id et couleur) {
// // addItemStorage();}
// else if (checkLocalStorage) {
//   addStorage();
// } else {
//   initStorage();
// }

// if ((selectColors.value != "" || (selectQuantity.value <= 100 && selectQuantity.value >= 1)) && (checkLocalStorage)) {
//   if ((selectColors.value != "" || (selectQuantity.value <= 100 && selectQuantity.value >= 1))) {
//     addStorage();
//   } else {
//     alert("Veuillez choisir une couleur et une quantité d'article(s) entre 1 et 100")
//   }
// } else {
//   initStorage();
// }



// if (getProduct[i].id == getProduct[i].id) {
//     console.log("répétition")
//   } else {
//     console.log("pas de répétition")
//   }




console.log(checkLocalStorage[1].quantity);
const testPush = function () {
  checkLocalStorage[1].quantity = checkLocalStorage[1].quantity + 1;
}
testPush();






// --------------TEST REPETITION LOCAL STORAGE-----------------------

for (let i in checkLocalStorage) {
  // console.log(checkLocalStorage[i].id)
  // console.log(itemDetails.id);
  // console.log(checkLocalStorage[i].colorSelected)
  // console.log(itemDetails.colorSelected)
  if (checkLocalStorage[i].id != itemDetails.id || checkLocalStorage[i].colorSelected != itemDetails.colorSelected) {
    console.log("no repetition");
  } else {
    console.log("repetition");
  }


}

const productFind = checkLocalStorage.find(
  (el) => el.id === id && el.selectColors === selectColors);
console.log(productFind);

if (productFind) {
  let newQuantity = parseInt(itemDetails.quantity) + parseInt(productFind.quantity);
  productFind.quantity = newQuantity;
  addStorage();
} else {
  addItemStorage();
  console.table(checkLocalStorage);

}



// function modifyQtt() {
//   let qttModif = document.querySelectorAll(".itemQuantity");

//   for (let k = 0; k < qttModif.length; k++) {
//     qttModif[k].addEventListener("change", (event) => {
//       event.preventDefault();

//       //Selection de l'element à modifier en fonction de son id ET sa couleur
//       let quantityModif = produitLocalStorage[k].quantiteProduit;
//       let qttModifValue = qttModif[k].valueAsNumber;

//       const resultFind = getProduct.find((el) => el.qttModifValue !== quantityModif);

//       resultFind.quantity = qttModifValue;
//       produitLocalStorage[k].quantity = resultFind.quantity;

//       localStorage.setItem("produit", JSON.stringify(getProduct));

//       // refresh rapide
//       location.reload();
//     })
//   }
// }
// modifyQtt();




document.addEventListener("change", function (event) {
  var qty = document.querySelector(".itemQuantity");
  console.log("TEST")
  let qtyValue = document.querySelector(".itemQuantity").value;
  EventTarget.closest = "+1";
  let x = event.target.value;
  console.log(x);
  console.log(qtyValue);
  console.log(qty);
  var newQty = qty.closest("div").firstChild.nextSibling;
  console.log(newQty);
  var child = newQty.firstChild;
  console.log(child);
  var data = JSON.parse(localStorage.getItem("product"));
  console.log(data);
  let index = data.findIndex(item => item.id == cartArticle.id && item.colorSelected == cartArticle.colorSelected);
  if (index < 1) {
    data[index].quantity = qtyValue;
    localStorage.setItem("product", JSON.stringify(data));
    // var sibling = child.nextSibling;
    // console.log(sibling);
    newQty.innerHTML = qtyValue;
  }
  let foundProduct = data.find(item => item.id == cartArticle.id && item.colorSelected == cartArticle.colorSelected);
  if (foundProduct != undefined) {
    foundProduct.quantity = qtyValue;
    localStorage.setItem("product", JSON.stringify(data));
  }

});





let b = EventTarget.article;
console.log(b);

// let parentQty = document.getElementsByClassName("cart__item");
// let childQty = parentQty.getElementsByClassName("itemQuantity");
// let childQtyA = parentQty.getElementsByClassName("itemquantity")[14];
// // console.log(parentQty);
// // console.log(childQty);
// // console.log(childQtyA);
// let testChild = parentQty.lastChild;
// // console.log(testChild);
// console.log(parentQty.dataset.id)

let allo = document.getElementsByClassName('cart__item');
console.log(allo);
const p = document.querySelectorAll("p");
let testU = document.getElementsByClassName("cart__item__content__settings__quantity");
console.log(testU);
let article = document.querySelectorAll("article.cart__item > cart__item__content > cart__item__content__settings > cart__item__content__settings__quantity > p");
console.log(article);
let itmquay = document.querySelectorAll("[name=itemQuantity");
console.log(itmquay)

// console.log(p[1]);
// p[].innerHTML = "ALLO";

let fuckoff = allo.firstChild;
console.log(fuckoff);

let qttModif = document.querySelectorAll(".itemQuantity");
console.log(qttModif);

function modifyQtt() {
  let qttModif = document.querySelectorAll(".itemQuantity");

  for (let k = 0; k < qttModif.length; k++) {
    qttModif[k].addEventListener("change", (event) => {
      event.preventDefault();
      console.log("MODIF");

      //Selection de l'element à modifier en fonction de son id ET sa couleur
      let quantityModif = cartArticle[k].quantity;
      let qttModifValue = qttModif[k].valueAsNumber;
      console.log(quantityModif);

      const resultFind = cartArticle.find((el) => el.qttModifValue !== quantityModif);

      resultFind.quantiteProduit = qttModifValue;
      cartArticle[k].quantity = resultFind.quantity;

      localStorage.setItem("produit", JSON.stringify(cartArticle));

      // refresh rapide
      location.reload();
    })
  }
}
modifyQtt();








function deleteProduct() {
  let btn_supprimer = document.querySelectorAll(".deleteItem");

  for (let j = 0; j < btn_supprimer.length; j++) {
    btn_supprimer[j].addEventListener("click", (event) => {
      event.preventDefault();
      console.log("hello");

      //Selection de l'element à supprimer en fonction de son id ET sa couleur
      let idDelete = getProduct[j].id;
      let colorDelete = getProduct[j].colorSelected;

      getProduct = getProduct.filter(el => el.id !== idDelete || el.colorSelected !== colorDelete);

      localStorage.setItem("produit", JSON.stringify(getProduct));

      console.log(idDelete);
      console.log(colorDelete);
      console.log(getProduct[1].id);

      //Alerte produit supprimé et refresh
      alert("Ce produit a bien été supprimé du panier");
      location.reload();
    })
  }
}
deleteProduct();




document.addEventListener("click", function (event) {
  var qty = document.querySelector(".deleteItem");
  console.log('hello');
  //Selection de l'element à supprimer en fonction de son id ET sa couleur
  let idDelete = getProduct.id;
  let colorDelete = getProduct.colorSelected;

  getProduct = getProduct.filter(el => el.id !== idDelete || el.colorSelected !== colorDelete);

  localStorage.setItem("produit", JSON.stringify(getProduct));

});



function postForm() {
  const btn_commander = document.getElementById("order");

  //Ecouter le panier
  btn_commander.addEventListener("click", (event) => {

    //Récupération des coordonnées du formulaire client
    let inputName = document.getElementById('firstName');
    let inputLastName = document.getElementById('lastName');
    let inputAdress = document.getElementById('address');
    let inputCity = document.getElementById('city');
    let inputMail = document.getElementById('email');

    //Construction d'un array depuis le local storage
    let idProducts = [];
    for (let i = 0; i < getProduct.length; i++) {
      idProducts.push(getProduct[i].idProduit);
    }
    console.log(idProducts);

    const order = {
      contact: {
        firstName: "bonjours",
        lastName: inputLastName.value,
        address: inputAdress.value,
        city: inputCity.value,
        email: inputMail.value,
      },
      products: idProducts,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
    };

    fetch("http://localhost:3000/api/products/order", options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.clear();
        localStorage.setItem("orderId", data.orderId);

        document.location.href = "confirmation.html";
      })
      .catch((err) => {
        alert("Problème avec fetch : " + err.message);
      });
  })
}
postForm();














// ------------Mon delete : fonctionne sur le premier article (sans le localstorage)----------
function deleteItem() {
  let deleteBtn = document.querySelectorAll(".deleteItem");
  for (let j = 0; j < deleteBtn; j++) {
    console.log(deleteBtn);
    deleteBtnCard = deleteBtn.closest("div").closest("article");
    console.log(deleteBtnCard);
    console.log(deleteBtn);
    let deleteParent = deleteBtn.parentNode;
    console.log(deleteParent);
    deleteBtn.addEventListener("click", function (event) {
      deleteBtnCard.parentNode.removeChild(deleteBtn);
      console.log("hello");
    })
  };
  ;
}
deleteItem();












// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
// ------------Modif et suppression qui fonctionnent-------------
// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------


// ---------------Modification des quantités-------------------
document.addEventListener("change", function (event) {
  let test = document.querySelector(".cart__item__content__settings__quantity")
  console.log(test);
  let move = test.firstChild.nextSibling;
  let x = event.target.value;
  console.log(x);
  console.log(move);
  let qtyValue = move.innerHTML = x;
  let data = JSON.parse(localStorage.getItem("product"));
  let index = data.findIndex(item => item.id == cartArticle.id && item.colorSelected == cartArticle.colorSelected);
  if (index < 1) {
    data[i].quantity = qtyValue;
    localStorage.setItem("product", JSON.stringify(data));
    location.reload();

  }
});



// ------------------Suppression d'un produit --------------------
function deleteProduct() {
  let deleteBtn = document.querySelectorAll(".deleteItem");

  for (let j = 0; j < deleteBtn.length; j++) {
    deleteBtn[j].addEventListener("click", (event) => {
      event.preventDefault();

      //Selection de l'element à supprimer en fonction de son id ET sa couleur
      let idDelete = getProduct[j].id;
      let colorDelete = getProduct[j].colorSelected;

      getProduct = getProduct.filter(el => el.id !== idDelete || el.colorSelected !== colorDelete);

      localStorage.setItem("product", JSON.stringify(getProduct));

      //Alerte produit supprimé et refresh
      alert(`Le produit a bien été supprimé du panier`);
      location.reload();
    })
  }
}
deleteProduct();








// let productPriceTitle = articles.firstElementChild.lastElementChild.firstElementChild.lastElementChild;
// console.log(articles);
// console.log(productPriceTitle);
// console.log(getId.price);
// let productPrice = document.createElement("p");
// articles.appendChild(productPrice);
// productPriceTitle.innerHTML = getId.price;

// console.log(productPrice);



function getPrice() {
  for (j in getProduct) {
    window.getId = data.find(item => item._id == getProduct[j].id);
    console.log(getId.price);

    // return getId.price;
  }
}
getPrice();








function totals() {


  function totals() {

    let qtySingle = document.querySelector(".cart__item__content__settings__quantity");
    console.log(qtySingle);



  }

  let qty = document.getElementsByClassName("cart__item__content__settings__quantity");
  qtyLength = qty.length;
  console.log(qtyLength);
  // qtyLength = quantityProduct.length;
  let totalQty = 0
  for (let i = 0; i < qtyLength; i++) {
    totalQty += qty[i].textContent;
    console.log(totalQty);

  }

  let qtyTestDeux = document.querySelector(".cart__item__content__settings__quantity > input");


  // console.log(qtyTestDeux.value);
  // console.log(qty.firstElementChild);
  // for (let i in qty) {
  //   // let qtyValueReflected = qty.firstChild.nextSibling;
  //   // let qtyTest = qty.lastElementChild.value;
  //   // console.log(qtyTest);
  //   // console.log(qtyValueReflected);
  // }
}

totals();









// --------------- tous les commentaires du cart-----------------------


// let test = document.getElementsByClassName(".itemQuantity");
// // let qtyValue = document.querySelector(".itemQuantity").value;
// // let newQty = qty.closest("div").firstChild.nextSibling;
// console.log(test);
// let newQty = test.closest("div").firstChild.nextSibling;



// console.log(articles.nextElementSibling); CART PRICE


// let article = document.querySelector("article");
            // console.log(article.length);
            // console.log(data[i]._id);
// let priceProduct = getProduct[i].price;

            // let priceTotalProduct = getProduct[i].price * quantityProduct;


                        // console.log(checkProduct.price);

                        
            // console.log(priceTotalProduct);

            // console.log(priceProduct);
            // console.log(quantityProduct);
            // console.log(priceProduct * quantityProduct);


            // let qty = document.getElementsByClassName("cart__item__content__settings__quantity");

            // // console.log(getProduct[i].quantity);
            // let checkQty = getProduct[i].quantity;
            // // console.log(checkQty);
            // let qtyTotal = 0;
            // let qtyLength = qty.length;
            // for (let i = 0; i < qtyLength; i++) {
            //   qtyTotal += getProduct[i].quantity;
            //   // console.log(qtyTotal);
            // }

            
            // let test = 0;

            // while (checkQty != undefined) {
            //   test + 1;
            // }
            // console.log(test);





            // console.log(checkProduct);
            // console.log(article.dataset.id);

            // let checkProduct = getProduct.find(item => item.id == article.dataset.id && item.colorSelected == article.dataset.color);
            // console.log(checkProduct);

             // function getTotals() {

            //   // Récupération du total des quantités
            //   let quantityTotal = document.getElementsByClassName('itemQuantity');
            //   let quantityLength = quantityTotal.length;
            //   totalQtt = 0;

            //   for (let i = 0; i < quantityLength; ++i) {
            //     totalQtt += quantityTotal[i].valueAsNumber;
            //   }

            //   let productTotalQuantity = document.getElementById('totalQuantity');
            //   productTotalQuantity.innerHTML = totalQtt;
            //   // console.log(totalQtt);

            //   // Récupération du prix total
            //   let totalPrice = 0;

            //   for (let i = 0; i < quantityLength; ++i) {
            //     totalPrice += (quantityTotal[i].valueAsNumber * priceProduct);


            //   }

            //   let productTotalPrice = document.getElementById('totalPrice');
            //   productTotalPrice.innerHTML = totalPrice;
            //   // console.log(priceProduct)
            //   // console.log(quantityTotal[i].valueAsNumber);


            // }
            // getTotals();

            // let pullPrice = document.querySelectorAll("#totalPrice");
            // console.log(pullPrice);


            // function getTotals() {
            //   let qtySingle = document.querySelector('.cart__item__content__settings__quantity')
            // }
            // getTotals();


