
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-black-custom text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-1">
              <span className="text-gold">Shoots</span>ByBog
            </h3>
            <p className="text-sm text-gray-400">Fotografo e Videomaker per Eventi</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              © {year} Bogdan Mihu. Tutti i diritti riservati.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              P.IVA: 12345678910
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
