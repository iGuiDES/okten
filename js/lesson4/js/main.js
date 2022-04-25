'use strict';

// Global variable
const pi = 3.14;

const array = [
    {
        id: 1,
        title: 'quis ut nam facilis et officia qui',
        completed: false
    },
    {

        id: 2,
        title: 'fugiat veniam minus',
        completed: false
    },
    {

        id: 3,
        title: 'et porro tempora',
        completed: true
    },
    {
        id: 4,
        title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
        completed: false
    },
    {
        id: 5,
        title: 'qui ullam ratione quibusdam voluptatem quia omnis',
        completed: false
    }
];

const primitiveArray = [ 'Hello, Mentor', 3.14, 'No war', true, undefined, false, 'Слава Україні!' ];

const users = [
    {
        id: 1,
        name: 'John',
        age: 28
    },
    {
        id: 2,
        name: 'Petr',
        age: 39
    },
    {
        id: 3,
        name: 'Angela',
        age: 24
    },
    {
        id: 4,
        name: 'Alex',
        age: 30
    },
    {
        id: 5,
        name: 'Piter',
        age: 56
    },
    {
        id: 6,
        name: 'Jack',
        age: 18
    }
];

const numbers = [1, 99, 15, 89, -17, 10, 29, 34, 76, 2, 55, 12, 0, -14];

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangle(a, b) {
    return a * b;
}

console.group('Task 1');
console.log('Площа прямокутника = ' + rectangle(10, 12));
console.groupEnd();

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function areaCircle(r) {
    return r / (2 * pi);
}

console.group('Task 2');
console.log('Площа кола = ' + areaCircle(10));
console.groupEnd();


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaCylinder(h, r) {
    return 2 * pi * r * h;
}

console.group('Task 3');
console.log('Повна площа циліндру = ' + areaCylinder(10, 5));
console.groupEnd();

// - створити функцію яка приймає масив та виводить кожен його елемент

function returnItemArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

console.group('Task 4');
returnItemArray(array);
console.groupEnd();

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraph(text) {
    return `<p class="content-wrap">${text}</p>`;
}

document.write(createParagraph('Created single static paragraph'))

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createList(text) {
    return `
        <ul class="content-wrap">
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>
    `;
}

document.write(createList('Created static elements li'));

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createListForCycle(text, amount) {
    let out = '';

    for (let i = 0; i < amount; i++) {
        out += `<li>${text}</li>`;
    }

    return `
        <ul class="content-wrap">
            ${out}
        </ul>
    `;
}

document.write(createListForCycle('Dynamic creation of elements using cycle', 10));

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function createListsInArrayItems(array) {
    let out = '';

    for (let item of array) {
        out += `
            <li>${item}</li>
        `;
    }

    return `
        <ul class="content-wrap">
            ${out}
        </ul>
    `;
}

document.write(createListsInArrayItems(primitiveArray));

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function createUserCard(array) {
    let out = '';

    for (let user of array) {
        out += `
            <div class="user">
                <p>User ID: ${user.id}</p>
                <p class="bold">User name: ${user.name}</p>
                <p>Full years: ${user.age}</p>
            </div>      
        `;
    }

    return `
        <div class="content-wrap users">
            ${out}
        </div>
    `;
}

document.write(createUserCard(users));

// - створити функцію яка повертає найменьше число з масиву

function returnMinNumberFromArray(array) {
    let sum = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < sum && typeof array[i] === 'number') {
            sum = array[i];
        }
    }

    return sum;
}

console.group('Task 10');
console.log('Min number in array: ' + returnMinNumberFromArray(numbers));
console.groupEnd();

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function sumArrayNumber(array) {
    let out = 0;

    for (let item of array) {
        if (typeof item === 'number') {
            out += item;
        }
    }

    return out;
}

console.group('Task 11');
console.log('Sum of all array elements = ' + sumArrayNumber(numbers));
console.groupEnd();
