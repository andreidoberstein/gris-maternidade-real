
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-pastel-yellow/30 to-white pt-16 md:pt-20 lg:pt-24">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Transforme sua <span className="text-primary">jornada na maternidade</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Acolhimento psicológico especializado para mães e mulheres que desejam viver essa fase com mais confiança e tranquilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-pastel-yellow-dark text-primary-foreground font-medium rounded-full text-lg px-8 py-6">
                Agende sua Consulta
              </Button>
              <Button variant="outline" className="border-primary text-gray-700 hover:bg-pastel-yellow/20 font-medium rounded-full text-lg px-8 py-6">
                Saiba mais
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in flex justify-center">
            <div className="relative h-[500px] w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Psicóloga Gris oferecendo suporte a mães" 
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-pastel-yellow p-6 rounded-xl shadow-lg max-w-[240px]">
              <p className="text-gray-800 font-medium italic text-sm">
                "Honrando sua jornada maternal com empatia e acolhimento profissional."
              </p>
              <p className="text-primary font-semibold mt-2">— Gris</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
