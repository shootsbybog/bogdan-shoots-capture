
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { GalleryHorizontal, Video } from 'lucide-react';

// Sample portfolio data (in a real app, this would come from Instagram/YouTube APIs)
const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    type: "image"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80",
    type: "image"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    type: "image"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80",
    type: "image"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
    type: "image"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=600&q=80",
    type: "image"
  }
];

const videos = [
  {
    id: 1,
    thumbnailUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&q=80",
    videoId: "dQw4w9WgXcQ", // Sample YouTube ID
    title: "Matrimonio di Marco e Giulia"
  },
  {
    id: 2,
    thumbnailUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
    videoId: "9bZkp7q19f0", // Sample YouTube ID
    title: "Evento aziendale TechCorp"
  }
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');

  return (
    <section id="portfolio" className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-black-custom">Portfolio</h2>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md border border-gray-300 overflow-hidden">
            <button 
              className={`px-6 py-3 flex items-center ${activeTab === 'photos' ? 'bg-gold text-black-custom' : 'bg-white text-black-custom'}`}
              onClick={() => setActiveTab('photos')}
            >
              <GalleryHorizontal size={18} className="mr-2" />
              Foto
            </button>
            <button 
              className={`px-6 py-3 flex items-center ${activeTab === 'videos' ? 'bg-gold text-black-custom' : 'bg-white text-black-custom'}`}
              onClick={() => setActiveTab('videos')}
            >
              <Video size={18} className="mr-2" />
              Video
            </button>
          </div>
        </div>
        
        {/* Photos Grid */}
        {activeTab === 'photos' && (
          <div className="portfolio-grid">
            {photos.map((photo) => (
              <div 
                key={photo.id} 
                className="portfolio-item"
                onClick={() => setSelectedImage(photo.url)}
              >
                <img 
                  src={photo.url} 
                  alt={`Portfolio item ${photo.id}`} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                    <GalleryHorizontal size={20} className="text-black" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Videos Grid */}
        {activeTab === 'videos' && (
          <div className="portfolio-grid">
            {videos.map((video) => (
              <div 
                key={video.id} 
                className="portfolio-item"
                onClick={() => setSelectedVideo(video.videoId)}
              >
                <img 
                  src={video.thumbnailUrl} 
                  alt={video.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-70 hover:opacity-90 transition-opacity flex flex-col items-center justify-center p-4">
                  <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center mb-3">
                    <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-black ml-1"></div>
                  </div>
                  <p className="text-white text-center font-medium">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* View more button */}
        <div className="text-center mt-10">
          <a 
            href="https://www.instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-dark"
          >
            Vedi tutto il Portfolio su Instagram
          </a>
        </div>
        
        {/* Image Lightbox */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-3xl p-0 bg-transparent border-none">
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Portfolio enlarged" 
                className="w-full h-auto"
              />
            )}
          </DialogContent>
        </Dialog>
        
        {/* Video Lightbox */}
        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-3xl p-0 bg-transparent border-none">
            {selectedVideo && (
              <div className="relative pb-[56.25%] h-0">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Portfolio;
