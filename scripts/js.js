// //* Task 1
// //? option#1
// const inventory = {
//     items: ['Knife', 'Gas mask'],
//     add(itemName) {
//         console.log(`Adding ${itemName} to inventory`);

//         this.items.push(itemName);
//     },
//     remove(itemName) {
//         console.log(`Removing ${itemName} from inventory`);

//         this.items = this.items.filter((item) => item !== itemName);
//     },
// };

// const invokeInventoryAction = function (itemName, action) {
//     console.log(`Invoking action on ${itemName}`);
//     action(itemName);
// };

// invokeInventoryAction('Medkit', inventory.add.bind(inventory));
// //! Invoking action on Medkit
// //! Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
// //! Invoking action on Gas mask
// //! Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

// //? option#2
// const inventory = {
//     items: ['Knife', 'Gas mask'],
//     add(itemName) {
//         console.log(`Adding ${itemName} to inventory`);
//         console.log(this);
//         this.items.push(itemName);
//     },
//     remove(itemName) {
//         console.log(`Removing ${itemName} from inventory`);

//         this.items = this.items.filter((item) => item !== itemName);
//     },
// };

// const invokeInventoryAction = function (itemName, action) {
//     console.log(`Invoking action on ${itemName}`);
//     action.call(this, itemName);
// };

// invokeInventoryAction.call(inventory, 'Medkit', inventory.add);
// //! Invoking action on Medkit
// //! Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction.call(inventory, 'Gas mask', inventory.remove);
// //! Invoking action on Gas mask
// //! Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

// //? option#3
// const inventory = {
//     items: ['Knife', 'Gas mask'],
//     add(itemName) {
//         console.log(`Adding ${itemName} to inventory`);
//         console.log(this);
//         this.items.push(itemName);
//     },
//     remove(itemName) {
//         console.log(`Removing ${itemName} from inventory`);

//         this.items = this.items.filter((item) => item !== itemName);
//     },
// };

// const invokeInventoryAction = function (itemName, action) {
//     console.log(`Invoking action on ${itemName}`);
//     action.apply(this, [itemName]);
// };

// invokeInventoryAction.apply(inventory, ['Medkit', inventory.add]);
// //! Invoking action on Medkit
// //! Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction.apply(inventory, ['Gas mask', inventory.remove]);
// //! Invoking action on Gas mask
// //! Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

// //* Task#2

// //? option#1
// class Student {
//     #name;
//     #email;
//     #homWorkResult;
//     constructor(name, email) {
//         this.#name = name;
//         this.#email = email;
//         this.#homWorkResult = [];
//     }

//     get name() {
//         return this.#name;
//     }
//     get email() {
//         return this.#email;
//     }
//     get homWorkResult() {
//         return this.#homWorkResult;
//     }

//     addHomWorkResult(topic, success) {
//         this.#homWorkResult.push({ topic, success });
//     }
// }

// const student = new Student('Sehii', 'besha2vox@gmail.com');

// console.log(student.name);
// console.log(student.email);
// console.log(student.homWorkResult);
// student.addHomWorkResult('js', false);
// console.log(student.homWorkResult);

// import { listOfStudents } from './data.js';
// import { homeworkResults } from './data.js';

// //? option#2
const Student = function (studentName, studentEmail) {
    const name = studentName;
    const email = studentEmail;
    const homWorkResult = [];

    this.getName = function () {
        return name;
    };

    this.getEmail = function () {
        return email;
    };

    this.getHomWorkResult = function () {
        return homWorkResult;
    };

    this.addHomWorkResult = function (topic, success) {
        homWorkResult.push({ topic, success });
    };
};

const FrontendLab = function (students, failedList) {
    const failedHomeWorksLimit = 0;
    const studentsList = [];
    const newStudents = listOfStudents.map(
        ({ name, email }) => new Student(name, email)
    );

    const studentWithResult = this.newStudents.forEach((student) => {
        homeworkResults.forEach(({ topic, results: { email, success } }) => {
            if (student.getEmail() === email)
                student.addHomWorkResult(topic, success);
        });
    });

    this.printStudentList = function () {
        console.log(students);
    };

    this.addHomWorkResult = function (studentResult) {
        newStudents.forEach((student) =>
            studentResult.forEach((result) => {
                if (result.email === student.getEmail()) return {};
            })
        );
    };
};

const frontendLab = new FrontendLab(listOfStudents, 1);
