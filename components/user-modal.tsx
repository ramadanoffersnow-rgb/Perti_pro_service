"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface UserModalProps {
  open: boolean
  onClose: () => void
  onShowToast: (message: string) => void
}

export function UserModal({ open, onClose, onShowToast }: UserModalProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  useEffect(() => {
    if (open) {
      setName(localStorage.getItem("userName") || "")
      setPhone(localStorage.getItem("userPhone") || "")
      setAddress(localStorage.getItem("userAddress") || "")
    }
  }, [open])

  function handleSave() {
    if (name && phone) {
      localStorage.setItem("userName", name)
      localStorage.setItem("userPhone", phone)
      localStorage.setItem("userAddress", address)
      onShowToast("تم حفظ البيانات بنجاح")
      onClose()
    } else {
      onShowToast("الرجاء كتابة الاسم ورقم الهاتف")
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-2xl p-6 w-[85%] max-w-md shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-foreground">بيانات حسابك</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-accent transition-colors"
            aria-label="إغلاق"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="الاسم الكامل"
            className="w-full px-4 py-3 rounded-xl bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="01xxxxxxxxx"
            type="tel"
            className="w-full px-4 py-3 rounded-xl bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="العنوان التفصيلي (اختياري)"
            className="w-full px-4 py-3 rounded-xl bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <div className="flex gap-3 mt-5">
          <button
            onClick={handleSave}
            className="flex-1 py-3 rounded-xl bg-primary text-primary-foreground font-bold transition-all hover:brightness-110 active:scale-95"
          >
            حفظ
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl bg-muted text-muted-foreground font-bold transition-all hover:brightness-110 active:scale-95"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  )
}
