
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from './icons/FeatureIcons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-50/80 sticky top-0 z-50 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="text-xl sm:text-2xl font-bold text-primary-600">
          <Link to="/">Publis<span className="text-gray-800">Tracker</span></Link>
        </div>
        <nav className="hidden md:flex items-center">
          <a
            href="#precos"
            className="bg-primary-600 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-75 transition-all duration-300"
          >
            Começar Agora
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="p-2">
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200">
           <div className="px-4 pt-2 pb-4 space-y-2">
             <a
               href="#precos"
               onClick={() => setIsMenuOpen(false)}
               className="block bg-primary-600 text-white text-center font-semibold px-5 py-2.5 rounded-lg shadow-md hover:bg-primary-700 transition-all duration-300"
             >
               Começar Agora
             </a>
           </div>
        </div>
      )}
    </header>
  );
};

export default Header;