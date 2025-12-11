import { Outlet, Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <nav className="flex gap-4 mb-4">
        <Link to="" className="text-blue-600 hover:underline">Dashboard Home</Link>
        <Link to="settings" className="text-blue-600 hover:underline">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}
