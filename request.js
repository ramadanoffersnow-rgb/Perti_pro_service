let selectedService = null;

function requestService(serviceName) {
  selectedService = serviceName;
  // هز الجهاز للموبايل كتأثير
  if (navigator.vibrate) navigator.vibrate(50);
  
  // نفتح الخريطة للتأكيد
  toggleMap();
  showToast(`تم اختيار ${serviceName}، حدد مكانك على الخريطة`);
}

function confirmRequest() {
  const user = getUserData();
  const service = selectedService || 'طلب عام';
  
  const msg = `
  *طلب جديد من تطبيق BertyPro* 🚀
  ---------------------------
  👤 *العميل:* ${user.name}
  📱 *الهاتف:* ${user.phone}
  📍 *العنوان المسجل:* ${user.address}
  🛠 *الخدمة المطلوبة:* ${service}
  ---------------------------
  برجاء سرعة التواصل!
  `;

  const url = `https://wa.me/${AppConfig.adminPhone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
  
  // إخفاء الخريطة بعد الطلب
  document.getElementById('mapPanel').classList.add('collapsed');
}

function quickEmergency(type) {
  const num = type === 'medical' ? '123' : '122';
  if(confirm(`هل أنت متأكد من الاتصال بالطوارئ (${type === 'medical' ? 'إسعاف' : 'نجدة'})؟`)) {
    window.location.href = `tel:${num}`;
  }
}

function openWhatsAppDefault() {
  window.open(`https://wa.me/${AppConfig.adminPhone}`, '_blank');
}
