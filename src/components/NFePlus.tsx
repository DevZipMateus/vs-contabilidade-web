
import React from 'react';

const NFePlus = () => {
  // Link for both the title and button
  const nfePlusLink = "https://nfemais.com.br/?afl=99";

  return (
    <section className="py-6 bg-white overflow-hidden">
      <div className="container px-4 mx-auto max-w-5xl">
        {/* Two-column layout for desktop, stack on mobile */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-6">
          {/* Left column - Image Container */}
          <div className="md:w-1/2 mb-4 md:mb-0 order-2 md:order-1">
            <div className="rounded-lg overflow-hidden shadow-sm">
              <img 
                src="/lovable-uploads/notebook.svg" 
                alt="NFe+ Sistema de emissão de notas fiscais" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Right column - Header Text */}
          <div className="md:w-1/2 text-center md:text-left order-1 md:order-2">
            <a 
              href={nfePlusLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <h3 className="text-lg md:text-xl font-playfair font-semibold text-gray-700 mb-2 leading-tight">
                Emissor de Notas Fiscais
              </h3>
            </a>
            <p className="text-sm text-gray-600 mb-3">
              Cadastre seus produtos, tributação e contatos para simplificar a emissão de notas fiscais eletrônicas.
            </p>
            <a 
              href={nfePlusLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block text-xs text-wine hover:text-wine-600 transition-colors underline decoration-1 underline-offset-2"
            >
              Teste grátis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFePlus;
