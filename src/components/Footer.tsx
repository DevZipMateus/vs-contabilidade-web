
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-wine text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/17d567f2-a942-4452-b922-33eaf1b4be79.png" 
                alt="V&S Soluções Empresariais e Contabilidade" 
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-white/80 leading-relaxed">
              Especialistas em contabilidade e regimes especiais de ICMS. 
              Qualidade e agilidade em serviços contábeis desde 2011.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/80 hover:text-gold-300 transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/80 hover:text-gold-300 transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/80 hover:text-gold-300 transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white/80 hover:text-gold-300 transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Principais Serviços</h4>
            <ul className="space-y-2 text-white/80">
              <li>Contabilidade Fiscal</li>
              <li>Regimes Especiais ICMS</li>
              <li>Departamento Pessoal</li>
              <li>Consultoria Tributária</li>
              <li>Legalização de Empresas</li>
              <li>Obrigações Acessórias</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-300 mt-1" />
                <div className="text-white/80">
                  <p>Rua Presidente Kennedy, 43</p>
                  <p>Extrema - MG</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gold-300" />
                <a 
                  href="tel:35988170909" 
                  className="text-white/80 hover:text-gold-300 transition-colors"
                >
                  (35) 98817-0909
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gold-300" />
                <a 
                  href="mailto:contato@vsgestaocontabil.com.br" 
                  className="text-white/80 hover:text-gold-300 transition-colors text-sm"
                >
                  contato@vsgestaocontabil.com.br
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-gold-300 mt-1" />
                <div className="text-white/80 text-sm">
                  <p>Seg-Sex: 8h às 18h</p>
                  <p>Sáb: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm">
              © {currentYear} V&S Soluções Empresariais e Contabilidade Ltda. 
              Todos os direitos reservados.
            </p>
            <p className="text-white/60 text-sm">
              Desenvolvido com excelência para sua empresa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
