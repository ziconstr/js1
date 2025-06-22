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
      <div class="product-container">
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
            <button class="add-card" id="add-to-cart">
              <i class="fa-solid fa-cart-shopping"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('add-to-cart').addEventListener('click', () => {
      addToCart(id);
    });

  } catch (error) {
    container.innerHTML = `<p>Failed to load product.</p>`;
  }
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(id);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Product added to cart!');
}

renderProduct();
