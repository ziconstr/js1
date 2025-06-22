import { fetchAllProducts } from './api.js';

async function renderHomePage() {
  const newReleasesContainer = document.getElementById("new-releases");
  const popularContainer = document.getElementById("popular");

  try {
    const products = await fetchAllProducts();

    products.forEach(product => {
      const card = createMovieCard(product);
      newReleasesContainer.appendChild(card);
    });

    // Example: duplicate the same for popular section (or filter if needed)
    products.forEach(product => {
      const card = createMovieCard(product);
      popularContainer.appendChild(card);
    });

  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

function createMovieCard(product) {
  const card = document.createElement("div");
  card.classList.add("movie-card");

  card.innerHTML = `
    <a href="product.html?id=${product.id}">
      <img src="${product.image.url}" alt="${product.title}">
      <div class="info">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
      </div>
    </a>
  `;

  return card;
}

renderHomePage();
