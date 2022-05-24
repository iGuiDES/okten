'use strict';

// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
const content = document.getElementsByClassName('content')[0];

function createBlockElement() {
    const addedBlock = document.createElement('div');

    addedBlock.setAttribute('id', 'text');
    addedBlock.innerHTML = '<h1>Created Block</h1>';

    content.appendChild(addedBlock);
}

function hiddenElement() {
    const idText = document.getElementById('text');

    idText.style.display = 'none';
}

createBlockElement();
document.getElementById('btn-1').addEventListener('click', hiddenElement);

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const formData = document.f1;

function validator(e) {
    e.preventDefault();

    const value = formData.age.value;

    if (value >= 1 && value < 18) {
        document.querySelector('.out-task-2').innerText = `Ваш вік ${value} років(ки), доступ заборонено!`;
    } else if (value >= 18 && value <= 100) {
        document.querySelector('.out-task-2').innerText = `Ваш вік - ${value} років(ки), доступ дозволено!`;
    } else {
        document.querySelector('.out-task-2').innerText = 'Введіть коректний вік!';
    }

    formData.age.value = '';
}

document.getElementById('btn-2').addEventListener('click', validator);


// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

function getFormsData() {
    const out = document.querySelector('.out-task-3');
    const formOne = document.forms['form1'];
    const formTwo = document.forms['form2'];
    const userData = {}

    userData.name = formOne.name.value;
    userData.email = formOne.email.value;
    userData.profession = {job: formTwo.working.value};
    userData.study = {school: formTwo.school.value};

    console.log(userData);
}

document.getElementsByClassName('task3')[0].addEventListener('click', getFormsData);


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

function createTable() {
    const formTaskFour = document.forms['form4'];
    const btn = formTaskFour.send;

    btn.addEventListener('click', function(e) {
        e.preventDefault();

        const out = document.querySelector('.out-task-4');
        const table = document.createElement('table');

        const row = formTaskFour.row.value;
        const cell = formTaskFour.cell.value;
        const info = formTaskFour.info.value;

        out.innerHTML = '';

        for (let i = 1; i <= row; i++) {
            const tr = document.createElement('tr');
            table.appendChild(tr);

            for (let j = 1; j <= cell; j++) {
                const td = document.createElement('td');
                td.innerText = info + ' ' + i + j;
                tr.appendChild(td);
            }
        }

        out.appendChild(table);
    });
}

createTable();
