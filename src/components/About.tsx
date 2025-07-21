

import { Calendar, MapPin, Target, Handshake } from 'lucide-react';
export const About = () => {
  return <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-wine mb-6">
            Nossa História
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de uma década construindo soluções contábeis que impulsionam negócios
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                A <strong className="text-wine">V&S Soluções Empresariais e Contabilidade Ltda</strong> nasceu em 
                28 de abril de 2011, fruto da visão empreendedora das sócias e contadoras 
                <strong className="text-wine"> Veridiana Soares</strong> e <strong className="text-wine">Silvia Mariano</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Desde o início, nosso propósito sempre foi claro: oferecer um serviço contábil diferenciado, 
                que alia excelência técnica, atendimento consultivo e soluções práticas para o dia a dia das empresas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ano após ano, construímos uma trajetória sólida e consistente, marcada por crescimento sustentável 
                e pelo reconhecimento no mercado. Hoje, somos referência nacional não apenas em serviços contábeis 
                completos, mas também em consultoria tributária estratégica.
              </p>
            </div>
          </div>

          {/* Image/Logo */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-wine-50 to-gold-50 p-12 rounded-2xl">
              <img src="/lovable-uploads/17d567f2-a942-4452-b922-33eaf1b4be79.png" alt="V&S Soluções Empresariais e Contabilidade" className="h-40 w-auto mx-auto" />
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-wine-50 rounded-xl hover:bg-wine-100 transition-colors duration-300">
            <div className="bg-wine p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Calendar className="text-white" size={24} />
            </div>
            <h3 className="font-playfair font-semibold text-lg text-wine mb-2">
              Desde 2011
            </h3>
            <p className="text-gray-600">
              Mais de 13 anos de experiência no mercado contábil
            </p>
          </div>

          <div className="text-center p-6 bg-gold-50 rounded-xl hover:bg-gold-100 transition-colors duration-300">
            <div className="bg-gold-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <MapPin className="text-white" size={24} />
            </div>
            <h3 className="font-playfair font-semibold text-lg text-wine mb-2">
              Extrema/MG
            </h3>
            <p className="text-gray-600">
              Localização estratégica no sul de Minas Gerais
            </p>
          </div>

          <div className="text-center p-6 bg-wine-50 rounded-xl hover:bg-wine-100 transition-colors duration-300">
            <div className="bg-wine p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Target className="text-white" size={24} />
            </div>
            <h3 className="font-playfair font-semibold text-lg text-wine mb-2">
              Especialização
            </h3>
            <p className="text-gray-600">
              Especialistas em regimes especiais de ICMS
            </p>
          </div>

          <div className="text-center p-6 bg-gold-50 rounded-xl hover:bg-gold-100 transition-colors duration-300">
            <div className="bg-gold-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Handshake className="text-white" size={24} />
            </div>
            <h3 className="font-playfair font-semibold text-lg text-wine mb-2">
              Parceria
            </h3>
            <p className="text-gray-600">
              Relacionamento próximo e consultivo com nossos clientes
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center bg-gradient-to-r from-wine to-wine-600 rounded-2xl p-12">
          <h3 className="text-3xl font-playfair font-bold text-white mb-6">
            Nossa Missão
          </h3>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed text-gray-700">
            Na V&S, não oferecemos apenas serviços — entregamos soluções que impulsionam negócios. 
            Combinamos excelência técnica com atendimento consultivo para transformar desafios 
            empresariais em oportunidades de crescimento.
          </p>
        </div>
      </div>
    </section>;
};

