function getProductTemplate(product) {
return `<a href="./product.html?id=${product._id}">
<article>
  <img src="${product.productURL}" alt="Lorem ipsum dolor sit amet, Kanap name1">
  <h3 class="productName">${product.name}</h3>
  <p class="productDescription">${product.description}</p>
</article>
</a>` 
}

