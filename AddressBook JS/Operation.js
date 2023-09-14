const Contact = require('./Contact');
const AddressBook = require('./AddressBook');

const addressBook = new AddressBook();

const contact1 = new Contact("A", "A", "1", "A", "A", "11111", "1111111111", "a@gmail.com");
const contact2 = new Contact("B", "B", "2", "B", "B", "22222", "2222222222", "b@gmail.com");
const contact3 = new Contact("C", "C", "3", "c", "c", "33333", "3333333333", "c@gmail.com");



addressBook.addContact(contact1);
addressBook.addContact(contact2);
addressBook.addContact(contact3);


const foundContact = addressBook.findContactByName("B", "B");

if (foundContact) {
    
    const updatedInfo = {
        address: "22",
        city: "cc",
        state: "cc",
        zip: "333222",
        phoneNumber: "3333322222",
        email: "updated@email.com",
    };
    const success = addressBook.editContact("B", "B", updatedInfo);
    if (success) {
        console.log("Contact updated successfully!");
    } else {
        console.log("Contact not found.");
    }
}
else {
    console.log("Contact not found.");
}
console.log("BEFORE DELETING")
addressBook.displayContacts();

console.log("!!->AFTER DELETING")
addressBook.deleteContact("A");
addressBook.displayContacts();

console.log("Current Available Contact's are : "+addressBook.ContactCount());