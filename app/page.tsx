import { Suspense } from "react";

import { ArticleCard } from "@/components/article-card";
import { PageHeader } from "@/components/page-header";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArticleSidebar } from "@/components/article-sidebar";
import { Medal } from "lucide-react";

export default function HomePage() {
  return (
    <SiteLayout>
      <div className="container mx-auto grid max-w-[95ch] grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[65ch_30ch] md:py-10">
        <PageHeader
          title="Jornal Olimpico"
          description="Seu portal de notícias e recursos para olimpíadas científicas brasileiras"
        />
        <div className="order-2 max-w-prose space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">
              Artigos Recentes
            </h2>
          </div>
          <Suspense fallback={<ArticleCardSkeleton count={5} />}>
            <div className="grid gap-6">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </Suspense>
          <div className="flex justify-center">
            <Button variant="outline">Carregar mais artigos</Button>
          </div>
        </div>
        <ArticleSidebar />
      </div>
    </SiteLayout>
  );
}

function ArticleCardSkeleton({ count = 1 }: { count?: number }) {
  return (
    <>
      {Array(count)
        .fill(null)
        .map((_, i) => (
          <div key={i} className="flex flex-col space-y-3">
            <Skeleton className="h-[200px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        ))}
    </>
  );
}

// Sample data for the articles
const featuredArticles = [
  {
    id: "1",
    title: "Preparação para a OBM 2024: Dicas e Recursos",
    excerpt:
      "Confira as melhores estratégias e materiais para se preparar para a Olimpíada Brasileira de Matemática deste ano.",
    category: "Matemática",
    olympiad: "OBM",
    date: "2024-04-20",
    author: "Prof. Carlos Silva",
    imageUrl: "/placeholder.svg?height=200&width=400",
    slug: "preparacao-obm-2024",
  },
  {
    id: "2",
    title: "Resultados da OBF 2023: Análise e Destaques",
    excerpt:
      "Uma análise completa dos resultados da última Olimpíada Brasileira de Física, com destaque para os medalhistas e suas trajetórias.",
    category: "Física",
    olympiad: "OBF",
    date: "2024-04-15",
    author: "Dra. Ana Pereira",
    imageUrl: "/placeholder.svg?height=200&width=400",
    slug: "resultados-obf-2023",
  },
  {
    id: "3",
    title:
      "Como a Olimpíada de Informática Pode Abrir Portas para sua Carreira",
    excerpt:
      "Descubra como participar da OBI pode impulsionar sua carreira em tecnologia e abrir oportunidades acadêmicas e profissionais.",
    category: "Informática",
    olympiad: "OBI",
    date: "2024-04-10",
    author: "Eng. Rafael Mendes",
    imageUrl: "/placeholder.svg?height=200&width=400",
    slug: "obi-carreira-tecnologia",
  },
  {
    id: "4",
    title: "Guia Completo: Olimpíada Brasileira de Astronomia e Astronáutica",
    excerpt:
      "Tudo o que você precisa saber sobre a OBA, desde inscrições até preparação e premiações.",
    category: "Astronomia",
    olympiad: "OBA",
    date: "2024-04-05",
    author: "Prof. Marcos Oliveira",
    imageUrl: "/placeholder.svg?height=200&width=400",
    slug: "guia-oba-2024",
  },
  {
    id: "5",
    title: "Entrevista com Medalhista Internacional: O Caminho para o Sucesso",
    excerpt:
      "Conversamos com Maria Santos, medalhista de ouro na Olimpíada Internacional de Química, sobre sua jornada e dicas para novos competidores.",
    category: "Química",
    olympiad: "OBQ",
    date: "2024-04-01",
    author: "Júlia Costa",
    imageUrl: "/placeholder.svg?height=200&width=400",
    slug: "entrevista-medalhista-quimica",
  },
];
