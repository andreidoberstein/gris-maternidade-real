
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
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
    }
  ];

  return (
    <section id="depoimentos" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Depoimentos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Histórias de mães que transformaram sua experiência maternal através do acompanhamento psicológico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-pastel-gray/5 border-0 shadow hover:shadow-md transition-shadow duration-300 h-full">
              <CardContent className="p-8 relative">
                <Quote className="h-10 w-10 text-pastel-yellow-dark opacity-20 absolute top-4 left-4" />
                <div className="pt-6">
                  <p className="text-gray-700 italic mb-8">"{testimonial.quote}"</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-gray-800">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto bg-pastel-yellow/20 p-8 rounded-2xl border border-pastel-yellow">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-gray-800">Comece sua jornada de transformação hoje</h3>
          <p className="text-center text-gray-700 mb-6">
            Cada história é única, e sua experiência maternal merece ser vivida com serenidade e confiança.
          </p>
          <div className="flex justify-center">
            <a 
              href="#contato" 
              className="inline-block bg-primary hover:bg-pastel-yellow-dark text-primary-foreground font-medium rounded-full px-8 py-3 transition-colors duration-300"
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
