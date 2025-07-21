
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export const Location = () => {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-wine mb-6">
            Nossa Localização
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estrategicamente localizada em Extrema/MG, atendemos todo o Brasil
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Location Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-wine-100 p-3 rounded-lg">
                  <MapPin className="text-wine" size={24} />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-lg text-wine mb-2">
                    Endereço
                  </h3>
                  <p className="text-gray-600">
                    Rua Presidente Kennedy, 43<br />
                    Extrema - MG
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gold-100 p-3 rounded-lg">
                  <Phone className="text-gold-700" size={24} />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-lg text-wine mb-2">
                    Telefone
                  </h3>
                  <p className="text-gray-600">
                    <a href="tel:35988170909" className="hover:text-wine transition-colors">
                      (35) 98817-0909
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-wine-100 p-3 rounded-lg">
                  <Mail className="text-wine" size={24} />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-lg text-wine mb-2">
                    E-mail
                  </h3>
                  <p className="text-gray-600">
                    <a 
                      href="mailto:contato@vsgestaocontabil.com.br" 
                      className="hover:text-wine transition-colors"
                    >
                      contato@vsgestaocontabil.com.br
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gold-100 p-3 rounded-lg">
                  <Clock className="text-gold-700" size={24} />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-lg text-wine mb-2">
                    Horário de Atendimento
                  </h3>
                  <p className="text-gray-600">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>

            {/* Advantages */}
            <div className="bg-wine-50 p-6 rounded-xl">
              <h3 className="font-playfair font-semibold text-lg text-wine mb-4">
                Vantagens da Nossa Localização
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  Polo logístico estratégico do Sul de Minas
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  Fácil acesso a São Paulo, Rio de Janeiro e Belo Horizonte
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  Atendimento presencial e remoto para todo o Brasil
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  Região com infraestrutura empresarial completa
                </li>
              </ul>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="bg-gray-100 rounded-xl overflow-hidden h-96 lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.8!2d-46.3119!3d-22.8551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9f0f8f8f8f8f8%3A0x8f8f8f8f8f8f8f8f!2sRua%20Presidente%20Kennedy%2C%2043%2C%20Extrema%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1635000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização VS Gestão Contábil - Rua Presidente Kennedy, 43, Extrema - MG"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
