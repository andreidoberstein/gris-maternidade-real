
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
              <span className="text-pastel-terracotta font-bold">Gris</span><span className="font-semibold text-gray-800"> Rolim</span>
              <p className='font-thin text-base text-gray-600'>Psicóloga Clínica</p>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-pastel-terracotta transition-colors duration-300">Início</a>
              <a href="#sobre" className="text-gray-700 hover:text-pastel-terracotta transition-colors duration-300">Sobre</a>
              <a href="#servicos" className="text-gray-700 hover:text-pastel-terracotta transition-colors duration-300">Suportes</a>
              <a href="#depoimentos" className="text-gray-700 hover:text-pastel-terracotta transition-colors duration-300">Depoimentos</a>
              <a href="#blog" className="text-gray-700 hover:text-pastel-terracotta transition-colors duration-300">Blog</a>
              <a href="#contato" className="inline-block bg-pastel-rose hover:bg-pastel-rose-dark text-white font-medium rounded-full px-6 py-2 transition-colors duration-300">
                Agendar Consulta
              </a>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pastel-terracotta hover:bg-pastel-rose-light/50 focus:outline-none"
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
            <a href="#inicio" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pastel-terracotta hover:bg-pastel-rose-light/20 rounded-md" onClick={() => setIsOpen(false)}>
              Início
            </a>
            <a href="#sobre" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pastel-terracotta hover:bg-pastel-rose-light/20 rounded-md" onClick={() => setIsOpen(false)}>
              Sobre
            </a>
            <a href="#servicos" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pastel-terracotta hover:bg-pastel-rose-light/20 rounded-md" onClick={() => setIsOpen(false)}>
              Suportes
            </a>
            <a href="#depoimentos" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pastel-terracotta hover:bg-pastel-rose-light/20 rounded-md" onClick={() => setIsOpen(false)}>
              Depoimentos
            </a>
            <a href="#blog" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pastel-terracotta hover:bg-pastel-rose-light/20 rounded-md" onClick={() => setIsOpen(false)}>
              Blog
            </a>
            <a href="#contato" className="block px-3 py-2 text-base font-medium bg-pastel-rose text-white rounded-md text-center" onClick={() => setIsOpen(false)}>
              Agendar Consulta
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
