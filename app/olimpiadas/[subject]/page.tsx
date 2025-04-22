"use client";

import { useParams } from "next/navigation";
import { SiteLayout } from "@/components/site-layout";
import { PageHeader } from "@/components/page-header";

export default function OlimpiadasSubjectPage() {
  const params = useParams();

  return (
    <SiteLayout>
      <div className="container mx-auto grid max-w-[95ch] grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[65ch_30ch] md:py-10">
        <PageHeader title={params.subject as string} />
      </div>
    </SiteLayout>
  );
}
