import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({ title: "", price: "", image: "" });

  useEffect(() => {
    if (id !== "new") {
      axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => setProduct(response.data))
        .catch(error => console.error("Error fetching product:", error));
    }
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Product:", product);
    navigate("/products");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{id === "new" ? "Add Product" : "Edit Product"}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" value={product.title} onChange={handleChange} placeholder="Product Name" className="w-full p-2 border" />
        <input type="text" name="price" value={product.price} onChange={handleChange} placeholder="Price" className="w-full p-2 border" />
        <input type="text" name="image" value={product.image} onChange={handleChange} placeholder="Image URL" className="w-full p-2 border" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">{id === "new" ? "Add" : "Update"}</button>
      </form>
    </div>
  );
};

export default Product;
