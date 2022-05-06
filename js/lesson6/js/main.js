// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strOne = 'hello world',
    strTwo = 'lorem ipsum',
    strThree = 'javascript is cool';

let dirtyString = ' dirty string   ';
let str = 'Ревуть воли як ясла повні';
const numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const nums = [11, 21, 3];
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

function lengthString(str) {

   return str.length;

}

console.group('Task 1');
    console.log(lengthString(strOne));
    console.log(lengthString(strTwo));
    console.log(lengthString(strThree));
console.groupEnd();

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

function stringToUpperCase(str) {

    return str.toUpperCase();

}

console.group('Task 2');
    console.log(stringToUpperCase(strOne));
    console.log(stringToUpperCase(strTwo));
    console.log(stringToUpperCase(strThree));
console.groupEnd();

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

function stringToLowerCase(str) {

    return str.toUpperCase().toLowerCase();

}

console.group('Task 3');
    console.log(stringToLowerCase(strOne));
    console.log(stringToLowerCase(strTwo));
    console.log(stringToLowerCase(strThree));
console.groupEnd();


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

function cleanSpace(str) {

    return str.trim();

}

console.group('Task 4');
    console.log(cleanSpace(dirtyString));
console.groupEnd();

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToArray(str) {

    return str.split(' ');

}

let array = stringToArray(str)

console.group('Task 5');
    console.log(array);
console.groupEnd();


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

const numbersToString = numbers.map(item => item + '');

console.group('Task 6');
    console.log(numbersToString);
console.groupEnd();

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(array, direction) {

    return array.sort((item, index) => {
       if (direction === 'ascending') {
           return item - index;
       } else if (direction === 'descending') {
           return index - item;
       }
    });
}

console.group('Task 7');
    console.log('Ascending', sortNums(nums, 'ascending'));
    console.log('Descending', sortNums(nums,'descending'));
console.groupEnd();

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

function sortedCourses(array) {
    const resultArr = [];

    array.filter(item => {
        if (item.monthDuration >= 5) {
           resultArr.push(item);
        }
    });

    return resultArr.sort((a, b) => {
        if (b.monthDuration > a.monthDuration) {
            return 1;
        } else {
            return -1;
        }
    });
}

console.group('Task 8');
    console.table(sortedCourses(coursesAndDurationArray));
console.groupEnd();

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }