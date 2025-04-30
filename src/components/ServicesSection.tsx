
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ServicesSection = () => {
  const services = [
    {
      title: "Terapia Pré-natal",
      description: "Preparação emocional para a chegada do bebê, trabalhando medos, inseguranças e construindo um vínculo saudável desde a gestação.",
      badge: "Gestantes"
    },
    {
      title: "Acompanhamento Pós-parto",
      description: "Suporte no puerpério, período de grandes transformações físicas e emocionais, ajudando a prevenir e tratar depressão pós-parto.",
      badge: "Puerpério"
    },
    {
      title: "Fortalecimento de Vínculo",
      description: "Orientações para estabelecer uma conexão saudável entre pais e filhos, promovendo segurança emocional e desenvolvimento infantil adequado.",
      badge: "Relacional"
    },
    {
      title: "Parentalidade Positiva",
      description: "Atendimento terapêutico para desenvolver habilidades parentais baseadas em respeito, empatia e comunicação não-violenta.",
      badge: "Educacional"
    },
    {
      title: "Terapia para Casais",
      description: "Suporte ao casal durante a transição para a parentalidade, trabalhando comunicação e divisão de responsabilidades.",
      badge: "Familiar"
    },
    {
      title: "Maternidade Real",
      description: "Espaço seguro para expressão dos desafios maternos sem julgamentos, desconstruindo padrões e aliviando a culpa materna.",
      badge: "Acolhimento"
    }
  ];

  return (
    <section id="servicos" className="bg-pastel-beige/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Suportes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Acompanhamento psicológico especializado para cada etapa da sua jornada parental, com foco no bem-estar emocional de toda a família.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white border-pastel-pink/40 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold text-gray-800">{service.title}</CardTitle>
                  <Badge variant="outline" className="bg-pastel-pink/30 text-primary-foreground border-pastel-pink">
                    {service.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6">
            Todos os suportes podem ser realizados online ou presencialmente, conforme sua preferência e necessidade.
          </p>
          <a 
            href="http://api.whatsapp.com/send?phone=5551996381477" 
            className="inline-block bg-primary hover:bg-pastel-pink-dark text-primary-foreground font-medium rounded-full px-8 py-3 transition-colors duration-300"
            target='_blank'
          >
            Agende uma Consulta
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
