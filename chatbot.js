function toggleChat() {
  document.getElementById('chatbot').classList.toggle('hidden');
}

function handleChatEnter(e) {
  if (e.key === 'Enter') sendChat();
}

function sendChat() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, 'user-msg');
  input.value = '';

  // رد تلقائي بسيط
  setTimeout(() => {
    let reply = AppConfig.responses.hello;
    if (text.includes('سعر') || text.includes('بكتم')) reply = AppConfig.responses.price;
    if (text.includes('مكان') || text.includes('عنوان')) reply = AppConfig.responses.location;
    
    addMessage(reply, 'bot-msg');
  }, 500);
}

function addMessage(text, className) {
  const body = document.getElementById('chatBody');
  const div = document.createElement('div');
  div.className = `msg ${className}`;
  div.innerText = text;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
}
