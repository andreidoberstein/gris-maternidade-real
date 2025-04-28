
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 py-4 sticky top-0 w-full z-10 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-medium text-gray-900">
              <span className="text-primary">Gris</span> Maternidade
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-primary transition-colors duration-300">Início</a>
              <a href="#sobre" className="text-gray-700 hover:text-primary transition-colors duration-300">Sobre</a>
              <a href="#servicos" className="text-gray-700 hover:text-primary transition-colors duration-300">Serviços</a>
              <a href="#depoimentos" className="text-gray-700 hover:text-primary transition-colors duration-300">Depoimentos</a>
              <Button href="#contato" className="bg-pastel-yellow hover:bg-pastel-yellow-dark text-primary-foreground font-medium rounded-full">
                Agendar Consulta
              </Button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-pastel-yellow focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            <a href="#inicio" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-pastel-yellow/20 rounded-md" onClick={() => setIsOpen(false)}>
              Início
            </a>
            <a href="#sobre" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-pastel-yellow/20 rounded-md" onClick={() => setIsOpen(false)}>
              Sobre
            </a>
            <a href="#servicos" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-pastel-yellow/20 rounded-md" onClick={() => setIsOpen(false)}>
              Serviços
            </a>
            <a href="#depoimentos" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-pastel-yellow/20 rounded-md" onClick={() => setIsOpen(false)}>
              Depoimentos
            </a>
            <a href="#contato" className="block px-3 py-2 text-base font-medium bg-pastel-yellow text-primary-foreground rounded-md text-center" onClick={() => setIsOpen(false)}>
              Agendar Consulta
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
