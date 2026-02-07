"use client"

import {
  Bike, Car, Package, Pill, ShoppingCart, FileText, Sofa, Gift, Shirt,
  Wrench, Zap, Hammer, Wind, Paintbrush, LayoutGrid, Square, WashingMachine,
  SprayCan,
  Truck, CircleDot, KeyRound, Key, Scale, Battery,
  UtensilsCrossed, Apple, Beef, CakeSlice, ShoppingBasket, BookOpen, Smartphone, Flame,
  Scissors, Camera, GraduationCap, Calculator, Heart, Baby, PenTool, Box,
  Ambulance, HandHeart, Refrigerator,
} from "lucide-react"
import type { SubService } from "@/lib/app-config"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bike, Car, Package, Pill, ShoppingCart, FileText, Sofa, Gift, Shirt,
  Wrench, Zap, Hammer, Wind, Paintbrush, LayoutGrid, Square, WashingMachine,
  SprayCan,
  Truck, CircleDot, KeyRound, Key, Scale, Battery,
  UtensilsCrossed, Apple, Beef, CakeSlice, ShoppingBasket, BookOpen, Smartphone, Flame,
  Scissors, Camera, GraduationCap, Calculator, Heart, Baby, PenTool, Box,
  Ambulance, HandHeart, Refrigerator,
}

const colorClasses: Record<string, { bg: string; text: string; lightBg: string; btnBg: string }> = {
  delivery: { bg: "bg-delivery", text: "text-delivery", lightBg: "bg-delivery-light", btnBg: "bg-delivery" },
  maintenance: { bg: "bg-maintenance", text: "text-maintenance", lightBg: "bg-maintenance-light", btnBg: "bg-maintenance" },
  emergency: { bg: "bg-emergency", text: "text-emergency", lightBg: "bg-emergency-light", btnBg: "bg-emergency" },
  shops: { bg: "bg-shops", text: "text-shops", lightBg: "bg-shops-light", btnBg: "bg-shops" },
  special: { bg: "bg-special", text: "text-special", lightBg: "bg-special-light", btnBg: "bg-special" },
}

interface SubServiceCardProps {
  service: SubService
  categoryColor: string
  onRequest: (name: string) => void
}

export function SubServiceCard({ service, categoryColor, onRequest }: SubServiceCardProps) {
  const IconComponent = iconMap[service.icon]
  const colors = colorClasses[categoryColor] || colorClasses.delivery

  return (
    <div className="group relative flex flex-col items-center bg-card rounded-2xl p-4 text-center border border-border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
      {service.urgent && (
        <span className="absolute top-2 left-2 text-[10px] bg-emergency-light text-emergency font-bold px-2 py-0.5 rounded-full">
          عاجل
        </span>
      )}
      <div className={`w-12 h-12 rounded-xl ${colors.lightBg} flex items-center justify-center mb-3`}>
        {IconComponent && (
          <IconComponent className={`h-6 w-6 ${colors.text}`} />
        )}
      </div>
      <h3 className="text-sm font-bold text-foreground mb-3 leading-tight">{service.name}</h3>
      <button
        onClick={() => onRequest(service.name)}
        className={`w-full py-2.5 px-3 rounded-xl ${colors.btnBg} text-primary-foreground text-xs font-bold transition-all hover:brightness-110 active:scale-95`}
      >
        اطلب الآن
      </button>
    </div>
  )
}
