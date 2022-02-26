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
          document.querySelector(".item__img").innerHTML = `<img src="${testArticle.imageUrl}">`;              ////rajouter le alt
          document.querySelector("title").textContent = testArticle.name;
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
          // let select = document.getElementById('colors');
          // for (const color of product.colors) {
          //     let option = document.createElement("option");
          //     option.text = color;
          //     select.add(option);
          // }



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
  let imgUrl = testArticle.imageUrl;
  console.log(imgUrl);
  // Tableau articles

  let itemDetails = {
    id: id,
    name: productName,
    colorSelected: selectColors.value,
    quantity: selectQuantity.value,
    // price: price,
    // priceTotal: price * selectQuantity,
    urlImg: imgUrl

  }

  console.log(itemDetails);

  // Fenêtre confirmation

  const confirmation = () => {
    if (confirm(` Votre commande de ${selectQuantity} ${selectColors} ${productName} a été ajoutée au panier, 
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

  // const addStorage = () => {
  //   checkLocalStorage.push(itemDetails);
  //   localStorage.setItem("product", JSON.stringify(checkLocalStorage))
  // }


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


  if (selectColors.value && selectQuantity.value <= 99 && selectQuantity.value >= 1) {
    if (checkLocalStorage) {
      addItemStorage();
      // confirmation();
      // } else if (index > -1) { //(selectColors.value == itemDetails && id == itemDetails[1].id);
      //   data[index].quantity += 1;
      //   addItemStorage();
      //   confirmation();
    } else {
      initStorage();
      // confirmation();
    }
  } else {
    alert("Veuillez choisir une couleur et une quantité d'article(s) entre 1 et 100")
  }

}

// Fonction ajouter au panier avec écoute du clic

let addToCart = document.getElementById("addToCart");
addToCart.addEventListener("click", function (event) {
  event.preventDefault();      // <<<<< Pas la moindre idée de l'utilité de cette ligne
  getProducts();



})


