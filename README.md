# BertyPro Ultra - خدمات النزهة 2

تطبيق ويب PWA لطلب خدمات التوصيل والطوارئ والخدمات المنزلية في منطقة النزهة 2 - جسر السويس.

## هيكل المشروع

```
BertyPro/
├── index.html              # الصفحة الرئيسية (استخدم index_.html)
├── login.html              # صفحة تسجيل الدخول
├── dashboard.html          # لوحة التحكم
├── about.html              # صفحة حول التطبيق
├── privacy.html            # سياسة الخصوصية
├── manifest.json           # ملف PWA
├── sw.js                   # Service Worker
├── css/
│   └── styles.css          # (استخدم styles.css من الجذر)
├── js/
│   ├── main.js            # الملف الرئيسي
│   ├── map.js             # وظائف الخريطة
│   ├── voice.js           # البحث الصوتي
│   ├── chatbot.js         # المساعد الذكي
│   ├── request.js         # إدارة الطلبات
│   ├── user.js            # إدارة المستخدم
│   └── utils.js           # وظائف مساعدة
├── data/
│   └── app-config.js      # (استخدم appconfig.js)
├── assets/
│   └── icons/             # أيقونات SVG للخدمات
│       ├── pharmacy.svg
│       ├── supermarket.svg
│       ├── restaurant.svg
│       ├── plumber.svg
│       ├── electrician.svg
│       ├── tow.svg
│       ├── keys.svg
│       ├── laundry.svg
│       ├── delivery.svg
│       └── barber.svg
└── icons/                 # أيقونات PWA
    ├── icon-192.png
    └── icon-512.png
```

## حل مشكلة نقل المجلدات إلى GitHub

نظرًا لأن GitHub لا يدعم رفع المجلدات الفارغة، اتبع الخطوات التالية:

### 1. إنشاء ملفات SVG للأيقونات

بعد رفع المشروع، قم بإنشاء المجلدات والملفات التالية:

```bash
mkdir -p assets/icons
mkdir -p icons
```

### 2. إنشاء ملف .gitkeep

لضمان رفع المجلدات الفارغة:

```bash
touch assets/icons/.gitkeep
touch icons/.gitkeep
```

### 3. رفع أيقونات SVG

ضع ملفات SVG التالية في `assets/icons/`:
- `pharmacy.svg` - أيقونة صيدلية
- `supermarket.svg` - أيقونة سوبر ماركت
- `restaurant.svg` - أيقونة مطعم/كشري
- `plumber.svg` - أيقونة سباك
- `electrician.svg` - أيقونة كهربائي
- `tow.svg` - أيقونة ونش
- `keys.svg` - أيقونة مفاتيح
- `laundry.svg` - أيقونة مكوجي
- `delivery.svg` - أيقونة توصيل
- `barber.svg` - أيقونة كوافير

### 4. رفع أيقونات PWA

ضع الملفات التالية في `icons/`:
- `icon-192.png` - أيقونة 192×192
- `icon-512.png` - أيقونة 512×512

## تنظيم الملفات قبل الرفع

قم بترتيب الملفات كالتالي:

```bash
# نقل الملفات للمجلدات الصحيحة
mv styles.css css/styles.css
mv main.js js/main.js
mv map.js js/map.js
mv voice.js js/voice.js
mv chatbot.js js/chatbot.js
mv request.js js/request.js
mv user.js js/user.js
mv utils.js js/utils.js
mv appconfig.js data/app-config.js

# إعادة تسمية index
mv index_.html index.html
```

## المتطلبات

- متصفح حديث يدعم PWA
- اتصال إنترنت (للخريطة)
- موقع جغرافي (للخدمات القريبة)

## الإعداد

1. عدّل `data/app-config.js` وضع رقم هاتف الإدارة
2. عدّل `mapCenter` لإحداثيات منطقتك
3. ارفع الملفات على استضافة تدعم HTTPS
4. سجل Service Worker

## المميزات

- ✅ تطبيق PWA قابل للتثبيت
- ✅ دعم وضع Offline
- ✅ بحث صوتي ذكي
- ✅ خريطة تفاعلية
- ✅ مساعد محادثة AI
- ✅ تكامل WhatsApp
- ✅ نظام إشعارات
- ✅ واجهة عربية كاملة

## التطوير

الملفات الأساسية:
- `index.html` - نقطة البداية
- `js/main.js` - المنطق الرئيسي
- `data/app-config.js` - الإعدادات
- `css/styles.css` - التنسيقات

## الترخيص

جميع الحقوق محفوظة © 2025 BertyPro
