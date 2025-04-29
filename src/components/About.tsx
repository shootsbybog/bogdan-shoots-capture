
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section bg-black-custom text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 border-2 border-gold opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80" 
                alt="Bogdan Mihu fotografo" 
                className="w-full rounded-lg relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-64 h-64 border-2 border-gold opacity-50"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="section-title">Chi Sono</h2>
            <p className="text-lg mb-6">
              Mi chiamo Bogdan Mihu, e da anni racconto emozioni con immagini e suoni. 
              Dalle lacrime di un 'sì' ai brindisi tra amici, il mio obiettivo è catturare l'anima dell'evento.
            </p>
            
            {/* Points of strength */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold flex items-center justify-center text-black-custom font-bold text-xl mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Basato ad Anzio, operativo in tutta Italia</h3>
                  <p>Disponibile per eventi in ogni regione, con esperienza in location di ogni tipo.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold flex items-center justify-center text-black-custom font-bold text-xl mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Servizi su misura di fotografia e video</h3>
                  <p>Ogni progetto è unico, e ogni servizio viene personalizzato sulle tue esigenze specifiche.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold flex items-center justify-center text-black-custom font-bold text-xl mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Consegna rapida e professionale</h3>
                  <p>Materiale di alta qualità consegnato nei tempi concordati, senza compromessi sulla qualità.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
