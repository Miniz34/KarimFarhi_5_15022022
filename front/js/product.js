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
          document.getElementById("price").innerHTML = testArticle.price;
          document.getElementById("title").innerHTML = testArticle.name;
          document.getElementById("description").innerHTML = testArticle.description;
          document.querySelector(".item__img").innerHTML = `<img src="${testArticle.imageUrl}">`;
          // Boucle affichage des couleurs
          for (let colors of testArticle.colors) {
            let colorProduct = document.createElement("option");
            document.querySelector("#colors").appendChild(colorProduct);
            colorProduct.value = colors;
            colorProduct.innerHTML = colors;
          }

        }))
  // REPLACER ICI SI BESOIN

}

const getProducts = function () {
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

}

let addToCart = document.getElementById("addToCart");
addToCart.addEventListener("click", function (event) {
  event.preventDefault();
  getProducts();
})
