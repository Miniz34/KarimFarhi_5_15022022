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

const getProducts = function ()
// récupération des valeurs d'articles 
{
  let selectColors = document.querySelector("#colors").value;
  let selectQuantity = document.querySelector("#quantity").value;
  let price = testArticle.price;
  let productName = testArticle.name;

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

    confirmation();

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



