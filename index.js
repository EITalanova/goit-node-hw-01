
const argv = require('yargs').argv;

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

program
.option()

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContact = listContacts();
      console.log(allContact);
      break;
    case "get":

      break;
    case "add":

      break;
    case "remove":

      break;
    
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

// listContacts();
// getContactById('Z5sbDlS7pCzNsnAHLtDJd');
// removeContact('AeHIrLTr6JkxGE6SN-0Rw');
// addContact('Alisa', 'email', 'hone');