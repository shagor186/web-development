import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function ProductDetails(){
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(()=>{
    axios.get(`http://localhost:5000/product/${id}`)
      .then(res=> setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if(!product) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={`http://localhost:5000${product.image}`} alt={product.name} className="w-full md:w-1/3 h-64 object-cover rounded" />
        <div>
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">Price: {product.price}৳</p>
          <div className="flex gap-3">
            <Link to={`/buy/${product.id}`} className="bg-green-600 text-white px-4 py-2 rounded">Buy Now</Link>
            <Link to="/products" className="px-4 py-2 border rounded">Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
