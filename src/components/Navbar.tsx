import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Al Qalam Institute
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/courses" className="hover:text-gray-300">Courses</Link>
          <Link to="/resources" className="hover:text-gray-300">Resources</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>

        {/* Join Now Button */}
        <Link to="/join" className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-md font-semibold hover:bg-yellow-600">
          Join Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
