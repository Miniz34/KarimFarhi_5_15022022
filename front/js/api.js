

export function getApi() {
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

// HTML hors boucle

getApi()
  .then(products => {
    let template = "";
    for (const product of products) {
      template += getProductTemplate(product);
    }
    items.innerHTML = template;
  }
  )


let url = new URL(window.location.href);
let id = url.searchParams.get("id");

apiGetOne(id)
  .then(product => {
    insertData(product);
    document.getElementById('addToCart').onclick = addProduct(product);
  })