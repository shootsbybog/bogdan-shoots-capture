
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black-custom shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-white text-xl md:text-2xl font-bold">
          <span className="text-gold">Shoots</span>ByBog
        </a>

        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-white">
          <a href="#home" className="hover:text-gold transition-colors">Home</a>
          <a href="#about" className="hover:text-gold transition-colors">Chi Sono</a>
          <a href="#portfolio" className="hover:text-gold transition-colors">Portfolio</a>
          <a href="#services" className="hover:text-gold transition-colors">Servizi</a>
          <a href="#testimonials" className="hover:text-gold transition-colors">Recensioni</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contatti</a>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black-custom py-4 animate-fade-in">
          <nav className="flex flex-col space-y-4 text-white text-center">
            <a href="#home" onClick={closeMenu} className="py-2 hover:text-gold transition-colors">Home</a>
            <a href="#about" onClick={closeMenu} className="py-2 hover:text-gold transition-colors">Chi Sono</a>
            <a href="#portfolio" onClick={closeMenu} className="py-2 hover:text-gold transition-colors">Portfolio</a>
            <a href="#services" onClick={closeMenu} className="py-2 hover:text-gold transition-colors">Servizi</a>
            <a href="#testimonials" onClick={closeMenu} className="py-2 hover:text-gold transition-colors">Recensioni</a>
            <a href="#contact" onClick={closeMenu} className="py-2 hover:text-gold transition-colors">Contatti</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
