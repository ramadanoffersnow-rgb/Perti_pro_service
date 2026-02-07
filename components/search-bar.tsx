"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"
import Link from "next/link"
import { AppConfig } from "@/lib/app-config"

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [focused, setFocused] = useState(false)

  const allServices = AppConfig.categories.flatMap((cat) =>
    cat.services.map((s) => ({ ...s, categoryId: cat.id, categoryName: cat.name, categoryColor: cat.color }))
  )

  const results = query.trim()
    ? allServices.filter((s) => s.name.includes(query))
    : []

  return (
    <div className="sticky top-[61px] z-40 px-4 py-2 bg-background/95 backdrop-blur-sm">
      <div className="relative">
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
          placeholder="ابحث عن خدمة... (مثلاً: سباك، توصيل)"
          className="w-full pr-10 pl-10 py-3 rounded-xl bg-card text-foreground placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40 border border-border focus:border-primary/30 text-sm"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute left-3 top-1/2 -translate-y-1/2"
            aria-label="مسح البحث"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
        )}
      </div>

      {focused && results.length > 0 && (
        <div className="absolute left-4 right-4 top-full mt-1 bg-card rounded-xl border border-border shadow-xl max-h-64 overflow-y-auto z-50">
          {results.map((service) => (
            <Link
              key={service.id}
              href={`/category/${service.categoryId}`}
              className="flex items-center justify-between px-4 py-3 hover:bg-muted/50 transition-colors border-b border-border last:border-b-0"
            >
              <span className="text-sm font-bold text-foreground">{service.name}</span>
              <span className="text-xs text-muted-foreground">{service.categoryName}</span>
            </Link>
          ))}
        </div>
      )}

      {focused && query && results.length === 0 && (
        <div className="absolute left-4 right-4 top-full mt-1 bg-card rounded-xl border border-border shadow-xl p-4 text-center text-sm text-muted-foreground z-50">
          لم يتم العثور على خدمات مطابقة
        </div>
      )}
    </div>
  )
}
