import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id)); // Remove product from UI
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <Link to="/product/new" className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Product</Link>

      <table className="w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Image</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} className="text-center border">
              <td className="p-2"><img src={product.image} alt={product.title} className="h-12 mx-auto" /></td>
              <td className="p-2">{product.title}</td>
              <td className="p-2">${product.price}</td>
              <td className="p-2">
                <Link to={`/product/${product.id}`} className="text-blue-500 mx-2"><PencilIcon className="w-5 h-5 inline" /></Link>
                <button onClick={() => handleDelete(product.id)} className="text-red-500"><TrashIcon className="w-5 h-5 inline" /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
