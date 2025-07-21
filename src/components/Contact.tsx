import { useState } from 'react';
import { Phone, Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create WhatsApp message with all form data
    const whatsappMessage = `*Nova solicitação de orçamento - V&S Soluções Empresariais*

*Nome:* ${formData.nome}
*E-mail:* ${formData.email}
*Telefone:* ${formData.telefone}
${formData.empresa ? `*Empresa:* ${formData.empresa}` : ''}

*Mensagem:*
${formData.mensagem}

---
_Enviado através do site vsgestaocontabil.com.br_`;

    const phoneNumber = "5535988170909";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Show success message
    toast({
      title: "Redirecionando para WhatsApp!",
      description: "Você será direcionado para o WhatsApp com sua mensagem preenchida.",
    });

    // Reset form
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      mensagem: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-wine mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender sua empresa com soluções contábeis personalizadas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-wine mb-6">
                Fale Conosco
              </h3>
              <p className="text-gray-600 mb-8">
                Nossa equipe de especialistas está pronta para entender as necessidades 
                da sua empresa e oferecer as melhores soluções contábeis.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <a 
                href="tel:35988170909"
                className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="bg-wine-100 p-4 rounded-lg group-hover:bg-wine group-hover:text-white transition-colors">
                  <Phone size={24} className="text-wine group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-wine mb-1">Telefone</h4>
                  <p className="text-gray-600">(35) 98817-0909</p>
                </div>
              </a>

              <a 
                href="mailto:contato@vsgestaocontabil.com.br"
                className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="bg-gold-100 p-4 rounded-lg group-hover:bg-gold-600 group-hover:text-white transition-colors">
                  <Mail size={24} className="text-gold-700 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-wine mb-1">E-mail</h4>
                  <p className="text-gray-600">contato@vsgestaocontabil.com.br</p>
                </div>
              </a>

              <a 
                href="https://wa.me/5535988170909"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="bg-green-100 p-4 rounded-lg group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <MessageSquare size={24} className="text-green-600 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-wine mb-1">WhatsApp</h4>
                  <p className="text-gray-600">Atendimento rápido e direto</p>
                </div>
              </a>
            </div>

            {/* Business Hours */}
            <div className="bg-wine p-6 rounded-xl text-white">
              <h4 className="font-playfair font-semibold text-lg mb-4">
                Horário de Atendimento
              </h4>
              <div className="space-y-2">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p className="text-gold-300 mt-4">
                  ✓ Atendimento de urgência 24h via WhatsApp
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-playfair font-semibold text-wine mb-6">
              Solicite um Orçamento
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine focus:border-transparent transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine focus:border-transparent transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine focus:border-transparent transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine focus:border-transparent transition-colors"
                  placeholder="Nome da sua empresa"
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wine focus:border-transparent transition-colors"
                  placeholder="Descreva suas necessidades ou dúvidas..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-wine text-white px-8 py-4 rounded-lg font-semibold hover:bg-wine-600 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <CheckCircle size={20} />
                    Redirecionando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar via WhatsApp
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
