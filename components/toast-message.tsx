"use client"

import { useEffect } from "react"

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
    <div className="fixed bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 z-[400] bg-background/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-2xl border border-primary/20 text-foreground text-sm font-semibold animate-in fade-in zoom-in duration-200">
      {message}
    </div>
  )
}
