"use client"

import * as LucideIcons from "lucide-react"
import type { SubService } from "@/lib/app-config"

const colorClasses: Record<
  string,
  { text: string; lightBg: string; btnBg: string }
> = {
  delivery: {
    text: "text-[hsl(18,100%,60%)]",
    lightBg: "bg-[hsl(18,100%,95%)]",
    btnBg: "bg-[hsl(18,100%,60%)]",
  },
  maintenance: {
    text: "text-[hsl(199,89%,48%)]",
    lightBg: "bg-[hsl(199,89%,94%)]",
    btnBg: "bg-[hsl(199,89%,48%)]",
  },
  emergency: {
    text: "text-[hsl(0,84%,60%)]",
    lightBg: "bg-[hsl(0,84%,95%)]",
    btnBg: "bg-[hsl(0,84%,60%)]",
  },
  shops: {
    text: "text-[hsl(142,71%,45%)]",
    lightBg: "bg-[hsl(142,71%,94%)]",
    btnBg: "bg-[hsl(142,71%,45%)]",
  },
  special: {
    text: "text-[hsl(43,96%,56%)]",
    lightBg: "bg-[hsl(43,96%,93%)]",
    btnBg: "bg-[hsl(43,96%,56%)]",
  },
}

function getIcon(name: string) {
  const icons = LucideIcons as unknown as Record<
    string,
    React.ComponentType<{ className?: string }>
  >
  return icons[name] || LucideIcons.CircleDot
}

interface SubServiceCardProps {
  service: SubService
  categoryColor: string
  onRequest: (name: string) => void
}

export function SubServiceCard({
  service,
  categoryColor,
  onRequest,
}: SubServiceCardProps) {
  const IconComponent = getIcon(service.icon)
  const colors = colorClasses[categoryColor] || colorClasses.delivery

  return (
    <div className="group relative flex flex-col items-center bg-card rounded-2xl p-4 text-center border border-border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
      {service.urgent && (
        <span className="absolute top-2 left-2 text-[10px] bg-[hsl(0,84%,95%)] text-[hsl(0,84%,60%)] font-bold px-2 py-0.5 rounded-full">
          عاجل
        </span>
      )}
      <div
        className={`w-12 h-12 rounded-xl ${colors.lightBg} flex items-center justify-center mb-3`}
      >
        <IconComponent className={`h-6 w-6 ${colors.text}`} />
      </div>
      <h3 className="text-sm font-bold text-foreground mb-3 leading-tight">
        {service.name}
      </h3>
      <button
        onClick={() => onRequest(service.name)}
        className={`w-full py-2.5 px-3 rounded-xl ${colors.btnBg} text-[hsl(0,0%,100%)] text-xs font-bold transition-all hover:brightness-110 active:scale-95`}
      >
        اطلب الآن
      </button>
    </div>
  )
}
