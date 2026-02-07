"use client"

import { Search } from "lucide-react"

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="sticky top-[60px] z-40 px-4 py-2">
      <div className="relative">
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="ابحث عن خدمة..."
          className="w-full pr-10 pl-4 py-3 rounded-full bg-card text-foreground text-center placeholder:text-muted-foreground shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 border border-transparent focus:border-primary/30"
        />
      </div>
    </div>
  )
}
