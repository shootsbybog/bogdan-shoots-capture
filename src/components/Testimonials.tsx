
import React from 'react';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Marco e Giulia Rossi",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=100&h=100&q=80",
    quote: "Bogdan ha saputo catturare l'essenza del nostro matrimonio con una sensibilità unica. Le foto e il video ci fanno rivivere quel giorno ogni volta che li guardiamo.",
    event: "Matrimonio"
  },
  {
    id: 2,
    name: "Azienda TechCorp",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=100&h=100&q=80",
    quote: "Professionale e discreto, ha documentato il nostro evento aziendale creando contenuti di grande impatto che abbiamo utilizzato con successo nella nostra comunicazione.",
    event: "Evento Aziendale"
  },
  {
    id: 3,
    name: "Sara Bianchi",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=100&h=100&q=80",
    quote: "Ho contattato Bogdan per un servizio fotografico personale e sono rimasta colpita dalla sua capacità di mettermi a mio agio e valorizzarmi. Risultato eccezionale!",
    event: "Shooting Personale"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-black-custom text-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">Recensioni</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm relative">
              {/* Quote mark */}
              <div className="absolute top-4 right-4 text-gold text-4xl opacity-50">"</div>
              
              <p className="mb-6 text-white/90 relative z-10">
                {testimonial.quote}
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gold text-sm">{testimonial.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg mb-6">
            Scopri cosa dicono di me i miei clienti e perché scelgono i miei servizi.
          </p>
          <a 
            href="https://g.page/r/shootsbybog/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Leggi altre recensioni su Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
