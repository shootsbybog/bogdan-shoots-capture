
import React from 'react';
import { Phone, MessageSquare, Instagram, Facebook, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-black-custom">Contatti</h2>
        <p className="text-lg mb-10 max-w-2xl">
          Hai un evento in programma o vuoi maggiori informazioni sui miei servizi? 
          Contattami direttamente tramite uno dei canali qui sotto.
        </p>
        
        {/* Contact buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <a 
            href="tel:+393001234567" 
            className="btn btn-primary min-w-[200px] flex items-center justify-center"
          >
            <Phone size={18} className="mr-2" />
            Chiama Ora
          </a>
          <a 
            href="https://wa.me/393001234567" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-dark min-w-[200px] flex items-center justify-center"
          >
            <MessageSquare size={18} className="mr-2" />
            Scrivimi su WhatsApp
          </a>
        </div>
        
        {/* Social links */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Seguimi sui social</h3>
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.instagram.com/shootsbybog/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-black-custom flex items-center justify-center text-white hover:bg-gold hover:text-black-custom transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
            <a 
              href="https://www.facebook.com/shootsbybog/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-black-custom flex items-center justify-center text-white hover:bg-gold hover:text-black-custom transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={22} />
            </a>
            <a 
              href="https://www.tiktok.com/@shootsbybog" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-black-custom flex items-center justify-center text-white hover:bg-gold hover:text-black-custom transition-colors"
              aria-label="TikTok"
            >
              {/* Using custom TikTok icon since lucide-react doesn't have a TikTok icon */}
              <svg 
                width="22" 
                height="22" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
