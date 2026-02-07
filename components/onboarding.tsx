"use client"

import { useState, useEffect } from "react"
import { Bike, Wrench, Siren, Store, Star } from "lucide-react"

const steps = [
  {
    icon: Bike,
    title: "توصيل ومشاوير",
    description: "وصّل طلبك أو اطلب مشوار لأي مكان",
    color: "text-delivery",
    bg: "bg-delivery-light",
  },
  {
    icon: Wrench,
    title: "صيانة البيت",
    description: "سباك وكهربائي ونجار وكل اللي البيت محتاجه",
    color: "text-maintenance",
    bg: "bg-maintenance-light",
  },
  {
    icon: Siren,
    title: "طوارئ عاجلة",
    description: "خدمات طوارئ سريعة على مدار الساعة",
    color: "text-emergency",
    bg: "bg-emergency-light",
  },
]

export function Onboarding() {
  const [visible, setVisible] = useState(false)
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (!localStorage.getItem("onboarded")) {
      setVisible(true)
    }
  }, [])

  function handleNext() {
    if (step < steps.length - 1) {
      setStep(step + 1)
    } else {
      localStorage.setItem("onboarded", "yes")
      setVisible(false)
    }
  }

  function handleSkip() {
    localStorage.setItem("onboarded", "yes")
    setVisible(false)
  }

  if (!visible) return null

  const current = steps[step]

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center bg-foreground/60 backdrop-blur-sm">
      <div className="bg-card rounded-2xl p-8 w-[85%] max-w-sm text-center shadow-2xl">
        <div className={`w-16 h-16 rounded-2xl ${current.bg} flex items-center justify-center mx-auto mb-4`}>
          <current.icon className={`h-8 w-8 ${current.color}`} />
        </div>
        <h2 className="text-xl font-bold text-foreground mb-2">{current.title}</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {current.description}
        </p>

        <div className="flex items-center justify-center gap-1.5 mb-6">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === step ? "w-6 bg-primary" : "w-1.5 bg-muted"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleSkip}
            className="flex-1 py-3 rounded-xl bg-muted text-muted-foreground font-bold transition-all hover:brightness-95 active:scale-95 text-sm"
          >
            تخطي
          </button>
          <button
            onClick={handleNext}
            className="flex-1 py-3 rounded-xl bg-primary text-primary-foreground font-bold transition-all hover:brightness-110 active:scale-95 text-sm"
          >
            {step < steps.length - 1 ? "التالي" : "يلا نبدأ"}
          </button>
        </div>
      </div>
    </div>
  )
}
