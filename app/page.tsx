"use client"

import { useState, useCallback, useMemo } from "react"
import { AppConfig } from "@/lib/app-config"
import { Header } from "@/components/header"
import { NotificationBar } from "@/components/notification-bar"
import { SearchBar } from "@/components/search-bar"
import { IntroSection } from "@/components/intro-section"
import { ActionButtons } from "@/components/action-buttons"
import { ServicesGrid } from "@/components/services-grid"
import { UserModal } from "@/components/user-modal"
import { Chatbot } from "@/components/chatbot"
import { FloatingButtons } from "@/components/floating-buttons"
import { ToastMessage } from "@/components/toast-message"
import { Onboarding } from "@/components/onboarding"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [userModalOpen, setUserModalOpen] = useState(false)
  const [toast, setToast] = useState("")

  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return AppConfig.services
    return AppConfig.services.filter((s) => s.name.includes(searchQuery))
  }, [searchQuery])

  const showToast = useCallback((msg: string) => {
    setToast(msg)
  }, [])

  function handleRequestService(serviceName: string) {
    const userName = localStorage.getItem("userName") || "عميل"
    const userPhone = localStorage.getItem("userPhone") || "غير مسجل"
    const msg = `مرحباً، أنا ${userName}.\nالهاتف: ${userPhone}\nمحتاج خدمة: ${serviceName} في منطقة النزهة 2.`
    const url = `https://wa.me/${AppConfig.adminPhone}?text=${encodeURIComponent(msg)}`
    window.open(url, "_blank")
    showToast(`تم تحويلك لطلب ${serviceName}`)
  }

  function handleVoiceSearch() {
    if (typeof window === "undefined") return
    const SpeechRecognition =
      (window as unknown as Record<string, unknown>).webkitSpeechRecognition ||
      (window as unknown as Record<string, unknown>).SpeechRecognition

    if (!SpeechRecognition) {
      showToast("المتصفح لا يدعم البحث الصوتي")
      return
    }

    const recognition = new (SpeechRecognition as new () => SpeechRecognition)()
    ;(recognition as unknown as Record<string, string>).lang = "ar-EG"
    recognition.start()
    showToast("جاري الاستماع...")

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript
      showToast(`سمعتك بتقول: ${transcript}`)
      setSearchQuery(transcript)
    }

    recognition.onerror = () => {
      showToast("لم أسمعك جيداً، حاول مرة أخرى")
    }
  }

  function handleQuickRequest() {
    const userName = localStorage.getItem("userName") || "عميل جديد"
    const userPhone = localStorage.getItem("userPhone") || "غير مسجل"
    const msg = `طلب سريع من ${userName}\nالهاتف: ${userPhone}\nمن منطقة النزهة 2`
    const url = `https://wa.me/${AppConfig.adminPhone}?text=${encodeURIComponent(msg)}`
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen pb-20">
      <NotificationBar />
      <Header />
      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      <main>
        <IntroSection />
        <ActionButtons
          onVoiceSearch={handleVoiceSearch}
          onShowUser={() => setUserModalOpen(true)}
          onQuickRequest={handleQuickRequest}
        />
        <ServicesGrid
          services={filteredServices}
          onRequest={handleRequestService}
        />
      </main>

      <UserModal
        open={userModalOpen}
        onClose={() => setUserModalOpen(false)}
        onShowToast={showToast}
      />
      <Chatbot />
      <FloatingButtons />
      <Onboarding />

      {toast && (
        <ToastMessage message={toast} onDismiss={() => setToast("")} />
      )}
    </div>
  )
}
