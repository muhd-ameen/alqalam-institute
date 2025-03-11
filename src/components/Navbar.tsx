import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-green-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Al Qalam Institute
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/courses" className="hover:text-gray-300">Courses</Link>
          <Link to="/resources" className="hover:text-gray-300">Resources</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>

        {/* Join Now Button (Always Visible) */}
        <Link to="/join" className="hidden md:block bg-yellow-500 text-blue-900 px-4 py-2 rounded-md font-semibold hover:bg-yellow-600">
          Join Now
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-8 h-8 text-white" /> : <Menu className="w-8 h-8 text-white" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-800 py-4">
          <Link to="/" className="block py-2 px-6 text-white hover:bg-green-700">Home</Link>
          <Link to="/about" className="block py-2 px-6 text-white hover:bg-green-700">About</Link>
          <Link to="/courses" className="block py-2 px-6 text-white hover:bg-green-700">Courses</Link>
          <Link to="/resources" className="block py-2 px-6 text-white hover:bg-green-700">Resources</Link>
          <Link to="/contact" className="block py-2 px-6 text-white hover:bg-green-700">Contact</Link>
          <Link to="/join" className="block mt-3 mx-6 bg-yellow-500 text-blue-900 text-center px-4 py-2 rounded-md font-semibold hover:bg-yellow-600">
            Join Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
