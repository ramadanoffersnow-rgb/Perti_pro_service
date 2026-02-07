"use client"

import { Home, Search, MessageCircle, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { icon: Home, label: "الرئيسية", href: "/" },
  { icon: Search, label: "بحث", href: "/#search" },
  { icon: MessageCircle, label: "المحادثة", href: "/#chat" },
  { icon: User, label: "حسابي", href: "/#account" },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 inset-x-0 z-[100] bg-card/95 backdrop-blur-sm border-t border-border shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href === "/" && pathname === "/")
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-[10px] font-bold">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
