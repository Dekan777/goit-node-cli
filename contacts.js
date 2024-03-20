const fs = require('fs/promises');
const path = require('path');

// Складаємо шлях до файлу contacts.json
const contactsPath = path.join(__dirname, 'db', 'contacts.json');

// Виводимо шлях до файлу contacts.json
console.log(contactsPath);
