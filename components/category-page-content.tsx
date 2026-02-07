"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { ArrowRight, Search, X } from "lucide-react"
import type { Category } from "@/lib/app-config"
import { AppConfig } from "@/lib/app-config"
import { SubServiceCard } from "@/components/sub-service-card"
import { ToastMessage } from "@/components/toast-message"
import { BottomNav } from "@/components/bottom-nav"

const colorClasses: Record<string, { bg: string; text: string; lightBg: string; border: string }> = {
  delivery: { bg: "bg-delivery", text: "text-delivery", lightBg: "bg-delivery-light", border: "border-delivery/30" },
  maintenance: { bg: "bg-maintenance", text: "text-maintenance", lightBg: "bg-maintenance-light", border: "border-maintenance/30" },
  emergency: { bg: "bg-emergency", text: "text-emergency", lightBg: "bg-emergency-light", border: "border-emergency/30" },
  shops: { bg: "bg-shops", text: "text-shops", lightBg: "bg-shops-light", border: "border-shops/30" },
  special: { bg: "bg-special", text: "text-special", lightBg: "bg-special-light", border: "border-special/30" },
}

interface CategoryPageContentProps {
  category: Category
}

export function CategoryPageContent({ category }: CategoryPageContentProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [toast, setToast] = useState("")
  const colors = colorClasses[category.color] || colorClasses.delivery

  const showToast = useCallback((msg: string) => {
    setToast(msg)
  }, [])

  const filteredServices = searchQuery.trim()
    ? category.services.filter((s) => s.name.includes(searchQuery))
    : category.services

  function handleRequestService(serviceName: string) {
    const userName = localStorage.getItem("userName") || "عميل"
    const userPhone = localStorage.getItem("userPhone") || "غير مسجل"
    const msg = `مرحباً، أنا ${userName}.\nالهاتف: ${userPhone}\nمحتاج خدمة: ${serviceName}\nالقسم: ${category.name}\nفي منطقة النزهة 2.`
    const url = `https://wa.me/${AppConfig.adminPhone}?text=${encodeURIComponent(msg)}`
    window.open(url, "_blank")
    showToast(`تم تحويلك لطلب ${serviceName}`)
  }

  return (
    <div className="min-h-screen pb-24">
      {/* Category Header */}
      <div className={`${colors.bg} px-4 pt-4 pb-8`}>
        <div className="flex items-center gap-3 mb-4">
          <Link
            href="/"
            className="w-9 h-9 rounded-xl bg-primary-foreground/20 flex items-center justify-center text-primary-foreground transition-colors hover:bg-primary-foreground/30"
          >
            <ArrowRight className="h-5 w-5" />
          </Link>
          <h1 className="text-xl font-bold text-primary-foreground">
            {category.name}
          </h1>
        </div>
        <p className="text-sm text-primary-foreground/80 leading-relaxed">
          {category.description}
        </p>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-xs bg-primary-foreground/20 text-primary-foreground px-3 py-1 rounded-full font-bold">
            {category.services.length} خدمة متاحة
          </span>
          {category.id === "emergency" && (
            <span className="text-xs bg-primary-foreground/30 text-primary-foreground px-3 py-1 rounded-full font-bold animate-pulse">
              متاح 24/7
            </span>
          )}
        </div>
      </div>

      {/* Search within category */}
      <div className="px-4 -mt-4">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`ابحث في ${category.name}...`}
            className="w-full pr-10 pl-10 py-3 rounded-xl bg-card text-foreground placeholder:text-muted-foreground shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/40 border border-border text-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute left-3 top-1/2 -translate-y-1/2"
              aria-label="مسح البحث"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
        </div>
      </div>

      {/* Services Grid */}
      <section className="px-4 mt-5">
        {filteredServices.length === 0 ? (
          <div className="text-center py-10 text-muted-foreground">
            لم يتم العثور على خدمات مطابقة
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredServices.map((service) => (
              <SubServiceCard
                key={service.id}
                service={service}
                categoryColor={category.color}
                onRequest={handleRequestService}
              />
            ))}
          </div>
        )}
      </section>

      <BottomNav />

      {toast && (
        <ToastMessage message={toast} onDismiss={() => setToast("")} />
      )}
    </div>
  )
}
