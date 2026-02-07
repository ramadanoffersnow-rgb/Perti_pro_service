import Link from "next/link"
import { ArrowRight, Shield, MapPin, Lock } from "lucide-react"

export const metadata = {
  title: "سياسة الخصوصية - BertyPro",
  description: "سياسة الخصوصية لتطبيق BertyPro Ultra",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen px-4 py-10">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          سياسة الخصوصية
        </h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          نحن في <strong className="text-foreground">BertyPro Ultra</strong>{" "}
          نحترم خصوصيتك:
        </p>
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-start gap-3 bg-card rounded-xl p-4">
            <Shield className="h-6 w-6 text-primary mt-0.5 shrink-0" />
            <div>
              <h3 className="font-bold text-foreground mb-1">البيانات</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                نجمع الاسم ورقم الهاتف فقط لتسهيل وصول الخدمة إليك.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-card rounded-xl p-4">
            <MapPin className="h-6 w-6 text-primary mt-0.5 shrink-0" />
            <div>
              <h3 className="font-bold text-foreground mb-1">الموقع</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                نستخدم موقعك الجغرافي لتحديد أقرب فني أو مقدم خدمة متاح في
                النزهة 2.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-card rounded-xl p-4">
            <Lock className="h-6 w-6 text-primary mt-0.5 shrink-0" />
            <div>
              <h3 className="font-bold text-foreground mb-1">الأمان</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                بياناتك لا تُشارك مع أي طرف ثالث خارج نطاق تقديم الخدمة
                المطلوبة.
              </p>
            </div>
          </div>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary font-bold text-sm transition-all hover:bg-primary/10"
        >
          <ArrowRight className="h-4 w-4" />
          العودة
        </Link>
      </div>
    </div>
  )
}
