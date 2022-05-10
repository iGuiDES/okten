'use strict';

const arrayUsers = [];
const clients = [];
const cinderellas = [];

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

arrayUsers.push(new User(9, 'Alex', 'Yatsenko', 'mail@mail.com', 380000000000));
arrayUsers.push(new User(2, 'Alex', 'Yatsenko', 'mail@mail.com', 380000000000));
arrayUsers.push(new User(10, 'Alex', 'Yatsenko', 'mail@mail.com', 380000000000));
arrayUsers.push(new User(6, 'Alex', 'Yatsenko', 'mail@mail.com', 380000000000));
arrayUsers.push(new User(5, 'Alex', 'Yatsenko', 'mail@mail.com', 380000000000));
arrayUsers.push(new User(4, 'Alex', 'Yatsenko', 'mail@mail.com', 380000000000));
arrayUsers.push(new User(7, 'Alex', 'Yatsenko', 'mail@mail.com', 380000000000));
arrayUsers.push(new User(8, 'Alex', 'Yatsenko', 'mail@mail.com', 380000000000));
arrayUsers.push(new User(1, 'Alex', 'Yatsenko', 'mail@mail.com', 380000000000));
arrayUsers.push(new User(3, 'Alex', 'Yatsenko', 'mail@mail.com', 380000000000));

console.group('Task 1');
console.table(arrayUsers);
console.groupEnd();


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

function sortArray(array) {
    return array.filter(item => item.id % 2 === 0);
}

console.group('Task 2');
console.table(sortArray(arrayUsers));
console.groupEnd();

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

function sortGrowth(array) {
    return array.sort((a, b) => {
        if (a.id > b.id) {
            return 1;
        }
    });
}

console.group('Task 3');
console.table(sortGrowth(arrayUsers));
console.groupEnd();

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

clients.push(new Client(1, 'User 1', 'Surname 1', 'mail@mail.com', 380000000000, ['Яблока', 'Апельсини', 'Мандарини', 'Виноград']));
clients.push(new Client(2, 'User 2', 'Surname 2', 'mail@mail.com', 380000000000, ['Банани', 'Яблока', 'Молоко']));
clients.push(new Client(3, 'User 3', 'Surname 3', 'mail@mail.com', 380000000000, ['Кава', 'Шоколад']));
clients.push(new Client(4, 'User 4', 'Surname 4', 'mail@mail.com', 380000000000, ['Картопля', 'Мʼясо', 'Риба', 'Приправи', 'Кетчуп', 'Майонез']));
clients.push(new Client(5, 'User 5', 'Surname 5', 'mail@mail.com', 380000000000, ['Пиво', 'Горішки']));
clients.push(new Client(6, 'User 6', 'Surname 6', 'mail@mail.com', 380000000000, ['Печиво', 'Згущене молоко', 'Кокос']));
clients.push(new Client(7, 'User 7', 'Surname 7', 'mail@mail.com', 380000000000, ['Миргородська', 'Халва', 'Цукерки', 'Сир', 'Цукор']));
clients.push(new Client(8, 'User 8', 'Surname 8', 'mail@mail.com', 380000000000, ['Полуниця', 'Паляниця']));
clients.push(new Client(9, 'User 9', 'Surname 9', 'mail@mail.com', 380000000000, ['Родзинки', 'Сухарі', 'Чай']));
clients.push(new Client(10, 'User 10', 'Surname 10', 'mail@mail.com', 380000000000, ['Шоколад', 'Кава', 'Пиріг', 'Жувальна гумка']));

console.group('Task 4');
console.table(clients);
console.groupEnd();

// - Взяти масив (Client [] з попереднього завдання). Відсортувати його по кількості товарів в полі order по зростанню. (sort)

function sortAmountProduct(array) {

    return array.sort((a, b) => a.order.length - b.order.length);

}

console.group('Task 5');
console.table(sortAmountProduct(clients));
console.groupEnd();

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function CarFn(model, producer, year, maxSpeed, capacity) {

    this.model = model;
    this.producer = producer;
    this.capacity = capacity;
    this.year = year;
    this.maxSpeed = maxSpeed;

    this.drive = function() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    this.info = function() {
        console.log(`
            Модель автомобіля: ${this.model}
            Виробник: ${this.producer}
            Рік випуску: ${this.year}
            Максимальна швидкість: ${this.maxSpeed}
            Обʼєм двигуна: ${this.capacity}
        `);
    }

    this.increaseMaxSpeed = function(newSpeed) {
        return this.maxSpeed = newSpeed;
    }

    this.changeYear = function(newYear) {
        return this.year = newYear;
    }

    this.addDriver = function(driver) {
        return this.driver = {driver};
    }
}

const myCar = new CarFn('X5', 'BMW', 2015, 200, 200);
myCar.addDriver({name: 'Driver'});
myCar.changeYear(2020);
myCar.increaseMaxSpeed(250);
// myCar.info();
// myCar.drive();

console.group('Task 6');
console.log(myCar);
console.groupEnd();

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, producer, year, maxSpeed, capacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.capacity = capacity;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log(`
            Модель автомобіля: ${this.model}
            Виробник: ${this.producer}
            Рік випуску: ${this.year}
            Максимальна швидкість: ${this.maxSpeed}
            Обʼєм двигуна: ${this.capacity}
        `);
    }

    increaseMaxSpeed(newSpeed) {
        return this.maxSpeed = newSpeed;
    }

    changeYear(newYear) {
        return this.year = newYear;
    }

    addDriver(driver) {
        return this.driver = {driver};
    }
}

const myNewCar = new Car('A6', 'AUDI', 2010, 180, 120);
myNewCar.addDriver('John');
myNewCar.changeYear(2022);
myNewCar.increaseMaxSpeed(220);
// myNewCar.info();
// myNewCar.drive();

console.group('Task 7');
console.log(myNewCar);
console.groupEnd();


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

}

class Prince {
    constructor(name, age, findFoot) {
        this.name = name;
        this.age = age;
        this.findFoot = findFoot;
    }

    searchPrinces(array) {
        return array.forEach(item => {
            if (item.footSize === this.findFoot) {
                return this.called = item;
            }
        })
    }
}

cinderellas.push(new Cinderella('Liza', 20, 36));
cinderellas.push(new Cinderella('Anna', 18, 34));
cinderellas.push(new Cinderella('Veronika', 21, 36));
cinderellas.push(new Cinderella('Lina', 22, 38));
cinderellas.push(new Cinderella('Olga', 19, 39));
cinderellas.push(new Cinderella('Stefania', 18, 33));
cinderellas.push(new Cinderella('Valentina', 21, 37));
cinderellas.push(new Cinderella('Nina', 24, 40));
cinderellas.push(new Cinderella('Sofia', 20, 35));
cinderellas.push(new Cinderella('Anastasia', 25, 37));

const prince = new Prince('Vasya', 22, 33);
const searchMethFind = function (array, validator) {
    return array.find(item => {
        if (item.footSize === validator) {
           return item;
        }
    });
}

prince.searchPrinces(cinderellas);

console.group('Task 8');
console.log(prince);
console.log(searchMethFind(cinderellas, prince.findFoot));
console.groupEnd();