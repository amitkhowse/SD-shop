const BASE_URL = "https://api.example.com/products"; // Replace with your backend URL

export const getProducts = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

export const getProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  return response.json();
};

export const addProduct = async (productData) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });
  return response.json();
};

export const updateProduct = async (id, productData) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });
  return response.json();
};

export const deleteProduct = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  return response.json();
};
