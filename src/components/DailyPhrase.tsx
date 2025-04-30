
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Book, Quote } from 'lucide-react';

interface DailyQuote {
  text: string;
  reference: string;
  inspiration: string;
}

const quotes: DailyQuote[] = [
  {
    text: "Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro.",
    reference: "Jeremias 29:11",
    inspiration: "Confie que existe um propósito maior para sua jornada materna. Você está sendo guiada mesmo nos momentos mais desafiadores."
  },
  {
    text: "Tudo posso naquele que me fortalece.",
    reference: "Filipenses 4:13",
    inspiration: "A maternidade pode parecer avassaladora, mas você tem uma força interior que surge exatamente quando mais precisa."
  },
  {
    text: "Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.",
    reference: "Josué 1:9",
    inspiration: "A coragem não é ausência de medo, mas persistir mesmo quando se está com medo. Você é mais forte do que imagina."
  },
  {
    text: "O Senhor é meu pastor, nada me faltará.",
    reference: "Salmos 23:1",
    inspiration: "Nos momentos de incerteza na jornada materna, lembre-se que você está sendo cuidada e guiada com amor."
  },
  {
    text: "Portanto, não se preocupem com o amanhã, pois o amanhã trará as suas próprias preocupações. Basta a cada dia o seu próprio mal.",
    reference: "Mateus 6:34",
    inspiration: "Viva um dia de cada vez na sua jornada de maternidade. Preocupar-se com o amanhã apenas rouba a alegria de hoje."
  }
];

const DailyPhrase = () => {
  // Get a random quote that changes daily based on the date
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  const randomQuoteIndex = dayOfYear % quotes.length;
  const dailyQuote = quotes[randomQuoteIndex];
  
  return (
    <section className="bg-gradient-to-r from-[#F5EFE6] to-[#FAF8F4]">
      <div className="section-container">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-4">
            <Book className="mr-2 text-[#E8DDCB]" />
            <h2 className="text-3xl font-semibold text-gray-800">Frase Inspiradora do Dia</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reflexões diárias para inspirar sua jornada na maternidade real e parentalidade
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 bg-white border border-[#E8DDCB]/30">
                <CardContent className="p-8 text-center relative">
                  <Quote className="text-[#E8DDCB] absolute top-4 left-4 opacity-40 w-8 h-8" />
                  <p className="text-xl md:text-2xl font-medium text-gray-700 italic mt-6">
                    "{dailyQuote.text}"
                  </p>
                  <p className="mt-4 text-gray-500 font-medium">
                    {dailyQuote.reference}
                  </p>
                  <div className="mt-4 opacity-70 text-sm">
                    Passe o mouse ou toque para ver a inspiração
                  </div>
                </CardContent>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 md:w-96 p-6 bg-white border border-[#E8DDCB]/30 shadow-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Inspiração para hoje:</h4>
              <p className="text-gray-700">{dailyQuote.inspiration}</p>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </section>
  );
};

export default DailyPhrase;
