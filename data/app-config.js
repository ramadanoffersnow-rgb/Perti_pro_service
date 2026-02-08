const AppConfig = {
  adminPhone: '201001234567',
  defaultLocation: [31.3667, 30.1290], // النزهة 2
  
  // الخدمات الخمس الرئيسية
  services: [
    {
      id: 1,
      name: 'التوصيل والطعام',
      icon: 'delivery.svg',
      color: '#FF6B6B',
      subcategories: ['كشري', 'فودكورت', 'مطاعم', 'توصيل عام']
    },
    {
      id: 2,
      name: 'الصيانة والحرفيين',
      icon: 'plumber.svg',
      color: '#4ECDC4',
      subcategories: ['سباك', 'كهربائي', 'نجار', 'دهان', 'ألومنيوم', 'أخرى']
    },
    {
      id: 3,
      name: 'الطوارئ والإنقاذ',
      icon: 'medical.svg',
      color: '#FF0000',
      subcategories: ['صيدليات', 'دكاترة', 'معامل', 'إسعافات', 'استشارات']
    },
    {
      id: 4,
      name: 'الخدمات الخاصة',
      icon: 'special.svg',
      color: '#FFD93D',
      subcategories: ['عقارات', 'إيجار', 'بيع وشراء', 'توظيف', 'إعلانات', 'أخرى']
    },
    {
      id: 5,
      name: 'خريطة تفاعلية',
      icon: 'map.svg',
      color: '#6C5CE7',
      description: 'عرض واقعي للخدمات والأماكن'
    }
  ],

  // إحداثيات المنطقة المحددة
  zone: {
    name: 'النزهة 2 - جسر السويس',
    coordinates: [
      [31.366778, 30.129037],
      [31.400042, 30.142056],
      [31.381158, 30.152516],
      [31.359266, 30.139785],
      [31.366778, 30.129037]
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = AppConfig;
}