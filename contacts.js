const { nanoid } = require("nanoid");

const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();

    const contactById = contacts.filter((el) => el.id === contactId);
    return contactById;
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();

    const itemIndex = contacts.findIndex((el) => el.id === contactId);
    if (itemIndex === -1) {
      return null;
    }
    const [result] = contacts.splice(itemIndex, 1);
    fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return contacts;
  } catch (error) {
    console.log(error);
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const newContact = { id: nanoid(), name, email, phone };

    fs.writeFile(
      contactsPath,
      JSON.stringify([...contacts, newContact], null, 2)
    );
    return contacts;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
