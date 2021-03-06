const numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const nums = [11, 21, 3];
const cardDeck = [
    {cardSuit: 'spade', value: 6, color: 'black'},
    {cardSuit: 'diamond', value: 6, color: 'red'},
    {cardSuit: 'heart', value: 6, color: 'red'},
    {cardSuit: 'clubs', value: 6, color: 'black'},

    {cardSuit: 'spade', value: 7, color: 'black'},
    {cardSuit: 'diamond', value: 7, color: 'red'},
    {cardSuit: 'heart', value: 7, color: 'red'},
    {cardSuit: 'clubs', value: 7, color: 'black'},

    {cardSuit: 'spade', value: 8, color: 'black'},
    {cardSuit: 'diamond', value: 8, color: 'red'},
    {cardSuit: 'heart', value: 8, color: 'red'},
    {cardSuit: 'clubs', value: 8, color: 'black'},

    {cardSuit: 'spade', value: 9, color: 'black'},
    {cardSuit: 'diamond', value: 9, color: 'red'},
    {cardSuit: 'heart', value: 9, color: 'red'},
    {cardSuit: 'clubs', value: 9, color: 'black'},

    {cardSuit: 'spade', value: 10, color: 'black'},
    {cardSuit: 'diamond', value: 10, color: 'red'},
    {cardSuit: 'heart', value: 10, color: 'red'},
    {cardSuit: 'clubs', value: 10, color: 'black'},

    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},

    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},

    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},

    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
];
let strOne = 'hello world',
    strTwo = 'lorem ipsum',
    strThree = 'javascript is cool';

let dirtyString = ' dirty string   ';
let str = 'Ревуть воли як ясла повні';
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

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
console.log('Descending', sortNums(nums, 'descending'));
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

function searchCard(array) {

    return array.reduce((acc, item) => {

        if (item.cardSuit === 'spade' && item.value === 'ace') {
            acc.spadeAce.push(item);
        }

        if (item.value === 6) {
            acc.sixCardValue.push(item);
        }

        if (item.color === 'red') {
            acc.redColor.push(item);
        }

        if (item.cardSuit === 'diamond') {
            acc.valueDiamond.push(item);
        }

        if (item.cardSuit === 'clubs' && item.value >= 9) {
            acc.clubsValue.push(item);
        }

        return acc;

    }, {
        sixCardValue: [],
        redColor: [],
        valueDiamond: [],
        clubsValue: [],
        spadeAce: []});
}

console.group('Task 9');
    console.table(searchCard(cardDeck));
console.groupEnd();