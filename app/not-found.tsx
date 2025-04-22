import Link from "next/link";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <SiteLayout>
      <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-16">
        <div className="flex max-w-md flex-col items-center text-center">
          <div className="bg-muted mb-6 rounded-full p-6">
            <FileQuestion className="text-primary h-16 w-16" />
          </div>
          <h1 className="mb-2 text-4xl font-bold tracking-tight">
            Página não encontrada
          </h1>
          <p className="text-muted-foreground mb-8">
            Desculpe, não conseguimos encontrar a página que você está
            procurando. Ela pode ter sido movida ou não existe mais.
          </p>
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
            <Button asChild size="lg">
              <Link href="/">Voltar para a página inicial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/olimpiadas">Explorar Olimpíadas</Link>
            </Button>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
