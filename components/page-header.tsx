import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface PageHeaderProps {
  title: string;
  image?: string;
  description?: string;
}

export function PageHeader({ title, image, description }: PageHeaderProps) {
  return (
    <div className="order-first col-span-full mb-8 space-y-2">
      {image && (
        <Card className="m-0 mb-8 h-48 overflow-hidden border-0 p-0 md:h-64">
          <CardContent className="relative m-0 h-full p-0">
            <Image
              src={image}
              alt={title}
              fill
              className="z-0 object-cover object-center"
            />
            <div className="to-primary/50 absolute inset-0 z-10 bg-gradient-to-b from-transparent"></div>
          </CardContent>
        </Card>
      )}
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  );
}
