"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { HeaderBreadcrumb } from "@/components/header-breadcrumb";
import { headerNavigation } from "@/config/navigation";

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-10 flex w-full border-b">
      <div className="flex h-16 items-center px-2 sm:hidden sm:px-4">
        <SidebarTrigger className="mr-2">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Sidebar</span>
        </SidebarTrigger>
      </div>
      <div className="container mx-auto flex h-16 items-center px-0 sm:px-6">
        <HeaderBreadcrumb />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden items-center space-x-2 md:flex">
            {headerNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium underline-offset-4 hover:underline"
              >
                {item.title}
              </Link>
            ))}
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
