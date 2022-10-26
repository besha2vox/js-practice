import 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js';

// * Task 4

// const isEmpty = (object) => {
//     const keys = Object.keys(object);
//     return (
//         object[keys[0]] === undefined ||
//         object[keys[0]] === null ||
//         object[keys[0]] === ''
//     );
// };

// console.log(isEmpty({ a: 1, b: undefined }));
// console.log(isEmpty({ a: undefined }));
// console.log(isEmpty({ a: 0 }));
// console.log(isEmpty({ a: null }));

// * Task 5

// const objIsEqual = (firstObject, secondObject) =>
// ? 1 option
//     // JSON.stringify(firstObject) === JSON.stringify(secondObject);
// ? 2 option
// _.isEqual(firstObject, secondObject);
// ? 3 option
//     {
//         const keys1 = Object.keys(firstObject);
//         const keys2 = Object.keys(secondObject);

//         if (keys1.length !== keys2.length) {
//             return false;
//         }

//         for (let i = 0; i < keys1.length; i += 1) {
//             const key = keys1[i];

//             if (firstObject[key] !== secondObject[key]) {
//                 return false;
//             }
//         }

//         return true;
// };
// const data = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };
// const data3 = { a: 1, b: 2 };
// console.log(objIsEqual(data, data2)); // true
// console.log(objIsEqual(data, data3)); // false

// * Task 6
// const invoke = (object, path, func, args) => {
//     const pathArray = path.split('.');
//     let newObj = {};
//     for (const el of pathArray) {
//         if (newObj[el] !== undefined) {
//             newObj = newObj[el];
//         } else {
//             newObj = object[el];
//         }
//     }

//     return Array.prototype[func].apply(newObj, args);
// };

// const data = { a: { b: { c: [1, 2, 3] } } };
// console.log(invoke(data, 'a.b.c', 'splice', [1, 2])); // [2, 3]
