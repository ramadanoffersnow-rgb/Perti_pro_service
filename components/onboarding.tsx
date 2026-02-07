"use client"

import { useState, useEffect } from "react"

export function Onboarding() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem("onboarded")) {
      setVisible(true)
    }
  }, [])

  function handleClose() {
    localStorage.setItem("onboarded", "yes")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="bg-card rounded-2xl p-8 w-[85%] max-w-sm text-center shadow-2xl">
        <h2 className="text-xl font-bold text-foreground mb-3">أهلاً بيك</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          BertyPro بيساعدك تطلب خدمات منطقتك بسرعة. اختار الخدمة واضغط طلب.
        </p>
        <button
          onClick={handleClose}
          className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold transition-all hover:brightness-110 active:scale-95"
        >
          تمام
        </button>
      </div>
    </div>
  )
}
