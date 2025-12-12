import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SectionTitle } from './UIComponents';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: "Para quem é este curso?",
    answer: "Este curso é ideal tanto para iniciantes que nunca abriram um software de design quanto para profissionais que desejam aprimorar suas técnicas, fluxo de trabalho e aprender a precificar melhor seus projetos."
  },
  {
    question: "Quanto tempo de acesso eu tenho?",
    answer: "No plano Profissional e Mentoria, o acesso é vitalício. Você pode assistir às aulas quantas vezes quiser, no seu próprio ritmo, e ainda recebe todas as atualizações futuras sem custo adicional."
  },
  {
    question: "Preciso de um computador potente?",
    answer: "Não necessariamente. Ensinamos ferramentas que são otimizadas para rodar bem na maioria dos computadores modernos. Além disso, muitos conceitos são teóricos e aplicáveis independentemente da máquina."
  },
  {
    question: "E se eu não gostar do curso?",
    answer: "Oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você achar que o curso não é para você, basta enviar um único email e devolvemos 100% do seu investimento."
  },
  {
    question: "O certificado é reconhecido pelo MEC?",
    answer: "Este é um curso livre de aperfeiçoamento profissional. O certificado é válido em todo território nacional para fins de atualização, horas complementares em faculdades e enriquecimento curricular."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-dark-900 border-t border-dark-800">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <SectionTitle 
          subtitle="DÚVIDAS FREQUENTES"
          title="Ficou com alguma pergunta?"
        />

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`border rounded-xl transition-all duration-300 ${openIndex === index ? 'bg-dark-800 border-brand-500/50' : 'bg-transparent border-dark-700 hover:border-dark-600'}`}
            >
              <button
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-white' : 'text-gray-300'}`}>
                  {item.question}
                </span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-brand-500 flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;