import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, UserIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  olympiad: string;
  date: string;
  author: string;
  imageUrl: string;
  slug: string;
}

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
        <div className="relative h-[200px] md:h-full">
          <Image
            src={article.imageUrl || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <CardHeader>
            <div className="mb-2 flex flex-wrap gap-2">
              <Badge variant="outline">{article.category}</Badge>
              <Badge variant="secondary">{article.olympiad}</Badge>
            </div>
            <Link href={`/artigos/${article.slug}`} className="hover:underline">
              <h3 className="text-xl font-bold">{article.title}</h3>
            </Link>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{article.excerpt}</p>
          </CardContent>
          <CardFooter className="text-muted-foreground mt-auto flex flex-wrap items-center text-sm">
            <div className="mr-4 flex items-center">
              <CalendarIcon className="mr-1 h-3 w-3" />
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("pt-BR")}
              </time>
            </div>
            <div className="flex items-center">
              <UserIcon className="mr-1 h-3 w-3" />
              <span>{article.author}</span>
            </div>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
