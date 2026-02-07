export interface SubService {
  id: number
  name: string
  icon: string
  urgent?: boolean
}

export interface Category {
  id: string
  name: string
  icon: string
  color: string
  lightColor: string
  description: string
  services: SubService[]
}

export const AppConfig = {
  appName: "BertyPro",
  region: "النزهة 2 - جسر السويس",
  adminPhone: "201068992077",
  mapCenter: [30.1405, 31.3779] as [number, number],

  categories: [
    {
      id: "delivery",
      name: "توصيل ومشاوير",
      icon: "Bike",
      color: "delivery",
      lightColor: "delivery-light",
      description: "توصيل طلبات وأكل ومشاوير لأي مكان",
      services: [
        { id: 101, name: "توصيل طلبات أكل", icon: "UtensilsCrossed" },
        { id: 102, name: "توصيل طرود وشحنات", icon: "Package" },
        { id: 103, name: "مشوار خاص (سيارة)", icon: "Car" },
        { id: 104, name: "مشوار موتوسيكل", icon: "Bike" },
        { id: 105, name: "توصيل أدوية", icon: "Pill", urgent: true },
        { id: 106, name: "توصيل من السوبر ماركت", icon: "ShoppingCart" },
        { id: 107, name: "توصيل مستندات", icon: "FileText" },
        { id: 108, name: "نقل أثاث صغير", icon: "Sofa" },
        { id: 109, name: "توصيل هدايا", icon: "Gift" },
        { id: 110, name: "توصيل ملابس (مغسلة)", icon: "Shirt" },
      ],
    },
    {
      id: "maintenance",
      name: "خدمات البيت والصيانة",
      icon: "Wrench",
      color: "maintenance",
      lightColor: "maintenance-light",
      description: "سباكة وكهرباء ونجارة وتكييف وكل صيانة البيت",
      services: [
        { id: 201, name: "سباك", icon: "Wrench", urgent: true },
        { id: 202, name: "كهربائي", icon: "Zap", urgent: true },
        { id: 203, name: "نجار", icon: "Hammer" },
        { id: 204, name: "فني تكييف", icon: "Wind" },
        { id: 205, name: "دهان", icon: "Paintbrush" },
        { id: 206, name: "فني سيراميك", icon: "LayoutGrid" },
        { id: 207, name: "فني ألوميتال", icon: "Square" },
        { id: 208, name: "فني غسالات", icon: "WashingMachine" },
        { id: 209, name: "فني ثلاجات", icon: "Refrigerator" },
        { id: 210, name: "تنظيف منازل", icon: "SprayCan" },
      ],
    },
    {
      id: "emergency",
      name: "طوارئ ومساعدات عاجلة",
      icon: "Siren",
      color: "emergency",
      lightColor: "emergency-light",
      description: "خدمات طوارئ سريعة على مدار الساعة",
      services: [
        { id: 301, name: "ونش سيارات", icon: "Truck", urgent: true },
        { id: 302, name: "بنشر متنقل", icon: "CircleDot", urgent: true },
        { id: 303, name: "فتح أقفال", icon: "KeyRound", urgent: true },
        { id: 304, name: "كهربائي طوارئ", icon: "Zap", urgent: true },
        { id: 305, name: "سباك طوارئ", icon: "Wrench", urgent: true },
        { id: 306, name: "إسعاف خاص", icon: "Ambulance", urgent: true },
        { id: 307, name: "محامي طوارئ", icon: "Scale", urgent: true },
        { id: 308, name: "بطارية سيارة", icon: "Battery", urgent: true },
        { id: 309, name: "مفاتيح سيارات", icon: "Key", urgent: true },
        { id: 310, name: "نقل طوارئ", icon: "Truck", urgent: true },
      ],
    },
    {
      id: "shops",
      name: "محلات وطلبات",
      icon: "Store",
      color: "shops",
      lightColor: "shops-light",
      description: "اطلب من أي محل في المنطقة ويوصلك لحد البيت",
      services: [
        { id: 401, name: "سوبر ماركت", icon: "ShoppingCart" },
        { id: 402, name: "صيدلية", icon: "Pill" },
        { id: 403, name: "مطعم / كشري", icon: "UtensilsCrossed" },
        { id: 404, name: "خضار وفاكهة", icon: "Apple" },
        { id: 405, name: "جزار / لحوم", icon: "Beef" },
        { id: 406, name: "مخبز / فرن", icon: "CakeSlice" },
        { id: 407, name: "بقالة", icon: "ShoppingBasket" },
        { id: 408, name: "مكتبة / أدوات مدرسية", icon: "BookOpen" },
        { id: 409, name: "محل موبايلات", icon: "Smartphone" },
        { id: 410, name: "أسطوانات غاز", icon: "Flame" },
      ],
    },
    {
      id: "special",
      name: "خدمات خاصة",
      icon: "Star",
      color: "special",
      lightColor: "special-light",
      description: "خدمات متنوعة ومميزة تلبي كل احتياجاتك",
      services: [
        { id: 501, name: "كوافير منزلي", icon: "Scissors" },
        { id: 502, name: "مكوجي / كي ملابس", icon: "Shirt" },
        { id: 503, name: "مصور فوتوغرافي", icon: "Camera" },
        { id: 504, name: "مدرس خصوصي", icon: "GraduationCap" },
        { id: 505, name: "محاسب / ضرائب", icon: "Calculator" },
        { id: 506, name: "طبيب بيطري", icon: "Heart" },
        { id: 507, name: "رعاية مسنين", icon: "HandHeart" },
        { id: 508, name: "حضانة أطفال", icon: "Baby" },
        { id: 509, name: "ديكور وتصميم", icon: "PenTool" },
        { id: 510, name: "تأجير معدات", icon: "Box" },
      ],
    },
  ] as Category[],

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
