// Page d'accueil utilisant la méthode MVC

// Appel de l'API pour obtenir la liste de produits (Modèle)
function getApi() {
  return fetch("http://localhost:3000/api/products")
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch(err => {
      console.log('error :' + err);
    });
}


// Utilisation du template produits du front-end (Vue)
function getProductTemplate(product) {
  return `<a href="./product.html?id=${product._id}">
            <article>
             <img src="${product.imageUrl}" alt="Lorem ipsum dolor sit amet, Kanap name1">
              <h3 class="productName">${product.name}</h3>
              <p class="productDescription">${product.description}</p>
             </article>
           </a>`;
}


let items = document.getElementById("items");

// Application des données de l'API au modèle du front-end (contrôleur)
getApi()
  .then(products => {
    for (const product of products) {
      items.innerHTML += getProductTemplate(product);
    }
  })


