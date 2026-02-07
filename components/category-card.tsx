"use client"

import Link from "next/link"
import * as LucideIcons from "lucide-react"
import { ArrowLeft } from "lucide-react"
import type { Category } from "@/lib/app-config"

function getIcon(name: string) {
  const icons = LucideIcons as unknown as Record<
    string,
    React.ComponentType<{ className?: string }>
  >
  return icons[name] || LucideIcons.CircleDot
}

const colorMap: Record<
  string,
  { bg: string; text: string; lightBg: string; border: string; iconBg: string }
> = {
  delivery: {
    bg: "bg-[hsl(18,100%,60%)]",
    text: "text-[hsl(18,100%,60%)]",
    lightBg: "bg-[hsl(18,100%,96%)]",
    border: "border-[hsl(18,100%,60%)]/20",
    iconBg: "bg-[hsl(18,100%,60%)]",
  },
  maintenance: {
    bg: "bg-[hsl(199,89%,48%)]",
    text: "text-[hsl(199,89%,48%)]",
    lightBg: "bg-[hsl(199,89%,95%)]",
    border: "border-[hsl(199,89%,48%)]/20",
    iconBg: "bg-[hsl(199,89%,48%)]",
  },
  emergency: {
    bg: "bg-[hsl(0,84%,60%)]",
    text: "text-[hsl(0,84%,60%)]",
    lightBg: "bg-[hsl(0,84%,96%)]",
    border: "border-[hsl(0,84%,60%)]/20",
    iconBg: "bg-[hsl(0,84%,60%)]",
  },
  shops: {
    bg: "bg-[hsl(142,71%,45%)]",
    text: "text-[hsl(142,71%,45%)]",
    lightBg: "bg-[hsl(142,71%,95%)]",
    border: "border-[hsl(142,71%,45%)]/20",
    iconBg: "bg-[hsl(142,71%,45%)]",
  },
  special: {
    bg: "bg-[hsl(43,96%,56%)]",
    text: "text-[hsl(43,96%,46%)]",
    lightBg: "bg-[hsl(43,96%,94%)]",
    border: "border-[hsl(43,96%,56%)]/20",
    iconBg: "bg-[hsl(43,96%,56%)]",
  },
}

interface CategoryCardProps {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  const IconComponent = getIcon(category.icon)
  const colors = colorMap[category.color] || colorMap.delivery

  return (
    <Link
      href={`/category/${category.id}`}
      className={`group relative flex flex-col items-start p-5 rounded-2xl border ${colors.border} ${colors.lightBg} transition-all duration-200 hover:shadow-lg hover:-translate-y-1`}
    >
      <div
        className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center mb-3`}
      >
        <IconComponent className="h-6 w-6 text-[hsl(0,0%,100%)]" />
      </div>
      <h3 className={`text-base font-bold ${colors.text} mb-1`}>
        {category.name}
      </h3>
      <p className="text-xs text-muted-foreground leading-relaxed mb-3">
        {category.description}
      </p>
      <div className="flex items-center justify-between w-full mt-auto">
        <span className="text-xs text-muted-foreground">
          {category.services.length} خدمة
        </span>
        <div
          className={`flex items-center gap-1 text-xs font-bold ${colors.text} group-hover:gap-2 transition-all`}
        >
          <span>افتح</span>
          <ArrowLeft className="h-3 w-3" />
        </div>
      </div>
    </Link>
  )
}
