"use client"

import { useEffect, useState } from "react"
import { AppConfig } from "@/lib/app-config"

export function Header() {
  const [currentTime, setCurrentTime] = useState("")
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    function updateTime() {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("ar-EG", { hour: "2-digit", minute: "2-digit" })
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 60000)

    function handleOnline() {
      setIsOnline(true)
    }
    function handleOffline() {
      setIsOnline(false)
    }
    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)
    setIsOnline(navigator.onLine)

    return () => {
      clearInterval(interval)
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-background/95 backdrop-blur-sm border-b border-primary/20">
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-foreground">
          {AppConfig.region}
        </span>
        <span className="text-xs text-primary">{currentTime}</span>
      </div>
      <span
        className={`text-xs px-2 py-1 rounded-full ${
          isOnline
            ? "bg-primary/20 text-primary"
            : "bg-destructive/20 text-destructive"
        }`}
      >
        {isOnline ? "متصل" : "غير متصل"}
      </span>
    </header>
  )
}
