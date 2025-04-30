
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "A terapia com Gris foi fundamental para meu processo de adaptação à maternidade. Ela me ajudou a lidar com a ansiedade e a me sentir segura como mãe.",
      author: "Mariana S.",
      role: "Mãe de primeira viagem"
    },
    {
      quote: "Depois de meses lutando contra pensamentos negativos no pós-parto, encontrei na Gris o apoio que precisava. Hoje me sinto renovada e conectada com meu bebê.",
      author: "Patricia M.",
      role: "Mãe de 2 filhos"
    },
    {
      quote: "A abordagem da Gris é muito acolhedora. Ela me ajudou a processar a perda gestacional e a reconstruir minha confiança para tentar novamente.",
      author: "Fernanda L.",
      role: "Em jornada de maternidade"
    },
    {
      quote: "Como pai de primeira viagem, estava perdido em como apoiar minha esposa no pós-parto. As sessões com Gris me ajudaram a entender meu papel e a fortalecer nossa família.",
      author: "Ricardo T.",
      role: "Pai recente"
    },
    {
      quote: "Gris nos ajudou a construir uma parentalidade mais consciente e respeitosa. Aprendemos a lidar com os desafios sem perder a conexão com nossos filhos.",
      author: "Cláudia e André",
      role: "Pais de 3 crianças"
    }
  ];

  return (
    <section id="depoimentos" className="bg-pastel-cream/70">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Depoimentos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Histórias de famílias que transformaram sua experiência parental através do acompanhamento psicológico.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <Card className="bg-white border border-pastel-peach/20 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                    <CardContent className="p-8 relative">
                      <Quote className="h-10 w-10 text-pastel-rose opacity-20 absolute top-4 left-4" />
                      <div className="pt-6">
                        <p className="text-gray-700 italic mb-8">"{testimonial.quote}"</p>
                        <div className="mt-auto">
                          <p className="font-semibold text-gray-800">{testimonial.author}</p>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative inset-0 translate-y-0 mr-2 border-pastel-rose text-pastel-rose hover:bg-pastel-rose-light hover:text-pastel-rose-dark" />
              <CarouselNext className="relative inset-0 translate-y-0 ml-2 border-pastel-rose text-pastel-rose hover:bg-pastel-rose-light hover:text-pastel-rose-dark" />
            </div>
          </Carousel>
        </div>

        <div className="mt-16 max-w-2xl mx-auto bg-pastel-peach-light/40 p-8 rounded-2xl border border-pastel-peach/30">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-gray-800">Comece sua jornada de transformação hoje</h3>
          <p className="text-center text-gray-700 mb-6">
            Cada história é única, e sua experiência parental merece ser vivida com serenidade e confiança.
          </p>
          <div className="flex justify-center">
            <a 
              href="http://api.whatsapp.com/send?phone=5551996381477" 
              className="inline-block bg-pastel-rose hover:bg-pastel-rose-dark text-white font-medium rounded-full px-8 py-3 transition-colors duration-300"
            >
              Agende sua Primeira Sessão
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
