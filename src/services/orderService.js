const BASE_URL = "https://api.example.com/orders"; // Replace with your backend URL

export const getOrders = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

export const getOrderById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  return response.json();
};

export const updateOrderStatus = async (id, status) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  return response.json();
};

export const deleteOrder = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  return response.json();
};
