import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import { Features, Modules } from './components/ContentSections';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import { Button } from './components/UIComponents';
import { Menu, X } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-black py-12 border-t border-dark-800">
    <div className="container mx-auto px-4 text-center">
      <div className="flex items-center justify-center mb-8">
         <span className="text-2xl font-serif font-bold text-white">MasterClass<span className="text-brand-500">Pro</span></span>
      </div>
      <div className="flex justify-center gap-8 mb-8 text-sm text-gray-400">
        <a href="#" className="hover:text-brand-500 transition-colors">Termos de Uso</a>
        <a href="#" className="hover:text-brand-500 transition-colors">Política de Privacidade</a>
        <a href="#" className="hover:text-brand-500 transition-colors">Suporte</a>
      </div>
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} MasterClass Pro. Todos os direitos reservados.
      </p>
      <p className="text-gray-700 text-xs mt-2">
        Este site não faz parte do site do Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira.
      </p>
      <p className="text-gray-700 text-xs mt-6 pt-6 border-t border-dark-900/50">
        Desenvolvido por <a href="https://softsolutions.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-brand-500 transition-colors font-medium">SoftSolutions</a>
      </p>
    </div>
  </footer>
);

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/95 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-white cursor-pointer select-none">
          MasterClass<span className="text-brand-500">Pro</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">O Que Vou Aprender</a>
          <a href="#testimonials" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Depoimentos</a>
          <a href="#faq" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Dúvidas</a>
          <Button size="sm" onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}>
            Inscrever-se Agora
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-dark-900 border-b border-dark-700 md:hidden flex flex-col p-6 gap-4 shadow-2xl animate-fade-in-down">
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-brand-500 py-2">O Que Vou Aprender</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-brand-500 py-2">Depoimentos</a>
          <Button fullWidth onClick={() => { setMobileMenuOpen(false); document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'}) }}>
            Inscrever-se Agora
          </Button>
        </div>
      )}
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Modules />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;