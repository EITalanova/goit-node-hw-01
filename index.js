const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContact = await contacts.listContacts();
      console.table(allContact);
      break;
    case "get":
      const contact = await contacts.getContactById(id);
      console.log(contact);
      break;
    case "add":
      const newContacts = await contacts.addContact(name, email, phone);
      break;
    case "remove":
      const removeContact = await contacts.removeContact(id);
      break;

    default:
      console.warn("Error!");
  }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);
