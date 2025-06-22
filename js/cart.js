const container = document.getElementById('cart-container');

function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    container.innerHTML = '<h2>Your cart is empty.</h2>';
    return;
  }

  let total = 0;
  cart.forEach((item) => {
    total += item.price;

    const div = document.createElement('div');
    div.classList.add('cart-item');

    div.innerHTML = `
      <img src="${item.image.url}" alt="${item.title}">
      <div class="cart-item-info">
        <h3>${item.title}</h3>
        <p>$${item.price}</p>
      </div>
    `;
    container.appendChild(div);
  });

  const summary = document.createElement('div');
  summary.classList.add('cart-summary');
  summary.innerHTML = `
    <p>Total: <span class="total">$${total.toFixed(2)}</span></p>
    <button onclick="checkout()">Checkout</button>
  `;
  container.appendChild(summary);
}

function checkout() {
  alert('Thank you for your purchase!');
  localStorage.removeItem('cart');
  location.reload();
}

loadCart();
