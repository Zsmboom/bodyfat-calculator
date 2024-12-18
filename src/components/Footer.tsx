import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">HealthHub</h3>
            <p className="text-gray-300">Your guide to a healthier lifestyle through informed decisions and mindful living.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Body Fat Calculator</Link></li>
              <li><Link to="/calorie-deficit" className="text-gray-300 hover:text-white transition-colors">Calorie Deficit</Link></li>
              <li><Link to="/meditation" className="text-gray-300 hover:text-white transition-colors">Meditation Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/body-fat" className="text-gray-300 hover:text-white transition-colors">Body Fat Guide</Link></li>
              <li><Link to="/healthy-living" className="text-gray-300 hover:text-white transition-colors">Healthy Living Tips</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} HealthHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;