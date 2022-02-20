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





  // if (checkLocalStorage[1].id == itemDetails.id && checkLocalStorage[1].colorSelected == itemDetails.colorSelected) {
  //   // console.log("YOUHOU") ----AJOUTER QUANTITE ONLY, DEMANDER DE L'AIDE PCQ JE SUIS UNE MERDE---

  // } else if (selectColors.value != undefined && selectQuantity.value != 0) {
  //   console.log("ajouter objets")
  //   // addStorage()
  // } else {
  //   console.log("plein le cul")
  // }
