import { Link } from "react-router-dom";

export default function Category(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link to="/products" className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold">Electronics</h3>
          <p className="text-sm text-gray-500">Phones, watches, accessories</p>
        </Link>

        <Link to="/products" className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold">Accessories</h3>
          <p className="text-sm text-gray-500">Bags, chargers, headphones</p>
        </Link>
      </div>
    </div>
  );
}
