"use client"

import { useState } from "react"
import { ChevronDown, Filter, Search, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ArticleToolbar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedOlympiad, setSelectedOlympiad] = useState<string | null>(null)
  const [selectedYear, setSelectedYear] = useState<string | null>(null)

  return (
    <Card className="p-4 mb-6">
      <div className="space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Pesquisar artigos..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            {/* Desktop filters */}
            <div className="hidden md:flex gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="flex gap-2">
                    <Filter className="h-4 w-4" />
                    Categoria
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
                          <CommandItem key={category} value={category} onSelect={() => setSelectedCategory(category)}>
                            {category}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="flex gap-2">
                    <Filter className="h-4 w-4" />
                    Olimpíada
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
                          <CommandItem key={olympiad} value={olympiad} onSelect={() => setSelectedOlympiad(olympiad)}>
                            {olympiad}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="flex gap-2">
                    <Filter className="h-4 w-4" />
                    Ano
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
                          <CommandItem key={year} value={year} onSelect={() => setSelectedYear(year)}>
                            {year}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            {/* Mobile filters */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Filtros
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filtros</SheetTitle>
                  <SheetDescription>Filtre os artigos por categoria, olimpíada ou ano.</SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <Tabs defaultValue="category" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="category">Categoria</TabsTrigger>
                      <TabsTrigger value="olympiad">Olimpíada</TabsTrigger>
                      <TabsTrigger value="year">Ano</TabsTrigger>
                    </TabsList>
                    <TabsContent value="category" className="mt-4 space-y-2">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "default" : "outline"}
                          className="w-full justify-start"
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </Button>
                      ))}
                    </TabsContent>
                    <TabsContent value="olympiad" className="mt-4 space-y-2">
                      {olympiads.map((olympiad) => (
                        <Button
                          key={olympiad}
                          variant={selectedOlympiad === olympiad ? "default" : "outline"}
                          className="w-full justify-start"
                          onClick={() => setSelectedOlympiad(olympiad)}
                        >
                          {olympiad}
                        </Button>
                      ))}
                    </TabsContent>
                    <TabsContent value="year" className="mt-4 space-y-2">
                      {years.map((year) => (
                        <Button
                          key={year}
                          variant={selectedYear === year ? "default" : "outline"}
                          className="w-full justify-start"
                          onClick={() => setSelectedYear(year)}
                        >
                          {year}
                        </Button>
                      ))}
                    </TabsContent>
                  </Tabs>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit">Aplicar Filtros</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Active filters */}
        {(selectedCategory || selectedOlympiad || selectedYear) && (
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm text-muted-foreground">Filtros ativos:</span>
            {selectedCategory && (
              <Button variant="secondary" size="sm" className="h-7 gap-1" onClick={() => setSelectedCategory(null)}>
                {selectedCategory}
                <span className="text-xs">×</span>
              </Button>
            )}
            {selectedOlympiad && (
              <Button variant="secondary" size="sm" className="h-7 gap-1" onClick={() => setSelectedOlympiad(null)}>
                {selectedOlympiad}
                <span className="text-xs">×</span>
              </Button>
            )}
            {selectedYear && (
              <Button variant="secondary" size="sm" className="h-7 gap-1" onClick={() => setSelectedYear(null)}>
                {selectedYear}
                <span className="text-xs">×</span>
              </Button>
            )}
            {(selectedCategory || selectedOlympiad || selectedYear) && (
              <Button
                variant="ghost"
                size="sm"
                className="h-7"
                onClick={() => {
                  setSelectedCategory(null)
                  setSelectedOlympiad(null)
                  setSelectedYear(null)
                }}
              >
                Limpar todos
              </Button>
            )}
          </div>
        )}
      </div>
    </Card>
  )
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
]

const olympiads = ["OBM", "OBF", "OBQ", "OBB", "OBI", "OBA", "OBL", "OBR", "OBNC"]

const years = ["2024", "2023", "2022", "2021", "2020"]
