"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

export function HeaderBreadcrumb() {
  const pathname = usePathname();

  // Skip rendering breadcrumb on homepage
  if (pathname === "/") {
    return null;
  }

  // Create breadcrumb items based on current path
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  // Generate breadcrumb items
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const isLast = index === pathSegments.length - 1;

    // Format the segment for display (capitalize, replace hyphens with spaces)
    const formattedSegment = segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    return (
      <React.Fragment key={href}>
        <BreadcrumbItem>
          {isLast ? (
            <BreadcrumbPage>{formattedSegment}</BreadcrumbPage>
          ) : (
            <BreadcrumbLink asChild>
              <Link href={href}>{formattedSegment}</Link>
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {!isLast && (
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
        )}
      </React.Fragment>
    );
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Página Inicial</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathSegments.length > 0 && (
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
        )}
        {breadcrumbItems}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
