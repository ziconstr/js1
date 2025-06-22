// js/storage.js

export function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image.url
  });
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

export function clearCart() {
  localStorage.removeItem("cart");
}
