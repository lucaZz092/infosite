import React from 'react';
import { PlayCircle, CheckCircle2 } from 'lucide-react';
import { Button } from './UIComponents';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-dark-900 pt-20">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-900/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-500 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
              Vagas Limitadas para a Nova Turma
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-white">
              Domine a Arte do <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
                Design Digital
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
              Descubra o método passo-a-passo para criar interfaces que encantam, 
              vendem e posicionam você como uma autoridade no mercado em menos de 30 dias.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" withIcon onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}>
                Quero Garantir Minha Vaga
              </Button>
              <Button variant="outline" size="lg" className="group">
                <PlayCircle className="mr-2 h-5 w-5 group-hover:text-brand-500 transition-colors" />
                Assista ao Trailer
              </Button>
            </div>

            <div className="pt-8 flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle2 className="text-brand-500 mr-2 h-5 w-5" />
                <span>Certificado Incluso</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-brand-500 mr-2 h-5 w-5" />
                <span>Acesso Vitalício</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-brand-500 mr-2 h-5 w-5" />
                <span>7 Dias de Garantia</span>
              </div>
            </div>
          </div>

          {/* Right Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-dark-700 shadow-2xl shadow-brand-500/20 transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://picsum.photos/800/1000?grayscale" 
                 alt="Professional working" 
                 className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
               
               <div className="absolute bottom-8 left-8 right-8 bg-dark-800/90 backdrop-blur-sm p-6 rounded-xl border border-dark-600">
                 <div className="flex items-center gap-4">
                   <div className="h-12 w-12 rounded-full bg-brand-500 flex items-center justify-center text-xl font-bold">
                     4.9
                   </div>
                   <div>
                     <p className="font-bold text-white">Avaliação Média</p>
                     <div className="flex text-brand-400">★★★★★</div>
                   </div>
                   <div className="ml-auto text-right">
                     <p className="text-2xl font-bold text-white">+5k</p>
                     <p className="text-xs text-gray-400 uppercase">Alunos</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;