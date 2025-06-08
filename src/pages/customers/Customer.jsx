import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Customer = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => setCustomer(response.data))
      .catch(error => console.error("Error fetching customer:", error));
  }, [id]);

  if (!customer) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{customer.name}</h1>
      <p><strong>Email:</strong> {customer.email}</p>
      <p><strong>Phone:</strong> {customer.phone}</p>
      <p><strong>Company:</strong> {customer.company.name}</p>
      <p><strong>Address:</strong> {customer.address.street}, {customer.address.city}</p>
    </div>
  );
};

export default Customer;
