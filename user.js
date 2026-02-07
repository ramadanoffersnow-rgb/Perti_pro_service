function showUserModal() {
  document.getElementById('userModal').classList.remove('hidden');
  document.getElementById('userName').value = localStorage.getItem('userName') || '';
  document.getElementById('userPhone').value = localStorage.getItem('userPhone') || '';
  document.getElementById('userAddress').value = localStorage.getItem('userAddress') || '';
}

function hideModal(id) {
  document.getElementById(id).classList.add('hidden');
}

function saveUser() {
  const name = document.getElementById('userName').value;
  const phone = document.getElementById('userPhone').value;
  const address = document.getElementById('userAddress').value;

  if (name && phone) {
    localStorage.setItem('userName', name);
    localStorage.setItem('userPhone', phone);
    localStorage.setItem('userAddress', address);
    showToast('تم حفظ البيانات بنجاح ✅');
    hideModal('userModal');
  } else {
    showToast('الرجاء كتابة الاسم ورقم الهاتف ⚠️');
  }
}

function getUserData() {
  return {
    name: localStorage.getItem('userName') || 'عميل جديد',
    phone: localStorage.getItem('userPhone') || 'غير مسجل',
    address: localStorage.getItem('userAddress') || 'موقعي الحالي'
  };
}
