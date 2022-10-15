//*Задача №1

// const users = [
//     {
//         id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         skills: ['ipsum', 'lorem'],
//         gender: 'male',
//         age: 37,
//     },
//     {
//         id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//         gender: 'female',
//         age: 34,
//     },
//     {
//         id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//         gender: 'male',
//         age: 24,
//     },
// ];

// const allUsers = {};

// const usersKeys = Object.keys(users[0]);

// for (const key of usersKeys) {
//     allUsers[key] = [];

//     for (const user of users) {
//         allUsers[key].push(user[key]);
//     }
// }

// console.log(allUsers);

// *Задача №2
// Write a function that converts the argument values. If it will be a string, convert it to number and wise versa.
// It should return an array of converted values.
// convert('1', 2, 3, '4') // [1, '2', '3', 4]

// const convert = (...args) =>
//     args.map((el) =>
//         typeof el === 'string' ? (el = Number(el)) : (el = String(el))
//     );

// console.log('😼 ~ convert', convert('1', 2, 3, '4'));

// *Задача №3
// Write a function - positiveSum
// It should accept an array of numbers and return a result of their addition. But you must calculate only positive numbers and omit negative if any presents.
// For example:
// positiveSum([2, 4, 6, 8]) // => 20
// positiveSum([0, -3, 5, 7]) // => 12

// const positiveSum = (numbers) =>
//     numbers.reduce((acc, number) => (number > 0 ? (acc += number) : acc), 0);

// console.log('😼 ~ positiveSum([2, 4, 6, 8])', positiveSum([2, 4, 6, 8]));
// console.log('😼 ~ positiveSum([0, -3, 5, 7])', positiveSum([0, -3, 5, 7]));

// *Задача №3
// Write a function – letterCount
// It accepts two string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// For example:
// letterCount("Maggy", "g") // => 2
// letterCount("Barry", "b") // => 1
// letterCount("", "z") // => 0

// const letterCount = (str, letter) =>
//     str
//         .toLowerCase()
//         .split('')
//         .reduce(
//             (acc, strLetter) => (strLetter === letter ? (acc += 1) : acc),
//             0
//         );
// letterCount('Maggy', 'g');

// console.log('😼 ~ letterCount("Maggy", "g")', letterCount('Maggy', 'g'));
// console.log('😼 ~ letterCount("Barry", "b") ', letterCount('Barry', 'b'));
// console.log('😼 ~ letterCount("", "z")', letterCount('', 'z'));

// *Задача №4
// Our basketball team completed the championship. The result of each match look like "x:y".
// Results of all matches are recorded in the collection like this: ["3:1", "2:2", "0:1", ...]

// Write a function – countPoints
// It should accept a collection of backetball games scores and count the points of our team in the championship.
// Rules for counting points for each match:
// • if x > y - 3 points
// • if x < y - 0 point
// • if x = y - 1 point

// For example:
// countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']) // => 17
// countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']) // => 12

// const countPoints = (array) =>
//     array.reduce((acc, score) => {
//         const scoreNumber = score.split(':');
//         // if (Number(scoreNumber[0]) > Number(scoreNumber[1])) return (acc += 3);
//         // if (Number(scoreNumber[0]) < Number(scoreNumber[1])) return acc;
//         // return (acc += 1);
//         return Number(scoreNumber[0]) > Number(scoreNumber[1])
//             ? (acc += 3)
//             : Number(scoreNumber[0]) < Number(scoreNumber[1])
//             ? acc
//             : (acc += 1);
//     }, 0);

// console.log(
//     '😼 ~ countPoints ',
//     countPoints([
//         '3:1',
//         '1:0',
//         '0:0',
//         '1:2',
//         '4:0',
//         '2:3',
//         '1:1',
//         '0:1',
//         '2:1',
//         '1:0',
//     ])
// );
// console.log(
//     '😼 ~ countPoints ',
//     countPoints([
//         '1:1',
//         '1:2',
//         '2:0',
//         '4:2',
//         '0:1',
//         '2:3',
//         '1:1',
//         '0:1',
//         '1:1',
//         '3:0',
//     ])
// );

// *Задача №5
// getSums([1, 2, 3, 4, 5]);
// [1, 3, 6, 10, 15]
