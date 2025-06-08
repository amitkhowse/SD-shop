import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { EyeIcon } from "@heroicons/react/24/outline";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/carts")
      .then(response => setOrders(response.data))
      .catch(error => console.error("Error fetching orders:", error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Order ID</th>
            <th className="p-2 border">User ID</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="text-center border">
              <td className="p-2">{order.id}</td>
              <td className="p-2">{order.userId}</td>
              <td className="p-2">{new Date(order.date).toLocaleDateString()}</td>
              <td className="p-2">
                <Link to={`/order/${order.id}`} className="text-blue-500">
                  <EyeIcon className="w-5 h-5 inline" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
