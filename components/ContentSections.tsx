import React from 'react';
import { 
  MonitorPlay, 
  Users, 
  Trophy, 
  Zap,
  BarChart,
  Globe,
  Lock,
  Smartphone
} from 'lucide-react';
import { Card, SectionTitle } from './UIComponents';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: "Metodologia Prática",
    description: "Aprenda fazendo com projetos reais que você pode adicionar ao seu portfólio imediatamente.",
    icon: MonitorPlay
  },
  {
    title: "Comunidade VIP",
    description: "Acesso exclusivo ao nosso grupo de networking com profissionais de alto nível do mercado.",
    icon: Users
  },
  {
    title: "Certificação Reconhecida",
    description: "Certificado válido em todo território nacional para impulsionar seu currículo.",
    icon: Trophy
  },
  {
    title: "Suporte Premium",
    description: "Tire suas dúvidas diretamente com os instrutores em menos de 24 horas.",
    icon: Zap
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-dark-900 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle 
          subtitle="O QUE VOCÊ VAI RECEBER"
          title="Tudo o que você precisa para decolar"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <Card key={idx} className="group hover:-translate-y-2 transition-transform duration-300">
              <div className="h-14 w-14 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6 group-hover:bg-brand-500 transition-colors duration-300">
                <feature.icon className="h-7 w-7 text-brand-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Modules: React.FC = () => {
  const modules = [
    { num: "01", title: "Fundamentos Essenciais", desc: "A base inquebrável do design moderno." },
    { num: "02", title: "Psicologia das Cores", desc: "Como influenciar decisões através do visual." },
    { num: "03", title: "Tipografia Avançada", desc: "A arte de comunicar sem dizer uma palavra." },
    { num: "04", title: "Layouts Responsivos", desc: "Adaptando sua arte para qualquer tela." },
    { num: "05", title: "Vendas e Negociação", desc: "Como cobrar 3x mais pelos seus projetos." },
    { num: "06", title: "Freelance Internacional", desc: "Ganhando em dólar morando no Brasil." },
  ];

  return (
    <section className="py-24 bg-white text-dark-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle 
              subtitle="CONTEÚDO PROGRAMÁTICO"
              title="O caminho passo-a-passo até a excelência"
              align="left"
              light={false}
            />
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Não é apenas um curso, é um mapa completo. Desenhamos a jornada de aprendizado para que você saia do zero (ou do básico) e alcance níveis profissionais de entrega em tempo recorde.
            </p>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <BarChart className="text-brand-500 h-6 w-6" />
                    <span className="font-semibold">Nível Iniciante ao Avançado</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Globe className="text-brand-500 h-6 w-6" />
                    <span className="font-semibold">Acesso Remoto 24/7</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Lock className="text-brand-500 h-6 w-6" />
                    <span className="font-semibold">Área de Membros Segura</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Smartphone className="text-brand-500 h-6 w-6" />
                    <span className="font-semibold">Assista no Celular</span>
                </div>
            </div>
          </div>

          <div className="grid gap-4">
            {modules.map((mod, idx) => (
              <div key={idx} className="flex items-start p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl hover:shadow-brand-500/10 border border-gray-100 transition-all duration-300">
                <span className="text-4xl font-serif font-bold text-gray-200 mr-6">{mod.num}</span>
                <div>
                  <h4 className="text-xl font-bold text-dark-900 mb-1">{mod.title}</h4>
                  <p className="text-gray-500 text-sm">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};