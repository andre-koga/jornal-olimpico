import Link from "next/link";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface SiteFooterProps {
  className?: string;
}

export function SiteFooter({ className }: SiteFooterProps) {
  return (
    <footer className={cn("w-full border-t bg-background", className)}>
      <div className="container mx-auto grid gap-8 px-4 py-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Jornal Olimpico</h3>
          <p className="text-sm text-muted-foreground">
            Seu portal de notícias e recursos para olimpíadas científicas
            brasileiras.
          </p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
                <span className="sr-only">YouTube</span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Olimpíadas</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/olimpiadas/matematica" className="hover:underline">
                Olimpíada Brasileira de Matemática
              </Link>
            </li>
            <li>
              <Link href="/olimpiadas/fisica" className="hover:underline">
                Olimpíada Brasileira de Física
              </Link>
            </li>
            <li>
              <Link href="/olimpiadas/quimica" className="hover:underline">
                Olimpíada Brasileira de Química
              </Link>
            </li>
            <li>
              <Link href="/olimpiadas/informatica" className="hover:underline">
                Olimpíada Brasileira de Informática
              </Link>
            </li>
            <li>
              <Link href="/olimpiadas/astronomia" className="hover:underline">
                Olimpíada Brasileira de Astronomia
              </Link>
            </li>
            <li>
              <Link href="/olimpiadas" className="hover:underline">
                Ver todas
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Recursos</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/materiais-estudo" className="hover:underline">
                Materiais de Estudo
              </Link>
            </li>
            <li>
              <Link href="/provas-anteriores" className="hover:underline">
                Provas Anteriores
              </Link>
            </li>
            <li>
              <Link href="/grupos-estudo" className="hover:underline">
                Grupos de Estudo
              </Link>
            </li>
            <li>
              <Link href="/mentoria" className="hover:underline">
                Programa de Mentoria
              </Link>
            </li>
            <li>
              <Link href="/calendario" className="hover:underline">
                Calendário de Eventos
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Institucional</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/quem-somos" className="hover:underline">
                Quem Somos
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="hover:underline">
                Sobre o Projeto
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:underline">
                Contato
              </Link>
            </li>
            <li>
              <Link href="/doar" className="hover:underline">
                Apoiar o Projeto
              </Link>
            </li>
            <li>
              <Link href="/politica-privacidade" className="hover:underline">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/termos-uso" className="hover:underline">
                Termos de Uso
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Jornal Olimpico. Todos os direitos
            reservados.
          </p>
          <p className="text-center text-sm text-muted-foreground md:text-right">
            Desenvolvido com ❤️ para a comunidade olímpica brasileira
          </p>
        </div>
      </div>
    </footer>
  );
}
