"use client"

import { useState, useRef, useEffect } from "react"
import { X, Send, MessageCircle } from "lucide-react"
import { AppConfig } from "@/lib/app-config"

interface Message {
  text: string
  sender: "user" | "bot"
}

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [messages])

  function sendMessage() {
    const text = input.trim()
    if (!text) return

    setMessages((prev) => [...prev, { text, sender: "user" }])
    setInput("")

    setTimeout(() => {
      let reply = AppConfig.responses.hello
      if (text.includes("سعر") || text.includes("بكام"))
        reply = AppConfig.responses.price
      if (text.includes("مكان") || text.includes("عنوان"))
        reply = AppConfig.responses.location
      if (text.includes("شكر")) reply = AppConfig.responses.thanks
      setMessages((prev) => [...prev, { text: reply, sender: "bot" }])
    }, 500)
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-20 left-5 z-[90] w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-lg transition-all hover:brightness-110 active:scale-95"
        aria-label="فتح المحادثة"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {open && (
        <div className="fixed bottom-[85px] left-5 z-[95] w-[300px] h-[400px] bg-card rounded-2xl border border-border shadow-2xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-secondary text-secondary-foreground">
            <span className="font-bold text-sm">
              مساعد BertyPro
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-secondary-foreground/20 px-2 py-0.5 rounded-full">متصل</span>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-full hover:bg-secondary-foreground/20 transition-colors"
                aria-label="إغلاق المحادثة"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div ref={bodyRef} className="flex-1 p-3 overflow-y-auto flex flex-col gap-2 bg-muted/30">
            {messages.length === 0 && (
              <div className="text-center text-xs text-muted-foreground py-8">
                أهلاً بيك! اكتب طلبك وهنساعدك
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                  msg.sender === "bot"
                    ? "bg-card text-foreground self-start shadow-sm border border-border"
                    : "bg-primary text-primary-foreground self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 p-3 border-t border-border bg-card">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="اكتب طلبك هنا..."
              className="flex-1 px-3 py-2 rounded-lg bg-muted text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40"
            />
            <button
              onClick={sendMessage}
              className="p-2 rounded-lg bg-primary text-primary-foreground transition-all hover:brightness-110 active:scale-95"
              aria-label="إرسال"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
