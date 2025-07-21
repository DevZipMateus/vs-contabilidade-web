
export const WhatsAppButton = () => {
  const phoneNumber = "5535988170909";
  const message = "Olá! Gostaria de saber mais sobre os serviços da V&S Soluções Empresariais.";
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return <button onClick={handleWhatsAppClick} aria-label="Falar no WhatsApp" className="fixed bottom-6 right-6 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group hover:scale-105 bg-transparent">
      <img src="/lovable-uploads/859235eb-d75f-4ef1-bbb8-6d3fb5b37c55.png" alt="WhatsApp" className="w-12 h-12 transition-transform" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Fale conosco no WhatsApp
        <div className="absolute top-full right-4 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </button>;
};
