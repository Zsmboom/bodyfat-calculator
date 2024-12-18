import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, Calculator, Brain, Heart, Flower, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: '/', icon: Calculator, text: 'Body Fat Calculator' },
    { to: '/calorie-deficit', icon: Activity, text: 'Calorie Deficit' },
    { to: '/body-fat', icon: Heart, text: 'Body Fat Guide' },
    { to: '/healthy-living', icon: Brain, text: 'Healthy Living' },
    { to: '/meditation', icon: Flower, text: 'Meditation' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Heart className="h-8 w-8 text-rose-600" />
              <span className="ml-2 text-xl font-bold">HealthHub</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center text-gray-700 hover:text-rose-600 transition-colors"
              >
                <item.icon className="h-5 w-5 mr-1" />
                <span>{item.text}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-rose-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-rose-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="h-5 w-5 mr-2" />
                <span>{item.text}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;