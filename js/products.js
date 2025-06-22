import { fetchAllProducts } from './api.js';

async function displayProducts() {
  const container = document.getElementById('products-container');
  container.innerHTML = '<p>Loading...</p>';

  try {
    const products = await fetchAllProducts();
    container.innerHTML = '';

    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('movie-card');

      card.innerHTML = `
        <a href="product.html?id=${product.id}">
          <img src="${product.image.url}" alt="${product.image.alt}" />
          <div class="info">
            <h3>${product.title}</h3>
            <p>$${product.discountedPrice}</p>
          </div>
        </a>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error(error);
    container.innerHTML = '<p>Failed to load products.</p>';
  }
}

displayProducts();
