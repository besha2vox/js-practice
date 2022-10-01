// * Задача №1
// Вам потрібно розрахувати суму чайових, яку потрібно давати в ресторані/кафе.
// Робочий процес:
// 1. Контрольна сума введених користувачем даних. (Використовуйте функцію prompt).
// 2. Користувач вводить відсоток чайових. (Використовуйте функцію prompt)
// 3. Для скасованого введення відобразіть «Скасовано».
// 4. Необхідно перевірити вхідні дані: обидва значення мають бути числами, контрольною сумою бути не може
// від’ємне число, відсоток не може бути від’ємним і перевищувати 100.
// 5. Якщо введені дані недійсні, ви повинні показати повідомлення «Недійсні вхідні дані». (Використовуйте функцію «попередження»).
// 6. Вам потрібно розрахувати суму чайових і загальну суму до сплати.
// 7. Показати повідомлення: (приклад). Використовуйте функцію «попередження».
// Чекова сума: 200
// Підказка: 15%
// Сума чайових: 30
// Загальна сума до сплати: 230

//* Решение задачи №1
// const checkSum = prompt("Ведіть суму чеку");
// const procentTea = prompt("Введіть відсоток чайових");

// // const cancel = prompt("Відміна");
// if (checkSum === null || procentTea === null) {
//   alert("Відміна");
// } else {
//   const parceNumber = Number.parseFloat(checkSum);
//   const parceTea = Number.parseFloat(procentTea);
//   if (Number.isNaN(parceNumber) || Number.isNaN(parceTea) || parceNumber <= 0 || parceTea <= 0 || parceTea > 100) {
//     alert("Не вірні данні");
//   } else {
//     const totalTea = (parceNumber * parceTea) / 100;
//     const total = totalTea + parceNumber;
//     const message = `Контрольная сумма: ${parceNumber}
//             Чаевые: ${parceTea}%
//             Количество чаевых: ${totalTea.toFixed(2)}
//             Общая сумма к оплате: ${total.toFixed(2)}`;
//     alert(message);
//   }
// }

//* Задача №2
// const word = prompt('Введіть слово! одне!!!');

// if(word === null || word === '') {
//   alert('Скасовано!');
// } else {
//   const wordLength = word.length;
//   if(wordLength % 2 === 0) {
//     const letterIndex = wordLength / 2;
// //     const letters = word[letter - 1] + word[letter]
//     const lettersIndex = word.slice(letter - 1, letter + 1);
//     alert(lettersIndex);
//   } else {
//     const letterIndex = Math.round(wordLength / 2);
//     alert(word[letterIndex - 1]);
//   }
// }

//* Задача №3
// const a = [1, 2, 3]
// const b =[5, [6, 7]]
// const c = 4
// //[1, 2, 3, 4, 5, 6, 7]
// const d = [...a, c, b[0], ...b[1]];

// console.log(d)

//* Задача №4
// const array = [1, 2, 3, 4, 5, 6, 7];
// //[1, 2, 3, 0, 0, 0, 7]
// // array.splice(3, 3, 0, 0, 0);
// array.fill(0, 3, 6);
// console.log(array)

//* Задача №5
// const array = [1, 2, 3, 4, 5, 6, 7];
// //[1,2,3,1,2,3,7]
// array.copyWithin(3, 0, 3);
// console.log(array)

//* Задача №6
// const array = [1, 4, 4, 6, 7, 4, 6, 8];
// let indx;
// for (let i = 0; i < array.length; i += 1) {
//   if (array[i] === 4) {
//     indx = i;
//   }
// }
// console.log(indx);
