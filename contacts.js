const fs = require('fs/promises');
const path = require('path');
const contactsPath = path.join(__dirname, 'db', 'contacts.json');


// Повертає масив контактів.
async function listContacts() {
    try {
        const data = await fs.readFile(contactsPath);
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}


async function getContactById(contactId) {
    // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

async function removeContact(contactId) {
    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
    // ...твій код. Повертає об'єкт доданого контакту (з id).
}









// listContacts().then(contacts => {
//     console.log(contacts);
// }).catch(error => {
//     console.error('Ошибка при чтении контактов:', error);
// });