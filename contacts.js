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

// Повертає об'єкт контакту з таким id. Повертає 
//  null, якщо контакт з таким id не знайдений.
async function getContactById(contactId) {
    try {
        const contacts = await listContacts();
        return contacts.find(contact => contact.id === contactId) || null;
    } catch (error) {
        return null;
    }
}

// ...твій код. Повертає об'єкт видаленого 
//  контакту. Повертає null, якщо контакт 
//  з таким id не знайдений.
async function removeContact(contactId) {
    try {
        let contacts = await listContacts();
        const removedContact = contacts.find(contact => contact.id === contactId);
        if (!removedContact) return null;

        contacts = contacts.filter(contact => contact.id !== contactId);
        await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

        return removedContact;
    } catch (error) {
        console.error('Помилка при видаленні контакту:', error);
        return null;
    }

}

async function addContact(name, email, phone) {
    // ...твій код. Повертає об'єкт доданого контакту (з id).
}









// listContacts().then(contacts => {
//     console.log(contacts);
// }).catch(error => {
//     console.error('Ошибка при чтении контактов:', error);
// });



// const contactId = "AeHIrLTr6JkxGE6SN-0Rw";
// getContactById(contactId)
//     .then(contact => {
//         if (contact) {
//             console.log("Найден контакт:", contact);
//         } else {
//             console.log("Контакт с id", contactId, "не найден.");
//         }
//     })
//     .catch(error => {
//         console.error("Произошла ошибка при поиске контакта:", error);
//     });


// const contactIdToRemove = "AeHIrLTr6JkxGE6SN-0Rw";

// removeContact(contactIdToRemove)
//     .then(removedContact => {
//         if (removedContact) {
//             console.log("Успешно удалён контакт:", removedContact);
//         } else {
//             console.log("Контакт с ID", contactIdToRemove, "не был найден.");
//         }
//     })
//     .catch(error => {
//         console.error("Произошла ошибка при удалении контакта:", error);
//     });
