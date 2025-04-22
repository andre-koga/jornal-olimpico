import {
  Award,
  BookOpen,
  Calendar,
  Heart,
  Home,
  Info,
  Mail,
  Medal,
  Users,
} from "lucide-react";

import { LucideIcon } from "lucide-react";

// Types for our navigation items
export interface NavItem {
  title: string;
  href: string;
  icon?: LucideIcon;
  tooltip?: string;
  external?: boolean;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

// Main navigation for sidebar
export const sidebarNavigation: NavGroup[] = [
  {
    title: "Navegação",
    items: [
      {
        title: "Página Inicial",
        href: "/",
        icon: Home,
        tooltip: "Página Inicial",
      },
      {
        title: "Calendário de Eventos",
        href: "/calendario",
        icon: Calendar,
        tooltip: "Calendário",
      },
    ],
  },
  {
    title: "Olimpíadas",
    items: [
      {
        title: "Matemática (OBM)",
        href: "/olimpiadas/matematica",
        icon: Award,
        tooltip: "Matemática",
      },
      {
        title: "Física (OBF)",
        href: "/olimpiadas/fisica",
        icon: Award,
        tooltip: "Física",
      },
      {
        title: "Química (OBQ)",
        href: "/olimpiadas/quimica",
        icon: Award,
        tooltip: "Química",
      },
      {
        title: "Informática (OBI)",
        href: "/olimpiadas/informatica",
        icon: Award,
        tooltip: "Informática",
      },
      {
        title: "Astronomia (OBA)",
        href: "/olimpiadas/astronomia",
        icon: Award,
        tooltip: "Astronomia",
      },
      {
        title: "Ver Todas",
        href: "/olimpiadas",
        icon: Award,
        tooltip: "Ver Todas",
      },
    ],
  },
  {
    title: "Sobre Nós",
    items: [
      {
        title: "Quem Somos",
        href: "/quem-somos",
        icon: Users,
        tooltip: "Quem Somos",
      },
      {
        title: "Sobre o Projeto",
        href: "/sobre",
        icon: Info,
        tooltip: "Sobre o Projeto",
      },
      {
        title: "Contato",
        href: "/contato",
        icon: Mail,
        tooltip: "Contato",
      },
      {
        title: "Apoiar o Projeto",
        href: "/doar",
        icon: Heart,
        tooltip: "Apoiar",
      },
    ],
  },
];

// Site header navigation items
export const headerNavigation: NavItem[] = [
  {
    title: "Olimpíadas",
    href: "/olimpiadas",
  },
  {
    title: "Recursos",
    href: "/recursos",
  },
  {
    title: "Sobre",
    href: "/sobre",
  },
  {
    title: "Contato",
    href: "/contato",
  },
];

// Footer navigation items grouped by column
export const footerNavigation: Record<string, NavItem[]> = {
  olimpiadas: [
    {
      title: "Olimpíada Brasileira de Matemática",
      href: "/olimpiadas/matematica",
    },
    {
      title: "Olimpíada Brasileira de Física",
      href: "/olimpiadas/fisica",
    },
    {
      title: "Olimpíada Brasileira de Química",
      href: "/olimpiadas/quimica",
    },
    {
      title: "Olimpíada Brasileira de Informática",
      href: "/olimpiadas/informatica",
    },
    {
      title: "Olimpíada Brasileira de Astronomia",
      href: "/olimpiadas/astronomia",
    },
    {
      title: "Ver todas",
      href: "/olimpiadas",
    },
  ],
  recursos: [
    {
      title: "Materiais de Estudo",
      href: "/materiais-estudo",
    },
    {
      title: "Provas Anteriores",
      href: "/provas-anteriores",
    },
    {
      title: "Grupos de Estudo",
      href: "/grupos-estudo",
    },
    {
      title: "Programa de Mentoria",
      href: "/mentoria",
    },
    {
      title: "Calendário de Eventos",
      href: "/calendario",
    },
  ],
  institucional: [
    {
      title: "Quem Somos",
      href: "/quem-somos",
    },
    {
      title: "Sobre o Projeto",
      href: "/sobre",
    },
    {
      title: "Contato",
      href: "/contato",
    },
    {
      title: "Apoiar o Projeto",
      href: "/doar",
    },
    {
      title: "Política de Privacidade",
      href: "/politica-privacidade",
    },
    {
      title: "Termos de Uso",
      href: "/termos-uso",
    },
  ],
};

// Logo configuration
export const siteLogo = {
  title: "Jornal Olimpico",
  href: "/",
  icon: Medal,
};
