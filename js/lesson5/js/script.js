'use strict';

const numbers = [1, 5, 10, 4, 89, 100, 15, -25, 0, -50];
const liteArray = [1, 2, 3];
const random = [];
const limitNum = [];


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

const arithmeticMean = (arr) => {

    let out = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            out += arr[i];
            count++;
        }
    }

    return out / count;
}

let task1 = arithmeticMean(numbers);

console.group('Task 1');
console.log(task1);
console.groupEnd();

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

const minNumber = (arr) => {

    let check = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && check > arr[i]) {
            check = arr[i];
        }
    }

    return check;
}

let task2 = minNumber(numbers);

console.group('Task 2');
console.log(task2);
console.groupEnd();


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

const randomNumber = () => {

    random.length = 0;

    for (let i = 1; i <= 10; i++) {
        random.push(Math.round(Math.random() * 100));
    }

    return random;
}

let task3 = randomNumber();

console.group('Task 3');
console.log(task3);
console.groupEnd();

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

const randomLimit = (limit) => {

    limitNum.length = 0;

    for (let i = 1; i <= 10; i++) {
        limitNum.push(Math.round(Math.random() * limit))
    }

    return limitNum;
}

let task4 = randomLimit(50);

console.group('Task 4');
console.log(task4);
console.groupEnd();

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

const reverse = (arr) => {

    const out = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        out.push(arr[i]);
    }

    return out;
}

let task5 = reverse(liteArray);

console.group('Task 5');
console.log('Original array: ', liteArray);
console.log('Reverse array: ', task5);
console.groupEnd();

//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const rectangle = (a, b) => a * b;

console.group('Task 6');
console.log(rectangle(10, 20));
console.groupEnd();

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const areaCircle = (r, pi) => r / (2 * pi);

console.group('Task 7');
console.log(areaCircle(10, 3.14));
console.groupEnd();

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const areaCylinder = (h, r, pi) => 2 * pi * r * h;

console.group('Task 8');
console.log(areaCylinder(10, 5, 3.14));
console.groupEnd();

// - створити функцію яка приймає масив та виводить кожен його елемент

const iterArray = (array) => {

    for (let item of array) {
        console.log(item);
    }

}

console.group('Task 9');
iterArray(numbers);
console.groupEnd();

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.