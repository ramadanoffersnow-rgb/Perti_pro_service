"use client"

import Link from "next/link"
import {
  Bike,
  Wrench,
  Siren,
  Store,
  Star,
  ArrowLeft,
} from "lucide-react"
import type { Category } from "@/lib/app-config"

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Bike,
  Wrench,
  Siren,
  Store,
  Star,
}

const colorClasses: Record<string, { bg: string; text: string; lightBg: string; border: string }> = {
  delivery: {
    bg: "bg-delivery",
    text: "text-delivery",
    lightBg: "bg-delivery-light",
    border: "border-delivery/20",
  },
  maintenance: {
    bg: "bg-maintenance",
    text: "text-maintenance",
    lightBg: "bg-maintenance-light",
    border: "border-maintenance/20",
  },
  emergency: {
    bg: "bg-emergency",
    text: "text-emergency",
    lightBg: "bg-emergency-light",
    border: "border-emergency/20",
  },
  shops: {
    bg: "bg-shops",
    text: "text-shops",
    lightBg: "bg-shops-light",
    border: "border-shops/20",
  },
  special: {
    bg: "bg-special",
    text: "text-special",
    lightBg: "bg-special-light",
    border: "border-special/20",
  },
}

interface CategoryCardProps {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  const IconComponent = categoryIcons[category.icon]
  const colors = colorClasses[category.color] || colorClasses.delivery

  return (
    <Link
      href={`/category/${category.id}`}
      className={`group relative flex flex-col items-start p-5 rounded-2xl border ${colors.border} ${colors.lightBg} transition-all duration-200 hover:shadow-lg hover:-translate-y-1`}
    >
      <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-3`}>
        {IconComponent && (
          <IconComponent className="h-6 w-6 text-primary-foreground" />
        )}
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
        <div className={`flex items-center gap-1 text-xs font-bold ${colors.text} group-hover:gap-2 transition-all`}>
          <span>افتح</span>
          <ArrowLeft className="h-3 w-3" />
        </div>
      </div>
    </Link>
  )
}
