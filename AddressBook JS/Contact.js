
class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.validateName(firstName, 'First Name');
        this.validateName(lastName, 'Last Name');
        this.validateLength(address, 'Address', 1);
        this.validateLength(city, 'City', 1);
        this.validateLength(state, 'State', 1);
        this.validatePattern(zip, 'Zip Code', /^\d{5}$/);
        this.validatePattern(phoneNumber, 'Phone Number', /^\d{10}$/);
        this.validatePattern(email, 'Email', /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    validateName(name, fieldName) {
        if (!/^[A-Z][a-zA-Z]{0,}$/.test(name)) {
            throw new Error(`${fieldName} should start with a capital letter and have atleast characters.`);
        }
    }

    validateLength(value, fieldName, minLength) {
        if (value.length < minLength) {
            throw new Error(`${fieldName} should have at least ${minLength} characters.`);
        }
    }

    validatePattern(value, fieldName, pattern) {
        if (!pattern.test(value)) {
            throw new Error(`Invalid ${fieldName}.`);
        }
    }
}

module.exports = Contact;