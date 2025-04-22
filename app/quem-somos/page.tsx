import { PageHeader } from "@/components/page-header";
import { SiteLayout } from "@/components/site-layout";

export default function QuemSomos() {
  return (
    <SiteLayout>
      <div className="container mx-auto grid max-w-[95ch] grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[65ch_30ch] md:py-10">
        <PageHeader
          title="Quem Somos"
          description="Um pouco sobre o nosso time"
        />
      </div>
    </SiteLayout>
  );
}
