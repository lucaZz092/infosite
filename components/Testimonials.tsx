import React from 'react';
import { SectionTitle } from './UIComponents';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Ricardo Silva",
    role: "UX Designer Senior",
    content: "O conteúdo é simplesmente transformador. Já fiz dezenas de cursos, mas a didática e a profundidade deste aqui são incomparáveis. Recuperei o investimento em 2 semanas.",
    avatar: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    name: "Amanda Costa",
    role: "Empreendedora Digital",
    content: "Eu não sabia nada de design. Precisava criar meus próprios lançamentos. Hoje, recebo elogios diários sobre a qualidade das minhas páginas. Obrigada!",
    avatar: "https://picsum.photos/100/100?random=2"
  },
  {
    id: 3,
    name: "Lucas Mendes",
    role: "Freelancer",
    content: "A seção sobre negociação mudou meu jogo. Consegui fechar um contrato de R$ 5.000 logo após aplicar a técnica ensinada no Módulo 5.",
    avatar: "https://picsum.photos/100/100?random=3"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-dark-800 border-y border-dark-700">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle 
          subtitle="DEPOIMENTOS REAIS"
          title="O que dizem nossos alunos"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-dark-900 p-8 rounded-2xl relative border border-dark-700 hover:border-brand-500 transition-colors duration-300">
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-6xl text-brand-500/10 font-serif">"</div>
              
              <p className="text-gray-300 mb-8 relative z-10 leading-relaxed italic">
                {t.content}
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full border-2 border-brand-500 object-cover"
                />
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-brand-500 text-xs font-medium uppercase">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;