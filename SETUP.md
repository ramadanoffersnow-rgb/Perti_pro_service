# دليل الإعداد السريع

## 1. تنظيم الملفات

الملفات جاهزة في الهيكل الصحيح:
- ✅ `index.html` - الصفحة الرئيسية
- ✅ `css/styles.css` - التنسيقات
- ✅ `js/` - جميع ملفات JavaScript
- ✅ `data/app-config.js` - الإعدادات

## 2. المجلدات المطلوبة لإكمالها

### مجلد `assets/icons/`
يحتوي على ملف `.gitkeep` - أضف أيقونات SVG بالأسماء التالية:
- pharmacy.svg (💊)
- supermarket.svg (🛒)
- restaurant.svg (🍲)
- plumber.svg (🔧)
- electrician.svg (💡)
- tow.svg (🚜)
- keys.svg (🔑)
- laundry.svg (👕)
- delivery.svg (📦)
- barber.svg (✂️)

### مجلد `icons/`
يحتوي على ملف `.gitkeep` - أضف:
- icon-192.png
- icon-512.png

## 3. رفع المشروع على GitHub

```bash
git init
git add .
git commit -m "Initial commit - BertyPro Ultra"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```

## 4. الإعدادات المطلوبة

عدّل `data/app-config.js`:
```javascript
adminPhone: "201068992077",  // رقم واتساب الإدارة
mapCenter: [31.3779, 30.1405], // إحداثيات منطقتك
```

## 5. النشر

ارفع على استضافة تدعم HTTPS مثل:
- GitHub Pages
- Netlify
- Vercel

## 6. اختبار التطبيق

- افتح `index.html` في المتصفح
- تأكد من عمل الخدمات
- اختبر البحث الصوتي
- تأكد من اتصال WhatsApp
