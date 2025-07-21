
import { ArrowRight, Shield, Users, Award } from 'lucide-react';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-white to-wine-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-wine leading-tight">
                Qualidade e Agilidade em 
                <span className="text-gold block">Serviços Contábeis</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Especialistas em contabilidade e regimes especiais de ICMS. 
                Atendemos todo o Brasil com excelência desde 2011.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-wine">13+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-wine">100%</div>
                <div className="text-sm text-gray-600">Brasil</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-wine">24h</div>
                <div className="text-sm text-gray-600">Atendimento</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-wine text-white px-8 py-4 rounded-lg font-semibold hover:bg-wine-600 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Fale Conosco
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-wine text-wine px-8 py-4 rounded-lg font-semibold hover:bg-wine hover:text-white transition-all duration-300"
              >
                Nossos Serviços
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6 animate-scale-in">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-wine-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-wine-100 p-3 rounded-lg">
                  <Shield className="text-wine" size={24} />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-lg text-wine mb-2">
                    Especialistas em ICMS
                  </h3>
                  <p className="text-gray-600">
                    Referência nacional em regimes especiais de ICMS e consultoria tributária estratégica.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-wine-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gold-100 p-3 rounded-lg">
                  <Users className="text-gold-700" size={24} />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-lg text-wine mb-2">
                    Atendimento Nacional
                  </h3>
                  <p className="text-gray-600">
                    Atendemos clientes em todos os estados do Brasil com dedicação e agilidade.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-wine-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-wine-100 p-3 rounded-lg">
                  <Award className="text-wine" size={24} />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-lg text-wine mb-2">
                    Excelência Técnica
                  </h3>
                  <p className="text-gray-600">
                    Profissionais altamente capacitados com ampla experiência em contabilidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
