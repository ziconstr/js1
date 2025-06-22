import { fetchProductById } from "./api.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function loadProduct() {
  try {
    const product = await fetchProductById(id);

    const productHTML = `
    <div class="product-container">
      <div class="container">
        <div class="image">
          <img src="${product.image.url}" alt="${product.title}">
        </div>
        <div class="product">
          <span class="per">${product.tags.join(", ")}</span>
          <h1>${product.title}</h1>
          <p>${product.description}</p>
          <div class="price">$${product.discountedPrice}</div>
          <div class="old-price">$${product.price}</div>
          <a href="#" class="add-card" data-id="${product.id}">
            <i class="fas fa-shopping-cart"></i> Add to Cart
          </a>
        </div>
      </div>
    </div>`;

    document.getElementById("product-details").innerHTML = productHTML;

    document.querySelector(".add-card").addEventListener("click", (e) => {
      e.preventDefault();
      addToCart(product);
    });

  } catch (err) {
    document.getElementById("product-details").innerHTML = "<p>Product not found.</p>";
  }
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

loadProduct();
