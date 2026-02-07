"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export function NotificationBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold">
      <span>عروض اليوم متاحة الآن</span>
      <button
        onClick={() => setVisible(false)}
        className="p-1 rounded-full hover:bg-primary-foreground/20 transition-colors"
        aria-label="إغلاق الإشعار"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
