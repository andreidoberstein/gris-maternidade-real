
import React from 'react';
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BlogSection = () => {
  const featuredArticles = [
    {
      title: "Maternidade Real: Desafios e Conquistas do Dia a Dia",
      excerpt: "Descubra como acolher as dificuldades da maternidade sem idealização e encontrar beleza na imperfeição.",
      date: "28 Abril 2025",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9",
      category: "Maternidade",
      readTime: "5 min"
    },
    {
      title: "Parentalidade Positiva: Criando Filhos Emocionalmente Saudáveis",
      excerpt: "Estratégias práticas para uma educação baseada em respeito, empatia e comunicação não-violenta.",
      date: "21 Abril 2025",
      // image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e41",
      image: "https://plus.unsplash.com/premium_photo-1664301720338-959704df1f29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Parentalidade",
      readTime: "8 min"
    },
    {
      title: "Depressão Pós-parto: Reconhecendo os Sinais e Buscando Ajuda",
      excerpt: "Como identificar sintomas da depressão pós-parto e a importância do acompanhamento psicológico.",
      date: "15 Abril 2025",
      image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed",
      category: "Saúde Mental",
      readTime: "10 min"
    }
  ];

  return (
    <section id="blog" className="bg-pastel-beige/20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Blog</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Artigos, dicas e reflexões sobre maternidade real e parentalidade consciente para apoiar sua jornada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <Badge className="bg-pastel-pink/70 text-primary-foreground hover:bg-pastel-pink">
                    {article.category}
                  </Badge>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 line-clamp-3">
                  {article.excerpt}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-0">
                <span className="text-sm text-gray-500">{article.date}</span>
                <a href="#" className="text-primary font-medium hover:underline">
                  Ler mais
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/blog" 
            className="inline-flex items-center text-primary hover:text-pastel-pink-dark font-medium transition-colors duration-300"
          >
            Ver todos os artigos
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
