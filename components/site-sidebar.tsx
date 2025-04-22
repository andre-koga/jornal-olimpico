"use client";

import Link from "next/link";
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

import { sidebarNavigation, siteLogo } from "@/config/navigation";

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
              <Link href={siteLogo.href}>
                {siteLogo.icon && (
                  <siteLogo.icon className="h-4 w-4 text-amber-400" />
                )}
                <span className="text-primary text-lg font-semibold">
                  {siteLogo.title}
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {sidebarNavigation.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild tooltip={item.tooltip}>
                      <Link href={item.href}>
                        {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
