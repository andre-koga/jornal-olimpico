import { PageHeader } from "@/components/page-header";
import { PageSideMenu } from "@/components/page-sidemenu";
import { SiteLayout } from "@/components/site-layout";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function OlimpiadasPage() {
  return (
    <SiteLayout>
      <div className="container mx-auto grid max-w-[95ch] grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[65ch_30ch] md:py-10">
        <PageHeader
          title="Olimpíadas"
          description="Enciclopédia de olimpíadas brasileiras"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Olimpíada Brasileira de Matemática</CardTitle>
            </CardHeader>
          </Card>
        </div>
        <PageSideMenu
          title="Olimpíadas"
          description="Enciclopédia de olimpíadas brasileiras"
        >
          yo
        </PageSideMenu>
      </div>
    </SiteLayout>
  );
}
