// js/checkout.js

import { clearCart } from "./storage.js";

document.getElementById("checkout-form").addEventListener("submit", function (e) {
  e.preventDefault();
  // In real project you would validate payment, but for CA we simulate success
  clearCart();
  window.location.href = "thankyou.html";
});
