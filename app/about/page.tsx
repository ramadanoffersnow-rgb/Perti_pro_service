import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "من نحن - BertyPro",
  description: "المنصة الأولى لخدمة أهالي منطقة النزهة 2 وجسر السويس",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="max-w-md text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">
          BertyPro Ultra
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          نحن المنصة الأولى لخدمة أهالي منطقة النزهة 2 وجسر السويس.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          هدفنا توفير الوقت والمجهود في الوصول لأفضل الفنيين وخدمات التوصيل في
          أسرع وقت ممكن.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary font-bold text-sm transition-all hover:bg-primary/10"
        >
          <ArrowRight className="h-4 w-4" />
          العودة للرئيسية
        </Link>
      </div>
    </div>
  )
}
