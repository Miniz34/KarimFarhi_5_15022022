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
          document.querySelector("title").innerHTML = testArticle.name;
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
  let selectColors = document.querySelector("#colors");
  let selectQuantity = document.querySelector("#quantity");
  let price = testArticle.price;
  let productName = testArticle.name;
  let productId = testArticle._id;
  // Tableau articles

  let itemDetails = {
    id: id,
    // name: productName,
    colorSelected: selectColors.value,
    quantity: selectQuantity.value,
    // price: price,
    // priceTotal: price * selectQuantity
  }
  console.log(itemDetails);

  // Fenêtre confirmation, voir comment annuler avec plusieurs "if"

  const confirmation = () => {
    if (confirm(` Votre commande de ${selectQuantity} ${selectColors} ${productName} a été ajouté au panier, 
    cliquez sur OK pour y accéder, ou annuler pour retourner sur la page d'accueil. `)) {
      window.location.href = "cart.html";
    } else {
      window.location.href = "index.html";
    }
  }
  let checkLocalStorage = JSON.parse(localStorage.getItem("product"));



  const initStorage = () => {
    checkLocalStorage = [];
    checkLocalStorage.push(itemDetails);
    localStorage.setItem("product", JSON.stringify(checkLocalStorage));
  }

  const addStorage = () => {
    checkLocalStorage.push(itemDetails);
    localStorage.setItem("product", JSON.stringify(checkLocalStorage))
  }

  const addItemStorage = () => {
    checkLocalStorage.push(itemDetails);          //--------Comprendre comment faire cette fonction-----------
    localStorage.setItem("product", JSON.stringify(checkLocalStorage))
  }
  // console.log(checkLocalStorage[1].id); //<<<<<<<<< IMPORTANT
  // console.log(itemDetails.id);
  // console.log(checkLocalStorage[1].colorSelected);
  // console.log(itemDetails.colorSelected);
  // console.log(itemDetails.quantity);
  // console.log(itemDetails.colorSelected.value);
  // console.log(selectColors);
  // console.log(selectColors);
  // console.log(selectQuantity.value);

  console.log(itemDetails.colorSelected)
  console.log(itemDetails.colorSelected.value)
  console.log(selectColors)
  console.log(selectColors.value)



  if (selectColors.value != "" && selectQuantity.value <= 99 && selectQuantity.value >= 1) {
    if (checkLocalStorage) {
      addStorage();
      // confirmation();
    } //else if (condition de répétition id et couleur) (selectColors.value == itemDetails && id == itemDetails[1].id) {
    // //addItemStorage() confirmation();}
    else {
      initStorage();
      // confirmation();
    }
  } else {
    alert("Veuillez choisir une couleur et une quantité d'article(s) entre 1 et 100")
  }




  console.log(selectColors.value);

}



// Fonction ajouter au panier avec écoute du clic

let addToCart = document.getElementById("addToCart");
addToCart.addEventListener("click", function (event) {
  event.preventDefault();      // <<<<< Pas la moindre idée de l'utilité de cette ligne
  getProducts();



})




