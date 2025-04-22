import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PageSideMenuProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export function PageSideMenu({
  children,
  title,
  description,
}: PageSideMenuProps) {
  return (
    <div className="top-20 order-1 mb-8 w-full self-start sm:sticky sm:mb-0 md:order-last">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}
