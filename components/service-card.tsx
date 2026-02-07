"use client"

import {
  Pill,
  ShoppingCart,
  UtensilsCrossed,
  Wrench,
  Lightbulb,
  Truck,
  Key,
  Shirt,
  Package,
  Scissors,
} from "lucide-react"
import type { Service } from "@/lib/app-config"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Pill,
  ShoppingCart,
  UtensilsCrossed,
  Wrench,
  Lightbulb,
  Truck,
  Key,
  Shirt,
  Package,
  Scissors,
}

interface ServiceCardProps {
  service: Service
  onRequest: (name: string) => void
}

export function ServiceCard({ service, onRequest }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon]

  return (
    <div className="group relative bg-card rounded-2xl p-4 text-center border border-foreground/5 transition-all duration-200 hover:border-primary hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]">
      {service.urgent && (
        <span className="absolute top-2 left-2 w-2 h-2 rounded-full bg-destructive animate-pulse" />
      )}
      <div className="flex justify-center mb-3">
        {IconComponent && (
          <IconComponent className="h-10 w-10 text-primary drop-shadow-[0_0_6px_rgba(0,255,136,0.6)]" />
        )}
      </div>
      <h3 className="text-sm font-bold text-foreground mb-3">{service.name}</h3>
      <button
        onClick={() => onRequest(service.name)}
        className="w-full py-2 px-3 rounded-xl bg-primary text-primary-foreground text-xs font-bold transition-all hover:brightness-110 active:scale-95"
      >
        اطلب الآن
      </button>
    </div>
  )
}
