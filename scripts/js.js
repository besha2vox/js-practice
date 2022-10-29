// import 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js';

// const { isEmpty } = require("lodash");

// * Task 4

const isEmptyDeep = (object) => {
    if (typeof object === 'object') {
        const keys = Object.keys(object);
        for (const key of keys) {
            if (typeof object[key] !== 'object' || object[key] === null) {
                const isEmpty =
                    object[key] === undefined ||
                    object[key] === null ||
                    object[key] === '' ||
                    Number.isNaN(object[key]);
                console.log('isEmpty', isEmpty);
                return isEmpty;
            } else {
                isEmptyDeep(object[key]);
            }
        }
    }
};

console.log(isEmptyDeep({ a: 1, b: undefined }));
console.log(isEmptyDeep({ a: undefined }));
console.log(isEmptyDeep({ a: 'lol' }));
console.log(isEmptyDeep({ a: null }));
console.log(isEmptyDeep({ a: { b: undefined } }));
console.log(isEmptyDeep({ a: { b: 1 } }));

// * Task 6
// const invoke = (object, path, func, args) => {
//     const pathArray = path.split('.');
//     let newObj = {};
//     for (const el of pathArray) {
//         if (newObj[el] === undefined) {
//             newObj = object[el];
//         } else {
//             newObj = newObj[el];
//         }
//     }
//     return Array.prototype[func].apply(newObj, args);
// };

// const data = { a: { b: { c: [1, 2, 3] } } };
// console.log(invoke(data, 'a.b.c', 'splice', [1, 2])); // [2, 3]

// * Task 5

// ? 1 option
// const objIsEqual = (firstObject, secondObject) =>
// JSON.stringify(firstObject) === JSON.stringify(secondObject);
// ? 2 option
// const objIsEqual = (firstObject, secondObject) =>
//     _.isEqual(firstObject, secondObject);
// ? 3 option
// const objIsEqual = (firstObject, secondObject) => {
//     const keys1 = Object.keys(firstObject);
//     const keys2 = Object.keys(secondObject);

//     if (keys1.length !== keys2.length) {
//         return false;
//     }

//     for (let i = 0; i < keys1.length; i += 1) {
//         const key = keys1[i];

//         if (firstObject[key] !== secondObject[key]) {
//             return false;
//         }
//     }

//     return true;
// };
// const data = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };
// const data3 = { a: 1, b: 2 };
// console.log(objIsEqual(data, data2)); // true
// console.log(objIsEqual(data, data3)); // false
