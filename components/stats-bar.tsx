"use client"

import { useEffect, useState } from "react"
import { Users, Clock, CheckCircle } from "lucide-react"

export function StatsBar() {
  const [responseTime, setResponseTime] = useState(3)

  useEffect(() => {
    const interval = setInterval(() => {
      setResponseTime(Math.round(3 + Math.random() * 4))
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { icon: Users, value: "50+", label: "خدمة متاحة" },
    { icon: Clock, value: `${responseTime} د`, label: "وقت الاستجابة" },
    { icon: CheckCircle, value: "24/7", label: "متاح دائماً" },
  ]

  return (
    <section className="flex items-center justify-center gap-3 px-4 py-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex-1 flex flex-col items-center gap-1 bg-card rounded-xl p-3 border border-border shadow-sm"
        >
          <stat.icon className="h-5 w-5 text-primary" />
          <span className="text-lg font-bold text-foreground">{stat.value}</span>
          <span className="text-[11px] text-muted-foreground">{stat.label}</span>
        </div>
      ))}
    </section>
  )
}
