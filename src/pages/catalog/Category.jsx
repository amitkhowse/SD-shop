import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Category = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${id}`)
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching category products:", error));
  }, [id]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Category: {id}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="p-4 bg-white border rounded-md shadow-md">
            <img src={product.image} alt={product.title} className="h-24 mx-auto" />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
