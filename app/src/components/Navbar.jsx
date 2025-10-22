import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">AI E-Commerce</Link>
      <div className="space-x-4">
        <Link to="/cart" className="hover:text-blue-500">Cart</Link>
        <Link to="/login" className="hover:text-blue-500">Login</Link>
      </div>
    </nav>
  );
}
