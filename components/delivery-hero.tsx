"use client"

import { Bike, Clock, MapPin, ArrowLeft } from "lucide-react"
import Link from "next/link"

export function DeliveryHero() {
  return (
    <section className="relative mx-4 mt-4 rounded-2xl overflow-hidden bg-delivery text-primary-foreground p-6">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-8 w-24 h-24 rounded-full border-2 border-primary-foreground" />
        <div className="absolute bottom-2 right-4 w-16 h-16 rounded-full border-2 border-primary-foreground" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
            <Bike className="h-6 w-6" />
          </div>
          <span className="text-xs font-bold bg-primary-foreground/20 px-3 py-1 rounded-full">
            الأكثر طلباً
          </span>
        </div>

        <h2 className="text-2xl font-bold mb-2 text-balance">
          توصيل ومشاوير
        </h2>
        <p className="text-sm leading-relaxed opacity-90 mb-4">
          وصّل طلبك لأي مكان في النزهة 2 وجسر السويس بأسرع وقت
        </p>

        <div className="flex items-center gap-4 mb-5">
          <div className="flex items-center gap-1.5 text-xs">
            <Clock className="h-4 w-4" />
            <span>توصيل خلال 30 دقيقة</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <MapPin className="h-4 w-4" />
            <span>تغطية كاملة</span>
          </div>
        </div>

        <Link
          href="/category/delivery"
          className="inline-flex items-center gap-2 bg-primary-foreground text-delivery font-bold px-6 py-3 rounded-xl transition-all hover:brightness-110 active:scale-95 text-sm"
        >
          اطلب توصيلة دلوقتي
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
