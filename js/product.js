/*

import { fetchProductById } from './api.js';

 
async function renderProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const container = document.getElementById('product-details');

  if (!id) {
    container.innerHTML = `<p>Product ID is missing.</p>`;
    return;
  }

  try {
    const product = await fetchProductById(id);
    const hasDiscount = product.discountedPrice < product.price;

    container.innerHTML = `
      <div class="container">
        <div class="image">
          <img src="${product.image.url}" alt="${product.title}">
        </div>
        <div class="product">
          <span class="per">Movie</span>
          <h1>${product.title}</h1>
          <p>${product.description}</p>

          ${
            hasDiscount
              ? `<div class="price">$${product.discountedPrice}</div>
               <div class="old-price">$${product.price}</div>`
              : `<div class="price">$${product.price}</div>`
          }

          <a class="add-card" href="#">
            <i class="fa-solid fa-cart-shopping"></i>Add to Cart
          </a>
        </div>
      </div>
    `;
  } catch (error) {
    container.innerHTML = `<p>Failed to load product.</p>`;
  }
}

renderProduct();

*/

import { fetchProductById } from './api.js';

async function renderProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const container = document.getElementById('product-details');

  if (!id) {
    container.innerHTML = `<p>Product ID is missing.</p>`;
    return;
  }

  try {
    const product = await fetchProductById(id);
    const hasDiscount = product.discountedPrice < product.price;

    container.innerHTML = `
      <div class="container">
        <div class="image">
          <img src="${product.image.url}" alt="${product.title}">
        </div>
        <div class="product">
          <span class="per">Movie</span>
          <h1>${product.title}</h1>
          <p>${product.description}</p>

          ${
            hasDiscount
              ? `<div class="price">$${product.discountedPrice}</div>
                 <div class="old-price">$${product.price}</div>`
              : `<div class="price">$${product.price}</div>`
          }

          <a class="add-card" href="#" id="add-to-cart">
            <i class="fa-solid fa-cart-shopping"></i>Add to Cart
          </a>
        </div>
      </div>
    `;

    // Add event listener after rendering
    document.getElementById('add-to-cart').addEventListener('click', (e) => {
      e.preventDefault();
      addToCart(product);
    });

  } catch (error) {
    container.innerHTML = `<p>Failed to load product.</p>`;
  }
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Optional: Prevent duplicates
  if (!cart.find(item => item.id === product.id)) {
    cart.push(product);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  document.getElementById('cart-count').textContent = cart.length;
}

// Initial render
renderProduct();
updateCartCount();
