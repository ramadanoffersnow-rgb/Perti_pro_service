export const AppConfig = {
  appName: "BertyPro Ultra",
  region: "النزهة 2 - جسر السويس",
  adminPhone: "201068992077",
  mapCenter: [31.3779, 30.1405] as [number, number],
  defaultLocation: [31.3779, 30.1405] as [number, number],

  services: [
    { id: 1, name: "صيدلية", icon: "Pill", type: "medical", urgent: true },
    { id: 2, name: "سوبر ماركت", icon: "ShoppingCart", type: "delivery", urgent: false },
    { id: 3, name: "كشري/مطعم", icon: "UtensilsCrossed", type: "food", urgent: false },
    { id: 4, name: "سباك", icon: "Wrench", type: "maintenance", urgent: true },
    { id: 5, name: "كهربائي", icon: "Lightbulb", type: "maintenance", urgent: true },
    { id: 6, name: "ونش انقاذ", icon: "Truck", type: "car", urgent: true },
    { id: 7, name: "مفاتيح سيارات", icon: "Key", type: "emergency", urgent: true },
    { id: 8, name: "مكوجي", icon: "Shirt", type: "laundry", urgent: false },
    { id: 9, name: "توصيل طرود", icon: "Package", type: "delivery", urgent: false },
    { id: 10, name: "كوافير منزلي", icon: "Scissors", type: "beauty", urgent: false },
  ],

  emergencyNumbers: {
    medical: "123",
    security: "122",
    fire: "180",
  },

  responses: {
    hello: "أهلاً بيك يا فندم في بيرتي برو! إزاي أقدر أساعدك؟",
    price: "الأسعار بتختلف حسب الخدمة، ممكن تختار الخدمة وهنبلغك بالتفاصيل.",
    location: "إحنا بنغطي منطقة النزهة 2 وجسر السويس بالكامل.",
    thanks: "العفو يا فندم! في خدمتك على طول",
  },
} as const

export type Service = (typeof AppConfig.services)[number]
