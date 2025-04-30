
import { Button } from "@/components/ui/button";
import Gris from "../assets/gris.jpg"

const HeroSection = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-pastel-peach-light/50 to-white">
      <div className="m-auto max-w-[80rem] px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl text-primary-foreground md:text-6xl font-bold leading-tight mb-6">
              Transforme sua <span className="text-pastel-terracotta">jornada na </span>maternidade
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
            Ser mãe é uma experiência intensa, feita de amor, dúvidas, alegrias e cansaço. <span className="font-bold">A maternidade real não exige perfeição</span> — pede apenas presença, escuta e verdade.
            Aqui, ofereço acolhimento psicológico especializado para mulheres que querem viver esta fase com<span className="font-bold"> mais leveza e confiança</span>, pois cuidar da tua saúde mental é essencial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">   
              <a 
                href="http://api.whatsapp.com/send?phone=5551996381477" 
                className="inline-block bg-pastel-rose hover:bg-pastel-rose-dark text-primary-foreground font-medium rounded-full text-lg px-8 py-3 transition-colors duration-300"
                target='_blank'
              >
                Agende uma Consulta
              </a>    
            </div>
          </div>
          <div className="relative animate-fade-in flex justify-center">
            <div className="relative h-[500px] w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={ Gris } 
                alt="Psicóloga Gris oferecendo suporte a mães e famílias" 
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-pastel-beige p-6 rounded-xl shadow-lg max-w-[240px]">
              <p className="text-gray-800 font-medium italic text-sm">
                "Cada história é única, cheia de verdade, e merece ser acolhida com escuta e cuidado."
              </p>
              <p className="text-primary-foreground font-semibold mt-2">— Gris</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
