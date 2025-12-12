import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { Button, SectionTitle } from './UIComponents';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-dark-900 relative overflow-hidden">
        {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-brand-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionTitle 
          subtitle="INVESTIMENTO"
          title="Escolha o melhor plano para você"
        />

        <div className="flex flex-col lg:flex-row gap-8 justify-center max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="flex-1 bg-dark-800 p-8 rounded-2xl border border-dark-600 flex flex-col hover:bg-dark-700 transition-colors">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Básico</h3>
            <p className="text-gray-400 text-sm mb-6">Para quem quer começar sem riscos.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">R$ 297</span>
              <span className="text-gray-500">/à vista</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-brand-500 mr-3" />
                Acesso ao Curso Completo
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-brand-500 mr-3" />
                Certificado Digital
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-brand-500 mr-3" />
                Suporte por Email
              </li>
            </ul>

            <Button variant="outline" fullWidth>Começar Agora</Button>
          </div>

          {/* Pro Plan (Highlighted) */}
          <div className="flex-1 bg-dark-900 p-8 rounded-2xl border-2 border-brand-500 relative flex flex-col transform lg:-translate-y-4 shadow-2xl shadow-brand-500/20">
            <div className="absolute top-0 right-0 left-0 bg-brand-500 text-white text-xs font-bold text-center py-1 uppercase tracking-wider rounded-t-lg">
                Mais Popular
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-2 mt-4">Profissional</h3>
            <p className="text-gray-400 text-sm mb-6">A experiência completa e mentoria.</p>
            <div className="mb-8">
              <div className="flex items-end gap-2">
                <span className="text-gray-500 line-through text-lg">R$ 997</span>
                <span className="text-5xl font-bold text-brand-500">R$ 497</span>
              </div>
              <span className="text-gray-400 text-sm">ou 12x de R$ 49,70</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center text-white">
                <Check className="h-5 w-5 text-brand-500 mr-3" />
                <strong>Tudo do plano Básico</strong>
              </li>
              <li className="flex items-center text-white">
                <Check className="h-5 w-5 text-brand-500 mr-3" />
                Acesso à Comunidade VIP
              </li>
              <li className="flex items-center text-white">
                <Check className="h-5 w-5 text-brand-500 mr-3" />
                Masterclasses Mensais ao Vivo
              </li>
              <li className="flex items-center text-white">
                <Check className="h-5 w-5 text-brand-500 mr-3" />
                Análise de Portfólio Individual
              </li>
              <li className="flex items-center text-white">
                <Check className="h-5 w-5 text-brand-500 mr-3" />
                Pack de Templates Editáveis
              </li>
            </ul>

            <Button variant="primary" size="lg" fullWidth withIcon>
              Quero Me Tornar Profissional
            </Button>
            
            <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-1">
                <ShieldCheck className="h-4 w-4" /> Compra 100% Segura
            </p>
          </div>

           {/* Mentorship Plan */}
           <div className="flex-1 bg-dark-800 p-8 rounded-2xl border border-dark-600 flex flex-col hover:bg-dark-700 transition-colors">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Mentoria</h3>
            <p className="text-gray-400 text-sm mb-6">Acompanhamento próximo.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">R$ 1.997</span>
              <span className="text-gray-500">/à vista</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-brand-500 mr-3" />
                Tudo do plano Profissional
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-brand-500 mr-3" />
                4 Encontros Individuais (Zoom)
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-brand-500 mr-3" />
                Acesso Vitalício + Atualizações
              </li>
            </ul>

            <Button variant="outline" fullWidth>Aplicar para Mentoria</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;