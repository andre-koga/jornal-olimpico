"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { HeaderBreadcrumb } from "@/components/header-breadcrumb";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function SiteHeader() {
  return (
    <header className="sticky flex top-0 z-10 w-full border-b bg-background">
      <div className="flex sm:hidden h-16 items-center px-2 sm:px-4">
        <SidebarTrigger className="mr-2">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Sidebar</span>
        </SidebarTrigger>
      </div>
      <div className="container mx-auto flex h-16 items-center px-0 sm:px-4">
        <HeaderBreadcrumb />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden md:flex items-center space-x-2">
            <Link
              href="/olimpiadas"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Olimpíadas
            </Link>
            <Link
              href="/materias"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Matérias
            </Link>
            <Link
              href="/recursos"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Recursos
            </Link>
            <Link
              href="/sobre"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Sobre
            </Link>
            <Link
              href="/contato"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contato
            </Link>
          </nav>
          <ThemeSwitcher />
          <Button variant="default" size="sm" className="hidden md:flex">
            <Link href="/doar">Apoiar o Projeto</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
