import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function Buy(){
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`http://localhost:5000/product/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleBuy = () => {
    axios.post(`http://localhost:5000/buy/${id}`, { user: "Demo User" })
      .then(res => {
        alert(res.data.message);
        navigate("/products");
      })
      .catch(err => {
        console.error(err);
        alert("Failed to buy.");
      });
  };

  if(!product) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <p className="mb-2">Product: <strong>{product.name}</strong></p>
      <p className="mb-4">Price: <strong>{product.price}৳</strong></p>

      <button onClick={handleBuy} className="bg-blue-600 text-white px-4 py-2 rounded">Confirm Purchase</button>
    </div>
  );
}
