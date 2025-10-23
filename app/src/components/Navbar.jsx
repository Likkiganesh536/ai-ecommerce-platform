import { Link } from "react-router-dom";
import { ShoppingCart, User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Section - Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          AI<span className="text-gray-800">Shop</span>
        </Link>

        {/* Center Section - Search Bar */}
        <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-full w-1/2">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent outline-none px-2 w-full text-gray-700"
          />
        </div>

        {/* Right Section - Icons */}
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-gray-600 hover:text-indigo-600">
            <User size={22} />
          </Link>
          <Link to="/cart" className="relative text-gray-600 hover:text-indigo-600">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full px-1.5">
              0
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
