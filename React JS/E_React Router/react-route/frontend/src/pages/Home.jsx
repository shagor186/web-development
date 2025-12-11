import { Link } from "react-router-dom";

export default function Home(){
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to MyShop</h1>
      <p className="mb-6">Simple demo shop with React frontend & Flask backend.</p>
      <div className="flex justify-center gap-4">
        <Link to="/products" className="bg-blue-600 text-white px-4 py-2 rounded">View Products</Link>
        <Link to="/category" className="bg-green-600 text-white px-4 py-2 rounded">Categories</Link>
      </div>
    </div>
  );
}
