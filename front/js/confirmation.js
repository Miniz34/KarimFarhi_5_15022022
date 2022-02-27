let order = document.getElementById("orderId");
let orderId = localStorage.getItem("orderId");
console.log(orderId);
order.innerText = orderId;
localStorage.clear();
