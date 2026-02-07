"use client"

import type { Service } from "@/lib/app-config"
import { ServiceCard } from "./service-card"

interface ServicesGridProps {
  services: Service[]
  onRequest: (name: string) => void
}

export function ServicesGrid({ services, onRequest }: ServicesGridProps) {
  if (services.length === 0) {
    return (
      <div className="text-center py-10 text-muted-foreground">
        لم يتم العثور على خدمات مطابقة
      </div>
    )
  }

  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-4 pb-6">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} onRequest={onRequest} />
      ))}
    </section>
  )
}
