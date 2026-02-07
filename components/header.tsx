"use client"

import { useEffect, useState } from "react"
import { MapPin, User, Bell } from "lucide-react"
import { AppConfig } from "@/lib/app-config"

interface HeaderProps {
  onShowUser?: () => void
}

export function Header({ onShowUser }: HeaderProps) {
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    function handleOnline() { setIsOnline(true) }
    function handleOffline() { setIsOnline(false) }
    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)
    setIsOnline(navigator.onLine)
    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">B</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-foreground">
            {AppConfig.appName}
          </span>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span>{AppConfig.region}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span
          className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
            isOnline
              ? "bg-[hsl(142,71%,94%)] text-[hsl(142,71%,45%)]"
              : "bg-[hsl(0,84%,95%)] text-[hsl(0,84%,60%)]"
          }`}
        >
          {isOnline ? "متصل" : "غير متصل"}
        </span>
        <button
          className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center transition-colors hover:bg-border"
          aria-label="الإشعارات"
        >
          <Bell className="h-4 w-4 text-foreground" />
        </button>
        {onShowUser && (
          <button
            onClick={onShowUser}
            className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center transition-colors hover:bg-border"
            aria-label="حسابي"
          >
            <User className="h-4 w-4 text-foreground" />
          </button>
        )}
      </div>
    </header>
  )
}
