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