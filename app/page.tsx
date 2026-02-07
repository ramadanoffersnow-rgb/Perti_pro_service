"use client"

import { useState, useCallback } from "react"
import { AppConfig } from "@/lib/app-config"
import { Header } from "@/components/header"
import { NotificationBar } from "@/components/notification-bar"
import { SearchBar } from "@/components/search-bar"
import { DeliveryHero } from "@/components/delivery-hero"
import { StatsBar } from "@/components/stats-bar"
import { CategoryCard } from "@/components/category-card"
import { QuickActions } from "@/components/quick-actions"
import { UserModal } from "@/components/user-modal"
import { Chatbot } from "@/components/chatbot"
import { FloatingButtons } from "@/components/floating-buttons"
import { ToastMessage } from "@/components/toast-message"
import { Onboarding } from "@/components/onboarding"
import { BottomNav } from "@/components/bottom-nav"

export default function HomePage() {
  const [userModalOpen, setUserModalOpen] = useState(false)
  const [toast, setToast] = useState("")

  const showToast = useCallback((msg: string) => {
    setToast(msg)
  }, [])

  return (
    <div className="min-h-screen pb-24 bg-background">
      <NotificationBar />
      <Header onShowUser={() => setUserModalOpen(true)} />
      <SearchBar />

      <main className="flex flex-col gap-5">
        {/* Hero: Delivery is the main focus */}
        <DeliveryHero />

        {/* Stats */}
        <StatsBar />

        {/* Quick Action Buttons */}
        <QuickActions showToast={showToast} />

        {/* All 5 Category Sections */}
        <section className="px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-foreground">
              كل الأقسام
            </h2>
            <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
              {AppConfig.categories.length} أقسام رئيسية
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AppConfig.categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>
      </main>

      {/* Modals and Overlays */}
      <UserModal
        open={userModalOpen}
        onClose={() => setUserModalOpen(false)}
        onShowToast={showToast}
      />
      <Chatbot />
      <FloatingButtons />
      <Onboarding />
      <BottomNav />

      {toast && (
        <ToastMessage message={toast} onDismiss={() => setToast("")} />
      )}
    </div>
  )
}
