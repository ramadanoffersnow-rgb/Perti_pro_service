"use client"

import { useState } from "react"
import { Trash2, Package } from "lucide-react"

interface Order {
  id: number
  client: string
  service: string
  status: "pending" | "done"
}

const initialOrders: Order[] = [
  { id: 1, client: "أحمد علي", service: "سباك", status: "pending" },
  { id: 2, client: "محمد حسن", service: "كهربائي", status: "pending" },
  { id: 3, client: "سارة محمود", service: "صيدلية", status: "done" },
]

export default function DashboardPage() {
  const [orders, setOrders] = useState<Order[]>(initialOrders)

  function removeOrder(id: number) {
    setOrders((prev) => prev.filter((o) => o.id !== id))
  }

  function markDone(id: number) {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status: "done" as const } : o))
    )
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <Package className="h-7 w-7 text-primary" />
        <h1 className="text-xl font-bold text-foreground">
          إدارة الطلبات الواردة
        </h1>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
          <thead>
            <tr className="border-b border-foreground/10">
              <th className="px-4 py-3 text-sm font-bold text-foreground">
                العميل
              </th>
              <th className="px-4 py-3 text-sm font-bold text-foreground">
                الخدمة
              </th>
              <th className="px-4 py-3 text-sm font-bold text-foreground">
                الحالة
              </th>
              <th className="px-4 py-3 text-sm font-bold text-foreground">
                الإجراء
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-foreground/5 last:border-b-0"
              >
                <td className="px-4 py-3 text-center text-sm text-foreground">
                  {order.client}
                </td>
                <td className="px-4 py-3 text-center text-sm text-foreground">
                  {order.service}
                </td>
                <td className="px-4 py-3 text-center">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                      order.status === "pending"
                        ? "bg-amber-500 text-background"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {order.status === "pending" ? "قيد الانتظار" : "مكتمل"}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <div className="flex items-center justify-center gap-2">
                    {order.status === "pending" && (
                      <button
                        onClick={() => markDone(order.id)}
                        className="px-3 py-1 rounded-lg bg-primary text-primary-foreground text-xs font-bold transition-all hover:brightness-110 active:scale-95"
                      >
                        تم
                      </button>
                    )}
                    <button
                      onClick={() => removeOrder(order.id)}
                      className="p-1 rounded-lg bg-destructive/20 text-destructive transition-all hover:bg-destructive/30 active:scale-95"
                      aria-label="حذف"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-8 text-center text-muted-foreground"
                >
                  لا توجد طلبات حالياً
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
