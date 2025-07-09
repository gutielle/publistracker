
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-6 py-8 text-center text-gray-500">
        <div className="text-lg font-bold text-primary-600">
          Publis<span className="text-gray-800">Tracker</span>
        </div>
        <p className="mt-4 text-sm">
          Simplificando a vida dos criadores de conteúdo.
        </p>
        <p className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} PublisTracker. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
