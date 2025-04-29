
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-pastel-beige/70 to-white pt-16 md:pt-20 lg:pt-24">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Descubra a <span className="text-primary-foreground">maternidade real</span> e a parentalidade
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Acompanhamento psicológico especializado para mães, pais e famílias que desejam viver essa jornada com mais confiança, autenticidade e conexão.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full text-lg px-8 py-6">
                Agende sua Consulta
              </Button>
              <Button variant="outline" className="border-primary text-gray-700 hover:bg-primary/20 font-medium rounded-full text-lg px-8 py-6">
                Saiba mais
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in flex justify-center">
            <div className="relative h-[500px] w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1515621061946-eff1c2a352bd" 
                alt="Psicóloga Gris oferecendo suporte a mães e famílias" 
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-pastel-beige p-6 rounded-xl shadow-lg max-w-[240px]">
              <p className="text-gray-800 font-medium italic text-sm">
                "Honrando sua jornada parental com empatia e acolhimento profissional."
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
