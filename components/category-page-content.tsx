"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { ArrowRight, Search, X } from "lucide-react"
import type { Category } from "@/lib/app-config"
import { AppConfig } from "@/lib/app-config"
import { SubServiceCard } from "@/components/sub-service-card"
import { ToastMessage } from "@/components/toast-message"
import { BottomNav } from "@/components/bottom-nav"

const colorBgMap: Record<string, string> = {
  delivery: "bg-[hsl(18,100%,60%)]",
  maintenance: "bg-[hsl(199,89%,48%)]",
  emergency: "bg-[hsl(0,84%,60%)]",
  shops: "bg-[hsl(142,71%,45%)]",
  special: "bg-[hsl(43,96%,56%)]",
}

interface CategoryPageContentProps {
  category: Category
}

export function CategoryPageContent({ category }: CategoryPageContentProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [toast, setToast] = useState("")
  const bgColor = colorBgMap[category.color] || colorBgMap.delivery

  const showToast = useCallback((msg: string) => {
    setToast(msg)
  }, [])

  const filteredServices = searchQuery.trim()
    ? category.services.filter((s) => s.name.includes(searchQuery))
    : category.services

  function handleRequestService(serviceName: string) {
    const userName =
      typeof window !== "undefined"
        ? localStorage.getItem("userName") || "عميل"
        : "عميل"
    const userPhone =
      typeof window !== "undefined"
        ? localStorage.getItem("userPhone") || "غير مسجل"
        : "غير مسجل"
    const msg = `مرحبا، أنا ${userName}.\nالهاتف: ${userPhone}\nمحتاج خدمة: ${serviceName}\nالقسم: ${category.name}\nفي منطقة النزهة 2.`
    const url = `https://wa.me/${AppConfig.adminPhone}?text=${encodeURIComponent(msg)}`
    window.open(url, "_blank")
    showToast(`تم تحويلك لطلب ${serviceName}`)
  }

  return (
    <div className="min-h-screen pb-24">
      {/* Category Header */}
      <div className={`${bgColor} px-4 pt-4 pb-8 text-[hsl(0,0%,100%)]`}>
        <div className="flex items-center gap-3 mb-4">
          <Link
            href="/"
            className="w-9 h-9 rounded-xl bg-[hsl(0,0%,100%)]/20 flex items-center justify-center transition-colors hover:bg-[hsl(0,0%,100%)]/30"
          >
            <ArrowRight className="h-5 w-5" />
          </Link>
          <h1 className="text-xl font-bold">{category.name}</h1>
        </div>
        <p className="text-sm leading-relaxed opacity-80">
          {category.description}
        </p>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-xs bg-[hsl(0,0%,100%)]/20 px-3 py-1 rounded-full font-bold">
            {category.services.length} خدمة متاحة
          </span>
          {category.id === "emergency" && (
            <span className="text-xs bg-[hsl(0,0%,100%)]/30 px-3 py-1 rounded-full font-bold animate-pulse">
              متاح 24/7
            </span>
          )}
        </div>
      </div>

      {/* Search */}
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
