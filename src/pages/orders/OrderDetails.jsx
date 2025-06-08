import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/carts/${id}`)
      .then(response => setOrder(response.data))
      .catch(error => console.error("Error fetching order details:", error));
  }, [id]);

  if (!order) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Order ID: {order.id}</h1>
      <p><strong>User ID:</strong> {order.userId}</p>
      <p><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
      <h2 className="text-xl font-bold mt-4">Products</h2>
      <ul className="list-disc pl-5">
        {order.products.map(product => (
          <li key={product.productId}>
            <strong>Product ID:</strong> {product.productId} | <strong>Quantity:</strong> {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetails;
