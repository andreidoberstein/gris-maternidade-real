
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ArticlesList = () => {
  const articles = [
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
      image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e41",
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
    },
    {
      title: "O Papel do Pai na Construção do Vínculo com o Bebê",
      excerpt: "A importância da participação paterna desde a gestação e estratégias para fortalecer essa conexão.",
      date: "10 Abril 2025",
      image: "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7",
      category: "Paternidade",
      readTime: "7 min"
    },
    {
      title: "Culpa Materna: Como Enfrentar e Superar este Sentimento",
      excerpt: "Entenda as raízes da culpa materna e desenvolva estratégias saudáveis para lidar com ela.",
      date: "5 Abril 2025",
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba",
      category: "Autoconhecimento",
      readTime: "6 min"
    },
    {
      title: "Comunicação entre Pais e Filhos: Construindo Pontes Emocionais",
      excerpt: "Técnicas para estabelecer uma comunicação efetiva e afetuosa com crianças de diferentes idades.",
      date: "29 Março 2025",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b40",
      category: "Relacionamento",
      readTime: "8 min"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-pastel-beige/10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
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
      </div>
    </section>
  );
};

export default ArticlesList;
