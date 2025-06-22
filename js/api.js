// api.js

const API_BASE = "https://v2.api.noroff.dev/square-eyes";

export async function fetchAllProducts() {
  const response = await fetch(`${API_BASE}`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return data.data;
}

export async function fetchProductById(id) {
  const response = await fetch(`${API_BASE}/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  const data = await response.json();
  return data.data;
}
