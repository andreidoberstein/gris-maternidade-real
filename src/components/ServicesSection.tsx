
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
      description: "Orientações para estabelecer uma conexão saudável entre mãe e bebê, promovendo segurança emocional e desenvolvimento infantil adequado.",
      badge: "Relacional"
    },
    {
      title: "Psicoterapia Maternal",
      description: "Atendimento terapêutico focado nas demandas específicas da maternidade, como culpa materna, burnout e retorno ao trabalho.",
      badge: "Continuado"
    },
    {
      title: "Terapia para Casais",
      description: "Suporte ao casal durante a transição para a parentalidade, trabalhando comunicação e divisão de responsabilidades.",
      badge: "Familiar"
    },
    {
      title: "Orientação Parental",
      description: "Desenvolvimento de estratégias para lidar com desafios da criação dos filhos, estabelecendo limites saudáveis e comunicação efetiva.",
      badge: "Educacional"
    }
  ];

  return (
    <section id="servicos" className="bg-pastel-gray/30 py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Serviços</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Acompanhamento psicológico especializado para cada etapa da sua jornada materna, com foco em seu bem-estar e desenvolvimento pessoal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white border-pastel-yellow/40 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold text-gray-800">{service.title}</CardTitle>
                  <Badge variant="outline" className="bg-pastel-yellow/30 text-primary-foreground border-pastel-yellow">
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
            Todos os serviços podem ser realizados online ou presencialmente, conforme sua preferência e necessidade.
          </p>
          <a 
            href="#contato" 
            className="inline-block bg-primary hover:bg-pastel-yellow-dark text-primary-foreground font-medium rounded-full px-8 py-3 transition-colors duration-300"
          >
            Agende uma Consulta
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
