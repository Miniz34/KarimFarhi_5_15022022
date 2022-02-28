// -----récupération de l'orderId dans le localStorage et sur la page-----
let order = document.getElementById("orderId");
let orderId = localStorage.getItem("orderId");

// ------Affichage orderId et suppression du localStorage-----
order.innerText = orderId;
localStorage.clear();


