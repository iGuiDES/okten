'use strict';

// - Є змінна a, якій ви надаєте довільне числове значення.
//     Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
console.group('###### Task 1 ######');
let a = 1;

if (a === 0) {
    console.log('Right');
} else {
    console.log('Not right');
}
console.groupEnd();

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

console.group('###### Task 2 ######');
let time = 31;

if (time > 0 && time <= 15) {
    console.log('The first half of the day');
} else if (time > 15 && time <= 30) {
    console.log('Afternoon');
} else if (time > 30 && time <= 45) {
    console.log('Third half of the day');
} else if (time > 45 && time < 60) {
    console.log('Fourth half of the day')
} else {
    console.log(`${time} - is not correct`);
}
console.groupEnd();

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//

console.group('###### Task 3 ######');
let day = 1;

if (day > 0 && day <= 10) {
    console.log('First');
} else if (day > 10 && day <= 20) {
    console.log('Second');
} else if (day > 20 && day <= 31) {
    console.log('Third');
} else {
    console.log(`${day} - is not correct!`);
}

console.groupEnd();

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//

console.group('###### Task 4 ######')
const userData = +prompt('Enter the number in sequence: ', '21');

if (typeof userData === 'number' && userData > 0 && userData <= 7) {
    switch (userData) {
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        default:
            console.log('Weekend')
    }
} else {
    console.log('There is no such day of the week!');
}

console.groupEnd();

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

console.group('###### Task 5 ######')
const numFirst = +prompt('Enter the first number:', '30'),
    numSecond = +prompt('Enter the second number:', '20');

if (numFirst > numSecond) {
    console.log(`${numFirst} больше ${numSecond}`);
} else if (numFirst < numSecond) {
    console.log(`${numFirst} меньше ${numSecond}`);
} else {
    console.log('The numbers are equal');
}

console.groupEnd();