
import React from 'react';
import { Phone, MessageSquare, Instagram, Facebook, Tiktok, ArrowRight } from 'lucide-react';

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
              <Tiktok size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
