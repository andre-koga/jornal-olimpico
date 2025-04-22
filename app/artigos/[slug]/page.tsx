"use client";

import { PageHeader } from "@/components/page-header";
import { SiteLayout } from "@/components/site-layout";
import { useParams } from "next/navigation";

export default function ArticlePage() {
  const params = useParams();

  return (
    <SiteLayout>
      <div className="container mx-auto grid max-w-[95ch] grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[65ch_30ch] md:py-10">
        <PageHeader title={params.slug as string} />
      </div>
    </SiteLayout>
  );
}
