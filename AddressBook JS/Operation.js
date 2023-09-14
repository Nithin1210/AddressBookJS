const Contact = require('./Contact');
const AddressBook = require('./AddressBook');

const addressBook = new AddressBook();

const contact1 = new Contact("A", "A", "1", "A", "A", "11111", "1111111111", "a@gmail.com");
const contact2 = new Contact("B", "B", "2", "B", "B", "22222", "2222222222", "b@gmail.com");

addressBook.addContact(contact1);
addressBook.addContact(contact2);

addressBook.displayContacts();