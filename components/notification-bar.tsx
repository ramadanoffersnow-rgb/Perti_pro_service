"use client"

import { useState, useEffect } from "react"
import { X, Megaphone } from "lucide-react"

export function NotificationBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="flex items-center justify-between gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold">
      <div className="flex items-center gap-2">
        <Megaphone className="h-4 w-4 shrink-0" />
        <span>خدمة التوصيل السريع متاحة الآن - اطلب واحنا عندك!</span>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="p-1 rounded-full hover:bg-primary-foreground/20 transition-colors shrink-0"
        aria-label="إغلاق الإشعار"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
