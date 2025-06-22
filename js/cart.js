document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const checkoutButton = document.getElementById("checkout");

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.innerHTML = "";
    checkoutButton.style.display = "none";
    return;
  }

  let total = 0;
  cartItems.innerHTML = "";

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}">
        <div>
          <h3>${item.title}</h3>
          <p>$${item.price} x ${item.quantity}</p>
          <p><strong>$${itemTotal.toFixed(2)}</strong></p>
        </div>
      </div>
    `;
  });

  cartTotal.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;

  checkoutButton.addEventListener("click", () => {
    localStorage.removeItem("cart");
    window.location.href = "thankyou.html";
  });
});
