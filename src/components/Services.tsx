
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { X, Image, Video, Camera, Film, Palette } from 'lucide-react';

// Service data
const services = [
  {
    id: "foto-eventi",
    title: "Foto per Eventi",
    description: "Scatti professionali che raccontano ogni istante dell'evento.",
    icon: Image,
    fullDescription: "Catturiamo in modo discreto e professionale tutti i momenti salienti del tuo evento. Da chi partecipa agli spazi, dalle emozioni ai dettagli che rendono unico il tuo giorno.",
    includes: [
      "Consulenza pre-evento per comprendere le tue esigenze",
      "Fotografo professionale per tutta la durata dell'evento",
      "Post-produzione e selezione delle migliori immagini",
      "Consegna in formato digitale ad alta risoluzione",
      "Galleria online privata per condividere con amici e familiari"
    ],
    timeline: "Consegna delle foto in 7-14 giorni lavorativi dall'evento.",
    faqs: [
      {
        question: "Quante foto riceverò?",
        answer: "In media forniamo 50-80 foto per ora di servizio, tutte selezionate e post-prodotte."
      },
      {
        question: "È possibile richiedere foto stampate?",
        answer: "Certamente! Offriamo servizi di stampa professionale su diversi formati e materiali."
      }
    ]
  },
  {
    id: "video-eventi",
    title: "Video per Eventi",
    description: "Video emozionanti e dinamici che fanno rivivere il momento.",
    icon: Video,
    fullDescription: "Creiamo filmati narrativi che raccontano la storia del tuo evento con un approccio cinematografico, catturando momenti spontanei e le emozioni autentiche.",
    includes: [
      "Consulenza pre-evento per definire stile e aspettative",
      "Videomaker professionista per tutta la durata dell'evento",
      "Montaggio creativo con correzione colore e audio",
      "Highlight video (3-5 minuti) e versione estesa (su richiesta)",
      "Consegna in formato digitale ad alta definizione"
    ],
    timeline: "Consegna del video in 20-30 giorni lavorativi dall'evento.",
    faqs: [
      {
        question: "È possibile avere un highlight veloce prima della consegna finale?",
        answer: "Sì, possiamo preparare un breve teaser entro 48-72 ore dall'evento."
      },
      {
        question: "Che tipo di attrezzatura utilizzate?",
        answer: "Utilizziamo videocamere professionali, stabilizzatori, droni (dove permesso) e microfoni dedicati per garantire la massima qualità."
      }
    ]
  },
  {
    id: "shooting-fotografici",
    title: "Shooting Fotografici",
    description: "Shooting per ritratti, social, branding o contenuti creativi.",
    icon: Camera,
    fullDescription: "Sessioni fotografiche personalizzate per individui, coppie o gruppi. Ideali per ritratti professionali, contenuti social, branding personale o semplicemente per avere ricordi di qualità.",
    includes: [
      "Consulenza pre-shooting per definire stile e location",
      "Sessione fotografica professionale (2-4 ore)",
      "Cambio di outfit e location (se richiesto)",
      "Post-produzione avanzata delle immagini selezionate",
      "Consegna in formato digitale ad alta risoluzione"
    ],
    timeline: "Consegna delle foto in 7-10 giorni lavorativi dallo shooting.",
    faqs: [
      {
        question: "Posso richiedere un trucco professionale per lo shooting?",
        answer: "Sì, collaboriamo con make-up artist professionisti che possono essere inclusi nel servizio."
      },
      {
        question: "Avete suggerimenti per le location?",
        answer: "Certamente! In base al tipo di shooting, possiamo consigliare diverse location nella zona di Anzio, Roma o dovunque sia necessario."
      }
    ]
  },
  {
    id: "montaggio-video",
    title: "Montaggio Video",
    description: "Editing su riprese già esistenti per un risultato professionale.",
    icon: Film,
    fullDescription: "Servizio di post-produzione video su materiale già esistente. Trasformiamo le tue riprese grezze in un prodotto professionale, con montaggio, color grading, audio e grafica.",
    includes: [
      "Consulenza iniziale per comprendere obiettivi e stile desiderato",
      "Selezione delle migliori clip dal materiale fornito",
      "Montaggio professionale con transizioni e ritmo narrativo",
      "Color grading e correzione audio",
      "Una revisione inclusa nel prezzo base"
    ],
    timeline: "Consegna in 10-20 giorni lavorativi in base alla complessità e durata del progetto.",
    faqs: [
      {
        question: "In che formato devo fornire i video grezzi?",
        answer: "Accettiamo la maggior parte dei formati video. L'ideale è avere file in alta risoluzione, ma lavoriamo con quello che hai disponibile."
      },
      {
        question: "Posso richiedere modifiche dopo aver visto la prima versione?",
        answer: "La prima revisione è inclusa nel prezzo. Ulteriori modifiche sono disponibili a un costo aggiuntivo."
      }
    ]
  },
  {
    id: "pacchetti-personalizzati",
    title: "Pacchetti Personalizzati",
    description: "Combinazioni su misura in base a esigenze, stile e budget.",
    icon: Palette,
    fullDescription: "Creiamo pacchetti completamente personalizzati che combinano i diversi servizi in base alle tue esigenze specifiche, al tipo di evento e al budget disponibile.",
    includes: [
      "Consulenza approfondita gratuita per definire le necessità",
      "Combinazione ottimale di servizi foto e video",
      "Opzioni per più giorni di copertura (per eventi estesi)",
      "Servizi aggiuntivi come album fisici, stampe, video extra",
      "Sconto dal 10% al 20% rispetto ai servizi acquistati singolarmente"
    ],
    timeline: "Tempi di consegna variabili in base ai servizi inclusi nel pacchetto.",
    faqs: [
      {
        question: "Come posso richiedere un preventivo personalizzato?",
        answer: "Puoi contattarmi direttamente via WhatsApp o telefono per discutere le tue esigenze e ricevere un preventivo su misura."
      },
      {
        question: "Offrite pacchetti per eventi ricorrenti o aziendali?",
        answer: "Assolutamente sì! Abbiamo soluzioni specifiche per eventi aziendali periodici o collaborazioni continuative con tariffe agevolate."
      }
    ]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-black-custom">Servizi</h2>
        <p className="text-lg mb-10 max-w-3xl">
          Offro soluzioni complete per immortalare i tuoi momenti più importanti,
          dalle fotografie ai video, fino ai pacchetti personalizzati in base alle tue esigenze.
        </p>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="service-card bg-white cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center">
                  <service.icon size={24} className="text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
              <div className="mt-6 text-center">
                <button 
                  className="text-gold font-semibold hover:underline flex items-center justify-center mx-auto"
                  onClick={() => setSelectedService(service)}
                >
                  Scopri di più
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-10">
          <p className="text-lg mb-4">Non trovi esattamente quello che cerchi?</p>
          <a href="#contact" className="btn btn-primary">
            Richiedi un preventivo personalizzato
          </a>
        </div>
      </div>
      
      {/* Service Detail Dialog */}
      {selectedService && (
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center text-2xl">
                <div className="mr-3">
                  <selectedService.icon size={24} className="text-gold" />
                </div>
                {selectedService.title}
              </DialogTitle>
            </DialogHeader>
            
            <div className="mt-4">
              <p className="text-lg mb-6">{selectedService.fullDescription}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Cosa include:</h4>
                <ul className="space-y-2">
                  {selectedService.includes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-1 text-gold">•</div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Tempistiche:</h4>
                <p>{selectedService.timeline}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Domande frequenti:</h4>
                <div className="space-y-4">
                  {selectedService.faqs.map((faq, index) => (
                    <div key={index}>
                      <h5 className="font-medium mb-1">{faq.question}</h5>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a href="#contact" className="btn btn-primary" onClick={() => setSelectedService(null)}>
                  Richiedi informazioni per questo servizio
                </a>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default Services;
