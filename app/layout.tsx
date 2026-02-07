import type { Metadata, Viewport } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "BertyPro - خدمات النزهة 2 | توصيل ومشاوير وصيانة",
  description:
    "اطلب أي خدمة في النزهة 2 وجسر السويس - توصيل طلبات، مشاوير، صيانة، طوارئ، محلات وخدمات خاصة. أسرع خدمة توصيل في منطقتك.",
}

export const viewport: Viewport = {
  themeColor: "#FF6B35",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
