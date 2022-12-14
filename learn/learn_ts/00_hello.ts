class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

// function greeter(person: string) {
//     return "Hello, " + person;
// }

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}


// let user = "Jane User";
// let user = "Jane User";
// let user = {firstName: "Jane", lastName: "User"}
let user = new Student("Jane", "M.", "Users");


document.body.innerHTML = greeter(user);