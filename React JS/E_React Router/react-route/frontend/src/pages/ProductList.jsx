import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductList(){
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    axios.get("http://localhost:5000/products")
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.error(err);
        alert("Cannot fetch products from backend. Make sure backend is running.");
      })
      .finally(()=>setLoading(false));
  },[]);

  if(loading) return <div>Loading products...</div>;
  if(!products.length) return <div>No products found.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map(p => (
        <div key={p.id} className="bg-white rounded shadow p-4">
          <img src={`http://localhost:5000${p.image}`} alt={p.name} className="w-full h-40 object-cover mb-3 rounded" />
          <h3 className="text-lg font-semibold">{p.name}</h3>
          <p className="text-gray-600 mb-2">Price: {p.price}৳</p>
          <Link to={`/product/${p.id}`} className="inline-block bg-blue-600 text-white px-3 py-2 rounded">View Details</Link>
        </div>
      ))}
    </div>
  );
}
