document.addEventListener('DOMContentLoaded', () => {
  initApp();
  updateTime();
  setInterval(updateTime, 60000);
  checkOnboarding();
});

function initApp() {
  renderServices(AppConfig.services);

  setTimeout(() => {
    document.getElementById('notificationBar').classList.remove('hidden');
  }, 3000);
}

function renderServices(servicesList) {
  const container = document.getElementById('services');
  container.innerHTML = '';

  servicesList.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = `
      <img src="assets/icons/${service.icon}.svg" class="service-icon" alt="${service.name}">
      <h3>${service.name}</h3>
      <button onclick="requestService('${service.name}')">اطلب الآن</button>
    `;
    container.appendChild(card);
  });
}

function requestService(serviceName) {
  const userName = localStorage.getItem('userName') || 'عميل';
  const msg = `مرحباً، أنا ${userName}. محتاج خدمة: ${serviceName} في منطقة النزهة 2.`;
  const url = `https://wa.me/${AppConfig.adminPhone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
  showToast(`تم تحويلك لطلب ${serviceName} ✅`);
}

function handleQuickSearch(query) {
  const filtered = AppConfig.services.filter(s => s.name.includes(query));
  renderServices(filtered);
}

function updateTime() {
  const now = new Date();
  document.getElementById('currentTime').innerText =
    now.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
}

function showUserModal() {
  document.getElementById('userModal').classList.remove('hidden');
  document.getElementById('userName').value =
    localStorage.getItem('userName') || '';
}

function hideModal(id) {
  document.getElementById(id).classList.add('hidden');
}

function saveUser() {
  const name = document.getElementById('userName').value;
  if (name) {
    localStorage.setItem('userName', name);
    showToast('تم حفظ بياناتك بنجاح');
    hideModal('userModal');
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.innerText = msg;
  toast.classList.remove('hidden');
  toast.style.opacity = 1;
  setTimeout(() => {
    toast.style.opacity = 0;
    setTimeout(() => toast.classList.add('hidden'), 300);
  }, 3000);
}

function dismissNotification() {
  document.getElementById('notificationBar').classList.add('hidden');
}

function quickEmergency(type) {
  alert(`جاري الاتصال بـ ${type === 'medical' ? 'الإسعاف' : 'النجدة'}...`);
}

function checkOnboarding() {
  if (!localStorage.getItem('onboarded')) {
    document.getElementById('onboarding').classList.remove('hidden');
  }
}

function finishOnboarding() {
  localStorage.setItem('onboarded', 'yes');
  document.getElementById('onboarding').classList.add('hidden');
}