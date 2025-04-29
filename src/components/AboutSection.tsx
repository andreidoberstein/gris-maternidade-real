
import React from 'react';
import { User, MessageSquareHeart, Smile } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="sobre" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Sobre Gris</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Psicóloga especializada em maternidade real e parentalidade, com a missão de tornar essa jornada mais autêntica, tranquila e empoderada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Psicóloga Gris" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-pastel-pink p-5 rounded-full shadow-lg">
              <span className="text-2xl font-bold text-primary-foreground">+10</span>
              <span className="block text-sm text-primary-foreground">Anos de<br/>Experiência</span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Transformando a experiência parental</h3>
            <p className="text-gray-600 mb-8">
              Olá! Sou Gris, psicóloga com formação especializada no acolhimento de mães, pais e famílias durante a jornada da parentalidade. Acredito que este momento único merece um olhar sensível e técnico, que respeite as individualidades e ofereça suporte genuíno.
            </p>
            <p className="text-gray-600 mb-8">
              Meu trabalho é pautado na escuta empática e no desenvolvimento de estratégias personalizadas para ajudar famílias a lidarem com os desafios deste período, promovendo autoconfiança, conexão e bem-estar emocional para todos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              <Card className="bg-pastel-pink/20 border-pastel-pink">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <User className="h-8 w-8 text-primary mb-4" />
                  <h4 className="font-bold text-gray-800 mb-2">Atendimento Personalizado</h4>
                  <p className="text-gray-600 text-sm">Abordagem única para cada família</p>
                </CardContent>
              </Card>

              <Card className="bg-pastel-pink/20 border-pastel-pink">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <MessageSquareHeart className="h-8 w-8 text-primary mb-4" />
                  <h4 className="font-bold text-gray-800 mb-2">Comunicação Clara</h4>
                  <p className="text-gray-600 text-sm">Diálogo aberto e acolhedor</p>
                </CardContent>
              </Card>

              <Card className="bg-pastel-pink/20 border-pastel-pink">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Smile className="h-8 w-8 text-primary mb-4" />
                  <h4 className="font-bold text-gray-800 mb-2">Ambiente Seguro</h4>
                  <p className="text-gray-600 text-sm">Espaço livre de julgamentos</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
