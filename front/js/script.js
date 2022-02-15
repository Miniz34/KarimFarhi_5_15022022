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
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    console.log(value);
  })
  .catch(function(err) {
    // Une erreur est survenue
  });