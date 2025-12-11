import { Link } from "react-router-dom";

export default function MainNavbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-bold">
          <Link to="/">MyShop</Link>
        </div>

        <div className="flex gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/category" className="hover:underline">Category</Link>
          <Link to="/products" className="hover:underline">Products</Link>
        </div>
      </div>
    </nav>
  );
}
