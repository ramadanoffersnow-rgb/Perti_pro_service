"use client"

import { useEffect, useState } from "react"

export function IntroSection() {
  const [onlineCount] = useState(12)
  const [responseTime, setResponseTime] = useState(3.2)

  useEffect(() => {
    const interval = setInterval(() => {
      const baseTime = 3.2
      const randomExtra = Math.random() * 2
      setResponseTime(Number((baseTime + randomExtra).toFixed(1)))
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="text-center px-4 py-6">
      <div className="flex justify-center gap-3 mb-4">
        <div className="bg-card/80 px-4 py-2 rounded-full">
          <span className="text-foreground font-bold">{onlineCount}</span>
          <span className="block text-xs text-muted-foreground">
            خدمة أونلاين
          </span>
        </div>
        <div className="bg-card/80 px-4 py-2 rounded-full">
          <span className="text-foreground font-bold">{responseTime}</span>
          <span className="block text-xs text-muted-foreground">
            دقائق استجابة
          </span>
        </div>
      </div>
      <h1 className="text-xl font-bold text-foreground mb-2 text-balance">
        خدمات كتير بسرعة ومن غير تعب
      </h1>
      <p className="text-sm text-muted-foreground">
        اختار الخدمة أو استخدم البحث الصوتي
      </p>
    </section>
  )
}
