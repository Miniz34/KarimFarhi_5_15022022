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

// fetch("http://localhost:3000/api/products")
//   .then((response) =>
//     response.json()
//       .then((data) => {
//         console.log(data);

//         // Boucle affichage des objets de l'API
//         for (let produit of data) {
//           document.querySelector('#items').innerHTML += `<a href="./product.html?id=${produit._id}">
//           <article>
//             <img src="${produit.imageUrl}" alt="Lorem ipsum dolor sit amet, Kanap name1">
//             <h3 class="productName">${produit.name}</h3>
//             <p class="productDescription">${produit.description}</p>
//           </article>
//           </a>`;
//         }
//       })
//       .catch(function (error) {
//         document.querySelector('#items').innerHTML = "Impossible de contacter l'API, merci de ressayer ultérieurement." + error;
//       }))



// function async get(uri) {
//   const response = await fetch(`${process.env.API_ENDPOINT}/${uri}`);
//   if (response.status !== 200) {
//       console.error('Looks like there was a problem. Status Code: ' + response.status);
//       return;
//   }

//   return await response.json();
// }




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

getApi()
  .then(products => {
    for (const product of products) {
      items.innerHTML += getProductTemplate(product);
    }
  })


