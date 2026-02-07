"use client"

import { Mic, User, Zap } from "lucide-react"

interface ActionButtonsProps {
  onVoiceSearch: () => void
  onShowUser: () => void
  onQuickRequest: () => void
}

export function ActionButtons({
  onVoiceSearch,
  onShowUser,
  onQuickRequest,
}: ActionButtonsProps) {
  return (
    <section className="flex justify-center gap-3 flex-wrap px-4 mb-6">
      <button
        onClick={onVoiceSearch}
        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-l from-purple-600 to-indigo-700 text-foreground font-bold text-sm transition-all hover:brightness-110 active:scale-95"
      >
        <Mic className="h-4 w-4" />
        بحث صوتي
      </button>
      <button
        onClick={onShowUser}
        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-card text-foreground font-bold text-sm border border-primary transition-all hover:bg-primary/10 active:scale-95"
      >
        <User className="h-4 w-4" />
        حسابي
      </button>
      <button
        onClick={onQuickRequest}
        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-card text-foreground font-bold text-sm border border-primary transition-all hover:bg-primary/10 active:scale-95"
      >
        <Zap className="h-4 w-4" />
        طلب سريع
      </button>
    </section>
  )
}
