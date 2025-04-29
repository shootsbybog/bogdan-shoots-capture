
import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

const MobileContactBar = () => {
  return (
    <div className="mobile-contact-bar">
      <a 
        href="tel:+393001234567" 
        className="mobile-contact-btn"
        aria-label="Chiama ora"
      >
        <Phone size={20} className="mb-1" />
        <span className="text-xs">Chiama</span>
      </a>
      <a 
        href="https://wa.me/393001234567" 
        className="mobile-contact-btn border-l border-gold/30"
        aria-label="Scrivimi su WhatsApp"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <MessageSquare size={20} className="mb-1" />
        <span className="text-xs">WhatsApp</span>
      </a>
    </div>
  );
};

export default MobileContactBar;
