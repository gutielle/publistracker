
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-50/80 sticky top-0 z-50 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary-600">
          Publis<span className="text-gray-800">Tracker</span>
        </div>
        <nav>
          <a
            href="#cta"
            className="bg-primary-600 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-75 transition-all duration-300"
          >
            Começar Agora
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
