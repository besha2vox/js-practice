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

import { listOfStudents, homeworkResults } from './data.js';

// //? option#2
// class Student {
//    #name;
//    #email;
//    #hwResults = [];

//    constructor(name, email) {
//       this.#name = name;
//       this.#email = email;
//    }

//    getName() {
//       return this.#name;
//    }

//    getEmail() {
//       return this.#email;
//    }

//    getHWResults() {
//       return this.#hwResults;
//    }

//    addHWResult(topic, succes) {
//       const result = { topic, succes };
//       this.#hwResults.push(result);
//    }
// }

// const studentAnastasia = new Student('Anastasia', 'belkina23@mail.com');

// console.log(studentAnastasia.getName());
// console.log(studentAnastasia.getEmail());
// console.log(studentAnastasia.getHWResults());
// console.log(studentAnastasia.addHWResult('HTML/CSS', true));
// console.log(studentAnastasia.getHWResults());

const Student = function (name, email) {
    const hwResults = [];

    this.getName = function () {
        return name;
    };

    this.getEmail = function () {
        return email;
    };

    this.getHWResults = function () {
        return hwResults;
    };

    this.addHWResult = function (topic, succes) {
        const result = { topic, succes };
        hwResults.push(result);
    };
};

const FrontendLab = function (students, failedLimit) {
    const failedHomeworksLimit = 0;
    const newStudents = students.map(
        ({ name, email }) => new Student(name, email)
    );

    this.printStudentsList = function () {
        newStudents.map((student) =>
            console.log(
                `name: ${student.getName()},\nemail:  ${student.getEmail()},\n${student.getHWResults()}`
            )
        );
    };

    this.addHomeworkresults = function (studentsResult) {
        newStudents.forEach((student) => {
            studentsResult.results.forEach((result) => {
                if (result.email === student.getEmail()) {
                    student.addHWResult(studentsResult.topic, result.success);
                }
            });
        });
    };
};

const a = new FrontendLab(listOfStudents, 1);

a.addHomeworkresults(homeworkResults[0]);
a.printStudentsList();
