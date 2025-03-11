import React from 'react';
import { Book, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Book className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-xl font-bold text-white">Al Qalam Institute</span>
            </div>
            <p className="text-gray-400">
              Connecting Hearts to the Qur'an through excellence in Islamic education.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-emerald-500 transition">About Us</a></li>
              <li><a href="#courses" className="hover:text-emerald-500 transition">Courses</a></li>
              <li><a href="#resources" className="hover:text-emerald-500 transition">Resources</a></li>
              <li><a href="#contact" className="hover:text-emerald-500 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                info@alqalam.edu
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                123 Islamic Center St.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and resources.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-emerald-500"
              />
              <button className="w-full bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2025 Al Qalam Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;