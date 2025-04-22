"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

export function ArticleSidebar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedOlympiad, setSelectedOlympiad] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  return (
    <div className="top-20 order-1 mb-8 w-full self-start sm:sticky sm:mb-0 md:order-last">
      <Card className="p-4">
        <div className="space-y-4">
          <h3 className="font-medium">Filtrar Artigos</h3>
          <Separator />

          <div className="space-y-4">
            <div className="relative">
              <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
              <Input
                type="search"
                placeholder="Pesquisar artigos..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">Categorias</h4>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    {selectedCategory || "Selecionar categoria"}
                    <ChevronDown className="h-3 w-3 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Buscar categoria..." />
                    <CommandList>
                      <CommandEmpty>Nenhuma categoria encontrada.</CommandEmpty>
                      <CommandGroup>
                        {categories.map((category) => (
                          <CommandItem
                            key={category}
                            value={category}
                            onSelect={() => setSelectedCategory(category)}
                          >
                            {category}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">Olimpíadas</h4>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    {selectedOlympiad || "Selecionar olimpíada"}
                    <ChevronDown className="h-3 w-3 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Buscar olimpíada..." />
                    <CommandList>
                      <CommandEmpty>Nenhuma olimpíada encontrada.</CommandEmpty>
                      <CommandGroup>
                        {olympiads.map((olympiad) => (
                          <CommandItem
                            key={olympiad}
                            value={olympiad}
                            onSelect={() => setSelectedOlympiad(olympiad)}
                          >
                            {olympiad}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">Ano</h4>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    {selectedYear || "Selecionar ano"}
                    <ChevronDown className="h-3 w-3 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Buscar ano..." />
                    <CommandList>
                      <CommandEmpty>Nenhum ano encontrado.</CommandEmpty>
                      <CommandGroup>
                        {years.map((year) => (
                          <CommandItem
                            key={year}
                            value={year}
                            onSelect={() => setSelectedYear(year)}
                          >
                            {year}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            {/* Active filters */}
            {(selectedCategory || selectedOlympiad || selectedYear) && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Filtros ativos</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCategory && (
                    <Button
                      variant="secondary"
                      size="sm"
                      className="h-7 gap-1"
                      onClick={() => setSelectedCategory(null)}
                    >
                      {selectedCategory}
                      <span className="text-xs">×</span>
                    </Button>
                  )}
                  {selectedOlympiad && (
                    <Button
                      variant="secondary"
                      size="sm"
                      className="h-7 gap-1"
                      onClick={() => setSelectedOlympiad(null)}
                    >
                      {selectedOlympiad}
                      <span className="text-xs">×</span>
                    </Button>
                  )}
                  {selectedYear && (
                    <Button
                      variant="secondary"
                      size="sm"
                      className="h-7 gap-1"
                      onClick={() => setSelectedYear(null)}
                    >
                      {selectedYear}
                      <span className="text-xs">×</span>
                    </Button>
                  )}
                </div>
                {(selectedCategory || selectedOlympiad || selectedYear) && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2 w-full"
                    onClick={() => {
                      setSelectedCategory(null);
                      setSelectedOlympiad(null);
                      setSelectedYear(null);
                    }}
                  >
                    Limpar todos
                  </Button>
                )}
              </div>
            )}

            <Button className="w-full">Aplicar filtros</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

const categories = [
  "Matemática",
  "Física",
  "Química",
  "Biologia",
  "Informática",
  "Astronomia",
  "Linguística",
  "Robótica",
  "Neurociências",
];

const olympiads = [
  "OBM",
  "OBF",
  "OBQ",
  "OBB",
  "OBI",
  "OBA",
  "OBL",
  "OBR",
  "OBNC",
];

const years = ["2024", "2023", "2022", "2021", "2020"];
