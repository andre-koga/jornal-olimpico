"use client";

import Link from "next/link";
import {
  Award,
  BookOpen,
  Calendar,
  Clock,
  Heart,
  Home,
  Info,
  Mail,
  Medal,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
export function SiteSidebar() {
  return (
    <Sidebar
      variant="sidebar"
      collapsible="icon"
      className="border-border z-20 border-r"
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="my-2">
            <SidebarMenuButton asChild>
              <Link href="/">
                <Medal className="h-4 w-4 text-amber-400" />
                <span className="text-primary text-lg font-semibold">
                  Jornal Olimpico
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Página Inicial">
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" />
                    <span>Página Inicial</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Notícias Recentes">
                  <Link href="/noticias-recentes">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>Notícias Recentes</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Calendário">
                  <Link href="/calendario">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Calendário de Eventos</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Olimpíadas</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Matemática">
                  <Link href="/olimpiadas/matematica">
                    <Award className="mr-2 h-4 w-4" />
                    <span>Matemática (OBM)</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Física">
                  <Link href="/olimpiadas/fisica">
                    <Award className="mr-2 h-4 w-4" />
                    <span>Física (OBF)</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Química">
                  <Link href="/olimpiadas/quimica">
                    <Award className="mr-2 h-4 w-4" />
                    <span>Química (OBQ)</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Informática">
                  <Link href="/olimpiadas/informatica">
                    <Award className="mr-2 h-4 w-4" />
                    <span>Informática (OBI)</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Astronomia">
                  <Link href="/olimpiadas/astronomia">
                    <Award className="mr-2 h-4 w-4" />
                    <span>Astronomia (OBA)</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Ver Todas">
                  <Link href="/olimpiadas">
                    <Award className="mr-2 h-4 w-4" />
                    <span>Ver Todas</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Áreas de Estudo</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Matemática">
                  <Link href="/materias/matematica">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>Matemática</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Física">
                  <Link href="/materias/fisica">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>Física</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Química">
                  <Link href="/materias/quimica">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>Química</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Ver Todas">
                  <Link href="/materias">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>Ver Todas</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Sobre Nós</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Quem Somos">
                  <Link href="/quem-somos">
                    <Users className="mr-2 h-4 w-4" />
                    <span>Quem Somos</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Sobre o Projeto">
                  <Link href="/sobre">
                    <Info className="mr-2 h-4 w-4" />
                    <span>Sobre o Projeto</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Contato">
                  <Link href="/contato">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Contato</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Apoiar">
                  <Link href="/doar">
                    <Heart className="mr-2 h-4 w-4" />
                    <span>Apoiar o Projeto</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
