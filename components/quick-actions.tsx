"use client"

import { Mic, Zap, Phone } from "lucide-react"
import { AppConfig } from "@/lib/app-config"

interface QuickActionsProps {
  showToast: (msg: string) => void
}

export function QuickActions({ showToast }: QuickActionsProps) {
  function handleVoiceSearch() {
    if (typeof window === "undefined") return
    const SR =
      (window as unknown as Record<string, unknown>).webkitSpeechRecognition ||
      (window as unknown as Record<string, unknown>).SpeechRecognition

    if (!SR) {
      showToast("المتصفح لا يدعم البحث الصوتي")
      return
    }

    const recognition = new (SR as new () => SpeechRecognition)()
    ;(recognition as unknown as Record<string, string>).lang = "ar-EG"
    recognition.start()
    showToast("جاري الاستماع...")

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript
      showToast(`سمعتك بتقول: ${transcript}`)
    }

    recognition.onerror = () => {
      showToast("لم أسمعك، حاول تاني")
    }
  }

  function handleQuickRequest() {
    const userName = localStorage.getItem("userName") || "عميل جديد"
    const userPhone = localStorage.getItem("userPhone") || "غير مسجل"
    const msg = `طلب سريع من ${userName}\nالهاتف: ${userPhone}\nمن منطقة النزهة 2`
    window.open(
      `https://wa.me/${AppConfig.adminPhone}?text=${encodeURIComponent(msg)}`,
      "_blank"
    )
  }

  function handleEmergency() {
    if (confirm("هل أنت متأكد من الاتصال بالطوارئ (إسعاف)؟")) {
      window.location.href = "tel:123"
    }
  }

  const actions = [
    {
      icon: Zap,
      label: "طلب سريع",
      onClick: handleQuickRequest,
      color: "bg-primary text-primary-foreground",
    },
    {
      icon: Mic,
      label: "بحث صوتي",
      onClick: handleVoiceSearch,
      color: "bg-secondary text-secondary-foreground",
    },
    {
      icon: Phone,
      label: "طوارئ",
      onClick: handleEmergency,
      color: "bg-[hsl(0,84%,60%)] text-[hsl(0,0%,100%)]",
    },
  ]

  return (
    <section className="flex items-center gap-3 px-4 overflow-x-auto">
      {actions.map((action) => (
        <button
          key={action.label}
          onClick={action.onClick}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all hover:brightness-110 active:scale-95 shadow-sm ${action.color}`}
        >
          <action.icon className="h-4 w-4" />
          {action.label}
        </button>
      ))}
    </section>
  )
}
