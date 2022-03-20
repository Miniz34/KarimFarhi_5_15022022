// Id du produit issue de l'API
let params = new URL(document.location).searchParams;
let id = params.get("id");
console.log(params);
console.log(id);
console.log(document.location);
let productApi = "";

// Affichage du produit
function getArticle(article) {
  fetch("http://localhost:3000/api/products/" + id)
    .then((response) =>
      response.json()
        .then((data) => {
          console.log(data);
          productApi = data;
          // Affichage des caractéristiques du produit via l'API : prix, nom, description, image
          document.getElementById("price").textContent = productApi.price;
          document.getElementById("title").textContent = productApi.name;
          document.getElementById("description").textContent = productApi.description;
          document.getElementsByClassName("item__img")[0].innerHTML = `<img src="${productApi.imageUrl}" alt="${productApi.altTxt}">`;
          document.getElementById("title").textContent = productApi.name;



          // Boucle affichage des couleurs
          let select = document.getElementById("colors");
          for (let color of productApi.colors) {
            let option = document.createElement("option");
            option.text = color;
            select.add(option);
          }

        }))
    .catch((err) => {
      alert("Impossible de se connecter à l'API : ");
    });


}
getArticle();



// ------ Récupération des valeurs des articles, confirmation, ajout au localStorage --------
const getProducts = function (event)

// récupération des valeurs d'articles
{
  let selectColors = document.querySelector("#colors");
  let selectQuantity = document.querySelector("#quantity");
  let price = productApi.price;
  let productName = productApi.name;
  let productId = productApi._id;
  let imgUrl = productApi.imageUrl;
  let altImg = productApi.altTxt;

  // Tableau articles
  let itemDetails = {
    id: id,
    name: productName,
    colorSelected: selectColors.value,
    quantity: selectQuantity.value,
    urlImg: imgUrl,
    alt: altImg
  }

  // Fenêtre confirmation
  const confirmation = () => {
    if (confirm(` Votre commande de a été ajoutée au panier,
    cliquez sur OK pour y accéder, ou annuler pour continuer vos achats. `)) {
      window.location.href = "cart.html";
    } else {
      window.location.href = window.location;
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
    let index = data.findIndex(item => item.id == itemDetails.id && item.colorSelected == itemDetails.colorSelected);
    if (index > -1) {
      data[index].quantity = parseInt(selectQuantity.value) + parseInt(data[index].quantity);
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
addToCart.onclick = getProducts;





