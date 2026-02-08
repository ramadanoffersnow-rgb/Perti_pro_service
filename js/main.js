// js/main.js

// Service Rendering
function renderServices(services) {
    const serviceContainer = document.getElementById('service-container');
    services.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.className = 'service';
        serviceElement.innerHTML = `<h3>${service.title}</h3><p>${service.description}</p>`;
        serviceContainer.appendChild(serviceElement);
    });
}

// User Data Management
let currentUser = null;

function login(username, password) {
    // Mock authentication
    currentUser = { username };
    console.log(`User ${username} logged in.`);
}

function logout() {
    currentUser = null;
    console.log('User logged out.');
}

// Voice Search
function startVoiceSearch() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.onresult = function(event) {
        const searchTerm = event.results[0][0].transcript;
        console.log('Voice search term:', searchTerm);
        // Code to handle search term...
    };
    recognition.start();
}

// Chat Functionality
const messages = [];

function sendMessage(content) {
    const message = { content, timestamp: new Date() };
    messages.push(message);
    console.log('Message sent:', content);
    // Code to update chat UI...
}

// Emergency Features
function sendEmergencyAlert() {
    // Code to send emergency alert
    console.log('Emergency alert sent!');
}

// Modal Handlers
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Sample initialization
document.addEventListener('DOMContentLoaded', () => {
    // Example services
    const services = [
        { title: 'Service 1', description: 'Description of Service 1' },
        { title: 'Service 2', description: 'Description of Service 2' }
    ];
    renderServices(services);
});
