import { 
  Calculator, 
  FileText, 
  Users, 
  Building, 
  TrendingUp, 
  Shield,
  CheckCircle
} from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Contabilidade Fiscal e Tributária",
      description: "Serviços completos de apuração e gestão tributária",
      items: [
        "Apuração e cálculo de tributos (Simples Nacional, Lucro Presumido e Lucro Real)",
        "Entrega de obrigações acessórias (DCTF, EFD-Contribuições, EFD-ICMS/IPI, DIRF)",
        "Planejamento tributário estratégico",
        "Atendimento a fiscalizações e intimações"
      ],
      color: "wine"
    },
    {
      icon: FileText,
      title: "Contabilidade Gerencial e Societária",
      description: "Relatórios gerenciais para tomada de decisão",
      items: [
        "Escrituração contábil conforme normas brasileiras (CPCs)",
        "Elaboração de balancetes e demonstrações contábeis",
        "Análise de indicadores financeiros",
        "Relatórios customizados para gestão"
      ],
      color: "gold"
    },
    {
      icon: Users,
      title: "Departamento Pessoal",
      description: "Gestão completa de recursos humanos",
      items: [
        "Admissão, demissão e manutenção de registros",
        "Cálculo de folha de pagamento e encargos",
        "Entrega de eSocial, SEFIP, CAGED, DIRF",
        "Orientação sobre legislação trabalhista"
      ],
      color: "wine"
    },
    {
      icon: Building,
      title: "Legalização de Empresas",
      description: "Abertura e regularização empresarial",
      items: [
        "Abertura, alteração e encerramento de empresas",
        "Emissão e regularização de CNPJ e inscrições",
        "Elaboração de contratos sociais",
        "Licenciamento e alvarás"
      ],
      color: "gold"
    },
    {
      icon: TrendingUp,
      title: "Consultoria Tributária e Empresarial",
      description: "Consultoria especializada para crescimento",
      items: [
        "Regimes especiais de ICMS (nossa especialidade)",
        "Reestruturação societária",
        "Análise de viabilidade econômica",
        "Apoio a decisões estratégicas"
      ],
      color: "wine"
    },
    {
      icon: Shield,
      title: "Obrigações Acessórias e SPED",
      description: "Conformidade fiscal digital",
      items: [
        "Transmissão do SPED Contábil e Fiscal",
        "Escrituração Digital (NF-e, CT-e, NFC-e)",
        "REINF, DCTFWeb, EFD-REINF",
        "Declarações anuais (ECF, ECD, DEFIS)"
      ],
      color: "gold"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-wine mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em contabilidade e consultoria empresarial para impulsionar seu negócio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`p-4 rounded-xl mb-6 w-fit ${
                service.color === 'wine' ? 'bg-wine-100' : 'bg-gold-100'
              }`}>
                <service.icon 
                  size={32} 
                  className={service.color === 'wine' ? 'text-wine' : 'text-gold-700'} 
                />
              </div>
              
              <h3 className="text-xl font-playfair font-semibold text-wine mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* MEI Section */}
        <div className="bg-gradient-to-r from-wine to-wine-600 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-700 mb-4">
                Atendimento Especializado para MEIs
              </h3>
              <p className="text-gray-700 mb-6">
                Oferecemos suporte completo para Microempreendedores Individuais 
                com foco na simplicidade e eficiência.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle size={20} className="text-gray-700" />
                <span>Formalização e regularização de MEIs</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle size={20} className="text-gray-700" />
                <span>Emissão de guias DAS</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle size={20} className="text-gray-700" />
                <span>Suporte com obrigações acessórias</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <CheckCircle size={20} className="text-gray-700" />
                <span>Migração para Simples Nacional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
