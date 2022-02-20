// function getProductTemplate(product) {
//   `<a href="./product.html?id=${produit._id}">
// <article>
//   <img src="${produit.imageUrl}" alt="Lorem ipsum dolor sit amet, Kanap name1">
//   <h3 class="productName">${produit.name}</h3>
//   <p class="productDescription">${produit.description}</p>
// </article>
// </a>`;
// }


// Contacter l'API
fetch("http://localhost:3000/api/products")
  .then((response) =>
    response.json()
      .then((data) => {
        console.log(data);
        // Boucle affichage des objets de l'API


        for (let produit of data) {
          document.querySelector('#items').innerHTML += `<a href="./product.html?id=${produit._id}">
          <article>
            <img src="${produit.imageUrl}" alt="Lorem ipsum dolor sit amet, Kanap name1">
            <h3 class="productName">${produit.name}</h3>
            <p class="productDescription">${produit.description}</p>
          </article>
          </a>`;
        }
      })
      .catch(function (error) {
        document.querySelector('#items').innerHTML = "Impossible de contacter l'API, merci de ressayer ultérieurement."
      }))

      // // Rédaction flechée catch
      // .catch((error) =>
      // document.querySelector('#items').innerHTML = "Impossible de contacter l'API, merci de ressayer ultérieurement."
