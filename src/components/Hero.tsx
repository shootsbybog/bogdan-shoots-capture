
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background image */}
      <div className="absolute inset-0 bg-black-custom">
        <img 
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1920&q=80" 
          alt="Fotografo in azione" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 animate-fade-in">
          Rendo eterni i tuoi attimi migliori.
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto animate-fade-up">
          Fotografo e videomaker per eventi, matrimoni e momenti che contano davvero.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <a href="#portfolio" className="btn btn-primary">
            Guarda il Portfolio
            <ArrowRight size={18} className="ml-2" />
          </a>
          <a href="#contact" className="btn btn-outline">
            Contattami Ora
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
