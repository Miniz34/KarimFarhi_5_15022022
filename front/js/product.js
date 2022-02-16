let params = new URL(document.location).searchParams;
let id = params.get("id");
console.log(id);
console.log(document.location);

getArticle();

function getArticle(article) {
  fetch("http://localhost:3000/api/products/" + id)
    .then((response) =>
      response.json()
        .then((data) => {
          console.log(data);
          testArticle = data;
          console.log(testArticle.price);
          document.getElementById("price").innerHTML = testArticle.price;
          document.getElementById("title").innerHTML = testArticle.name;
          document.getElementById("description").innerHTML = testArticle.description;
          document.querySelector(".item__img").innerHTML = `<img src="${testArticle.imageUrl}">`;
        }))
}



