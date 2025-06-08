import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { EyeIcon } from "@heroicons/react/24/outline";

const CustomersList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => setCustomers(response.data))
      .catch(error => console.error("Error fetching customers:", error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id} className="text-center border">
              <td className="p-2">{customer.name}</td>
              <td className="p-2">{customer.email}</td>
              <td className="p-2">{customer.phone}</td>
              <td className="p-2">
                <Link to={`/customer/${customer.id}`} className="text-blue-500">
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

export default CustomersList;
