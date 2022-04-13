'use strict';

let sayHello = 'hello',
    owu = 'owu',
    octet = 'com',
    ua = 'ua',
    n1 = 1,
    n10 = 10,
    numDec = -999,
    n123 = 123,
    pi = 3.14,
    n2 = 2.7,
    n16 = 16,
    true1 = true,
    false1 = false;

// Return a value to the console
console.log(sayHello);
console.log(owu);
console.log(octet);
console.log(ua);
console.log(n1);
console.log(n10);
console.log(numDec);
console.log(n123);
console.log(pi);
console.log(n2);
console.log(n16);
console.log(true1);
console.log(false1);

// // Return a value to the alert (window)
// alert(sayHello);
// alert(owu);
// alert(octet);
// alert(ua);
// alert(n1);
// alert(n10);
// alert(numDec);
// alert(n123);
// alert(pi);
// alert(n2);
// alert(n16);
// alert(true1);
// alert(false1);

// Return a value to the body
document.write(`<div class="inner-text">${sayHello}</div>`);
document.write(`<div class="inner-text">${owu}</div>`);
document.write(`<div class="inner-text">${octet}</div>`);
document.write(`<div class="inner-text">${ua}</div>`);
document.write(`<div class="inner-text">${n1}</div>`);
document.write(`<div class="inner-text">${n10}</div>`);
document.write(`<div class="inner-text">${numDec}</div>`);
document.write(`<div class="inner-text">${n123}</div>`);
document.write(`<div class="inner-text">${pi}</div>`);
document.write(`<div class="inner-text">${n2}</div>`);
document.write(`<div class="inner-text">${n16}</div>`);
document.write(`<div class="inner-text">${true1}</div>`);
document.write(`<div class="inner-text">${false1}</div>`);

// Task 2
const bookNoAuthors = {
    name: 'Clean Code in JavaScript',
    page: 527,
    genre: 'Programming'
}

// Task 3
const bookWithAuthors = {
    name: 'Clean Code in JavaScript',
    page: 527,
    genre: 'Programming',
    authors: [
        'James Padolsey',
        'Pavan Ramchandani',
        'Ashitosh Gupta'
    ],
}

// Task 4
let firstName = 'Alexandr',
    middleName = 'Olegovych',
    lastName = 'Yatsenko';

let person = `${lastName} ${firstName} ${middleName}`;
console.log(person);

// Task 5
const getFirstName = prompt('Enter your name: '),
    getMiddleName = prompt('Enter your middle name: '),
    getAge = prompt('Enter your age: ');

console.log(getFirstName);
console.log(getMiddleName);
console.log(getAge);

// Task 6
let a = 100,
    b = '100',
    c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// Task 7
const books = [
    {
        name: 'Book 1',
        page: 600,
        genre: 'Programming'
    },
    {
        name: 'Book 2',
        page: 456,
        genre: 'Horror'
    },
    {
        name: 'Book 3',
        page: 300,
        genre: 'History'
    },
];

console.log(books[0]);
console.log(books[1]);
console.log(books[2]);