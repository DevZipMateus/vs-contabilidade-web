
import React from 'react';

const EgestorERP = () => {
  // Link for both the title and button
  const egestorLink = "https://www.egestor.com.br/afl/99";

  return (
    <section className="py-6 bg-gray-50 overflow-hidden">
      <div className="container px-4 mx-auto max-w-5xl">
        {/* Two-column layout for desktop, stack on mobile */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-6">
          {/* Left column - Header Text */}
          <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
            <a 
              href={egestorLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <h3 className="text-lg md:text-xl font-playfair font-semibold text-gray-700 mb-2 leading-tight">
                Sistema de gestão empresarial
              </h3>
            </a>
            <p className="text-sm text-gray-600 mb-3">
              Dobre seus lucros otimizando sua gestão
            </p>
            <a 
              href={egestorLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block text-xs text-wine hover:text-wine-600 transition-colors underline decoration-1 underline-offset-2"
            >
              Saiba mais
            </a>
          </div>
          
          {/* Right column - Video Container */}
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-sm">
            <video 
              className="w-full aspect-video object-cover" 
              autoPlay 
              muted 
              loop 
              playsInline 
              poster="/lovable-uploads/00b6d73e-0139-4a17-ad97-b66dac2be5f8.png"
            >
              <source 
                src="https://egestor.com.br/assets/img/egestor-gestao-simples-para-crescer.mp4" 
                type="video/mp4" 
              />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EgestorERP;
