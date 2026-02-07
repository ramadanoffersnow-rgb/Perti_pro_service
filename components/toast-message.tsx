"use client"

import { useEffect } from "react"
import { CheckCircle } from "lucide-react"

interface ToastMessageProps {
  message: string
  onDismiss: () => void
}

export function ToastMessage({ message, onDismiss }: ToastMessageProps) {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 3000)
    return () => clearTimeout(timer)
  }, [onDismiss])

  if (!message) return null

  return (
    <div className="fixed bottom-28 left-1/2 -translate-x-1/2 z-[400] bg-card px-5 py-3 rounded-xl shadow-2xl border border-border flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <CheckCircle className="h-4 w-4 text-shops shrink-0" />
      <span className="text-sm font-bold text-foreground">{message}</span>
    </div>
  )
}
