// Id du produit issue de l'API
let params = new URL(document.location).searchParams;
let id = params.get("id");
console.log(id);
console.log(document.location);

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
          document.querySelector(".item__img").innerHTML = `<img src="${testArticle.imageUrl}">`;              ////rajouter le alt
          document.querySelector("title").textContent = testArticle.name;
          // Boucle affichage des couleurs
          for (let colors of testArticle.colors) {
            let colorProduct = document.createElement("option");
            document.querySelector("#colors").appendChild(colorProduct);
            colorProduct.value = colors;
            colorProduct.innerHTML = colors;

          }

        }))
    .catch((err) => {
      alert("Impossible de se connecter à l'API : ");
    });


}
getArticle();



// ------ Récupération des valeurs des articles, confirmation, ajout au localStorage --------
const getProducts = function ()

// récupération des valeurs d'articles
{
  let selectColors = document.querySelector("#colors");
  let selectQuantity = document.querySelector("#quantity");
  let price = testArticle.price;
  let productName = testArticle.name;
  let productId = testArticle._id;
  let imgUrl = testArticle.imageUrl;
  console.log(imgUrl);

  // Tableau articles
  let itemDetails = {
    id: id,
    name: productName,
    colorSelected: selectColors.value,
    quantity: selectQuantity.value,
    urlImg: imgUrl
  }

  // Fenêtre confirmation
  const confirmation = () => {
    if (confirm(` Votre commande de a été ajoutée au panier,
    cliquez sur OK pour y accéder, ou annuler pour continuer vos achats. `)) {
      window.location.href = "cart.html";
    } else {
      window.location.href = "index.html";
    }
  }

  // ----------création du localStorage-----------
  let checkLocalStorage = JSON.parse(localStorage.getItem("product"));
  const initStorage = () => {
    checkLocalStorage = [];
    checkLocalStorage.push(itemDetails);
    localStorage.setItem("product", JSON.stringify(checkLocalStorage));
  }

  //----------Ajout au local storage-----------
  const addItemStorage = () => {
    checkLocalStorage.push(itemDetails);
    var data = JSON.parse(localStorage.getItem("product"));
    let index = data.findIndex(item => item.id == itemDetails.id && item.colorSelected == itemDetails.colorSelected);           //Fonction qui déclare condition, et renvoi premier index qui valide condition
    if (index > -1) {                                                                                                           // Renvoi -1 si "index" ne trouve rien
      data[index].quantity = parseInt(selectQuantity.value) + parseInt(data[index].quantity);                                    //Array[fonction findex].titre d'objet
      console.log(typeof (data[index].quantity));
      localStorage.setItem("product", JSON.stringify(data));
    } else {
      localStorage.setItem("product", JSON.stringify(checkLocalStorage));
    }
  }



  if (selectColors.value && selectQuantity.value <= 99 && selectQuantity.value >= 1) {
    if (checkLocalStorage) {
      addItemStorage();
      confirmation();
    } else {
      initStorage();
      confirmation();
    }
  } else {
    alert("Veuillez choisir une couleur et une quantité d'article(s) entre 1 et 100")
  }

}

// Fonction ajouter au panier avec écoute du clic

let addToCart = document.getElementById("addToCart");
addToCart.addEventListener("click", function (event) {
  event.preventDefault();
  getProducts();

})
