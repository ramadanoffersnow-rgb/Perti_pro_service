function startVoice() {
  if (!('webkitSpeechRecognition' in window)) {
    showToast('المتصفح لا يدعم البحث الصوتي ❌');
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'ar-EG';
  recognition.start();

  showToast('جاري الاستماع... 🎙️');

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    showToast(`سمعتك بتقول: ${transcript}`);
    document.getElementById('quickSearch').value = transcript;
    handleQuickSearch(transcript);
  };

  recognition.onerror = function(event) {
    showToast('لم أسمعك جيداً، حاول مرة أخرى');
  };
}
