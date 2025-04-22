"use client";

import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { PageHeader } from "@/components/page-header";
import { SiteLayout } from "@/components/site-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getCategoryConfig } from "@/config/categories";
import { PageSideMenu } from "@/components/page-sidemenu";

// Example event data - in a real application this would come from a database
const events = [
  {
    id: 1,
    title: "Inscrições OBM",
    date: new Date(2024, 7, 15), // August 15, 2024
    category: "matemática",
    description:
      "Abertura das inscrições para a Olimpíada Brasileira de Matemática",
  },
  {
    id: 2,
    title: "Primeira Fase OBF",
    date: new Date(2024, 8, 5), // September 5, 2024
    category: "física",
    description: "Primeira fase da Olimpíada Brasileira de Física",
  },
  {
    id: 3,
    title: "Inscrições OBI",
    date: new Date(2024, 6, 20), // July 20, 2024
    category: "informática",
    description:
      "Prazo final para inscrições na Olimpíada Brasileira de Informática",
  },
  {
    id: 4,
    title: "Segunda Fase OBQ",
    date: new Date(2024, 9, 10), // October 10, 2024
    category: "química",
    description: "Prova da segunda fase da Olimpíada Brasileira de Química",
  },
  {
    id: 5,
    title: "Prova OBA",
    date: new Date(2024, 7, 25), // August 25, 2024
    category: "astronomia",
    description: "Aplicação da prova da Olimpíada Brasileira de Astronomia",
  },
];

// Sort events by date
const sortedEvents = [...events].sort(
  (a, b) => a.date.getTime() - b.date.getTime(),
);

export default function Calendario() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Filter events for the selected date if a date is selected
  const selectedDateEvents = date
    ? events.filter(
        (event) =>
          event.date.getDate() === date.getDate() &&
          event.date.getMonth() === date.getMonth() &&
          event.date.getFullYear() === date.getFullYear(),
      )
    : [];

  // Calculate days with events for the calendar
  const daysWithEvents = events.map((event) => new Date(event.date));

  return (
    <SiteLayout>
      <div className="container mx-auto grid max-w-[95ch] grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[65ch_30ch] md:py-10">
        <PageHeader
          title="Calendário de Eventos"
          description="Acompanhe as datas importantes das olimpíadas científicas"
        />
        <div className="order-2 max-w-prose space-y-6">
          <h2 className="text-2xl font-bold">Próximos Eventos</h2>
          {sortedEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>{event.title}</CardTitle>
                  <Badge
                    className={`${getCategoryConfig(event.category).color} border-0 text-white`}
                  >
                    {getCategoryConfig(event.category).label}
                  </Badge>
                </div>
                <CardDescription>
                  {format(event.date, "PPP", { locale: ptBR })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <PageSideMenu
          title="Calendário"
          description="Selecione uma data para ver os eventos"
        >
          <div className="flex justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              modifiers={{
                hasEvent: daysWithEvents,
              }}
              modifiersStyles={{
                hasEvent: {
                  fontWeight: "bold",
                  borderBottom: "2px solid var(--primary)",
                },
              }}
            />
          </div>

          {selectedDateEvents.length > 0 && (
            <div className="mt-6 space-y-4">
              <h3 className="font-medium">
                Eventos em {format(date!, "dd 'de' MMMM", { locale: ptBR })}
              </h3>
              <div className="space-y-2">
                {selectedDateEvents.map((event) => (
                  <div key={event.id} className="rounded-md border p-3">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{event.title}</p>
                      <Badge
                        className={`${getCategoryConfig(event.category).color} border-0 text-white`}
                      >
                        {getCategoryConfig(event.category).label}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </PageSideMenu>
      </div>
    </SiteLayout>
  );
}
