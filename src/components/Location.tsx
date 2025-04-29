
import React from 'react';

const Location = () => {
  return (
    <section id="location" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-black-custom">Dove Lavoro</h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-8">
            Vivo ad Anzio, ma il mio lavoro non ha confini. Opero regolarmente a Nettuno, Latina, Aprilia e Roma,
            ma sono disponibile a spostarmi ovunque ci sia un evento da raccontare.
            Se mi vuoi in Toscana o altrove, io ci sono.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Anzio', 'Nettuno', 'Latina', 'Aprilia', 'Roma', 'Tutta Italia'].map((location) => (
              <span 
                key={location}
                className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200"
              >
                {location}
              </span>
            ))}
          </div>
          
          {/* Simple map or illustration */}
          <div className="w-full h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47859.95845810424!2d12.591386338238769!3d41.44692426803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1323fb7aff70efb9%3A0xb0b29a881f372c42!2s00042%20Anzio%20RM!5e0!3m2!1sit!2sit!4v1713562510757!5m2!1sit!2sit" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
