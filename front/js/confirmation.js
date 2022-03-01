// -----récupération de l'orderId dans le localStorage et sur la page-----
let order = document.getElementById("orderId");
let params = new URL(document.location).searchParams;
let id = params.get("id");

// ------Affichage orderId et suppression du localStorage-----
order.innerText = id;
localStorage.clear();


