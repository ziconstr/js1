import { fetchProductById } from './api.js';

async function loadCart() {
  const cartContainer = document.getElementById('cart-items');
  const totalContainer = document.getElementById('cart-total');
  const ids = JSON.parse(localStorage.getItem('cart')) || [];

  if (ids.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    totalContainer.textContent = '';
    return;
  }

  let total = 0;
  cartContainer.innerHTML = '';

  for (let id of ids) {
    try {
      const product = await fetchProductById(id);
      const price = product.discountedPrice < product.price ? product.discountedPrice : product.price;
      total += price;

      const item = document.createElement('div');
      item.classList.add('cart-item');
      item.innerHTML = `
        <img src="${product.image.url}" alt="${product.title}">
        <div>
          <h3>${product.title}</h3>
          <p>$${price.toFixed(2)}</p>
        </div>
      `;
      cartContainer.appendChild(item);
    } catch (error) {
      console.error("Error loading product:", error);
    }
  }

  totalContainer.textContent = `Total: $${total.toFixed(2)}`;
}

document.getElementById('checkout').addEventListener('click', () => {
  localStorage.removeItem('cart');
  window.location.href = 'thankyou.html';
});

loadCart();
