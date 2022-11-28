class Person
{
    // Private field
    #id = 0;

    // Public
    firstName;
    lastName;

    constructor(firstName = '', lastName = '') {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getId() {
        return this.#id;
    }

    setId(id) {
        this.#id = id;
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    fullName() {
        return this.firstName + ' ' + this.lastName
    }
}

class Student extends Person {
    school;
    constructor(firstName, lastName, school) {
        super(firstName, lastName)
        this.school = school
    }
}

let person = new Student('Mohammed', 'Safadi');
person.id = 2
// person.setId(1)
// person.firstName = 'Mohammed';
// person.lastName = 'Safadi';
console.log(person.fullName(), person.id)