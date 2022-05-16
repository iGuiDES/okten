'use strict';

const pages = ['Main','Products','About us','Contacts'];
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

function createAndCloneBlock() {
    const wrapper = document.querySelector('.content');
    const content = document.createElement('div');
    content.innerText = 'Added classes in block';
    content.classList.add('wrap', 'collapse', 'alpha', 'beta');

    content.style.color = 'red';
    content.style.textAlign = 'center';
    content.style.fontSize = 24 + 'px';
    content.style.backgroundColor = 'bisque';
    content.style.marginTop = 15 + 'px';

    const cloneContentBlock = content.cloneNode(true);

    wrapper.appendChild(content);
    wrapper.appendChild(cloneContentBlock);
}

createAndCloneBlock();

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

function createLinks() {
    const menu = document.querySelector('.menu');

    for (let i = 0; i < pages.length; i++) {
        const createLinkGroup = document.createElement('li');
        const link = document.createElement('a');

        link.setAttribute('href', `./${pages[i]}`);
        link.innerText = pages[i];
        link.classList.add('link');

        createLinkGroup.appendChild(link);

        menu.append(createLinkGroup);
    }

}

createLinks();

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

function createBlockDurations(array) {
    const cards = document.querySelector('.cards');

    for (const item of array) {

        const card = document.createElement('div');
        const title = document.createElement('h3');
        const mounts = document.createElement('p');

        title.innerText = item.title;
        mounts.innerText = item.monthDuration;
        card.classList.add('card');

        card.appendChild(title)
        card.appendChild(mounts);
        cards.appendChild(card);
    }
}

createBlockDurations(coursesAndDurationArray);

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

function createBlockDurationsWithClasses(array) {
    const cards = document.querySelector('.cards-classes');

    for (let item of array) {
        const wrapper = document.createElement('div');
        const title = document.createElement('h1');
        const description = document.createElement('p');

        title.innerText = item.title;
        description.innerText = item.monthDuration;

        wrapper.classList.add('item');
        title.classList.add('heading');
        description.classList.add('description');

        wrapper.appendChild(title);
        wrapper.appendChild(description);

        cards.appendChild(wrapper);


    }
}

createBlockDurationsWithClasses(coursesAndDurationArray);


