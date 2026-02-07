"use client"

import { useState, useEffect } from "react"
import { X, User } from "lucide-react"

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
      className="fixed inset-0 z-[300] flex items-center justify-center bg-foreground/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-2xl p-6 w-[85%] max-w-md shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <User className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground">بيانات حسابك</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-muted transition-colors"
            aria-label="إغلاق"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <label className="text-xs font-bold text-muted-foreground mb-1 block">الاسم</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="الاسم الكامل"
              className="w-full px-4 py-3 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 border border-border text-sm"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-muted-foreground mb-1 block">رقم الهاتف</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="01xxxxxxxxx"
              type="tel"
              className="w-full px-4 py-3 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 border border-border text-sm"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-muted-foreground mb-1 block">العنوان (اختياري)</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="العنوان التفصيلي"
              className="w-full px-4 py-3 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 border border-border text-sm"
            />
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <button
            onClick={handleSave}
            className="flex-1 py-3 rounded-xl bg-primary text-primary-foreground font-bold transition-all hover:brightness-110 active:scale-95 text-sm"
          >
            حفظ البيانات
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl bg-muted text-muted-foreground font-bold transition-all hover:brightness-95 active:scale-95 text-sm"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  )
}
