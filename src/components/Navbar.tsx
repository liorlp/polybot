import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <MessageCircle className="h-8 w-8 text-blue-800 ml-2" />
            <span className="text-xl font-bold text-gray-900">Poly בוט</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <a href="#features" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">תכונות</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">איך זה עובד</a>
            <a href="#demo" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">ראה בפעולה</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">שאלות נפוצות</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              התחל עכשיו
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute right-4 left-4 transition-all duration-300 ease-in-out">
            <div className="flex flex-col space-y-3">
              <a 
                href="#features" 
                className="text-gray-700 hover:text-blue-700 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                תכונות
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-700 hover:text-blue-700 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                איך זה עובד
              </a>
              <a 
                href="#demo" 
                className="text-gray-700 hover:text-blue-700 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ראה בפעולה
              </a>
              <a 
                href="#faq" 
                className="text-gray-700 hover:text-blue-700 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                שאלות נפוצות
              </a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                התחל עכשיו
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;