import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SiteSidebar } from "@/components/site-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

interface SiteLayoutProps {
  children: React.ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <SidebarProvider>
        <div className="flex-1 flex w-full">
          <SiteSidebar />
          <SidebarInset className="flex-1 flex flex-col min-w-0">
          <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </SidebarInset>
        </div>
        
    </SidebarProvider>
  )
}
