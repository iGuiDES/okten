/**
 * Взяти файл template_2.html та працювати в ньому
 * 1) Напишіть код, який :
 *     a) додає клас з назвою групи, елементу з ід main_header
 *     b) робить шириниу елементу ul 400px
 *     c) робить шириниу всіх елементів з класом linkList шириною 50%
 *     d) отримує текст який зберігається в елементі з класом listElement2
 *     e) отримує всі елементи li та змінює ім колір фону на сірий
 *     f) отримує всі елементи 'a' та додає їм клас anchor
 *     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
 *     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
 *     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
 *     j) отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елементу = content 2 segment . Колір отримати з prompt()
 *     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
 *     l) отримати елементи p та змінити їм padding на 20px
 *     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
 */

'use strict';

const mainHeader = document.getElementById('main_header');
const underListItem = document.querySelector('ul');
const allLinks = document.querySelectorAll('.linkList');
const listElement = document.querySelector('.listElement2');
const allLiItems = document.querySelectorAll('li');
const allAnchorElements = document.querySelectorAll('a');
const subHeader = document.querySelectorAll('.sub-header');
const oneContent = document.querySelector('.content_1');
const allParagraph = document.querySelectorAll('p');
const elementText = document.querySelectorAll('.text2');

const getColor = prompt('Вкажіть колір (латиницею)', 'red');
const getColorText = prompt('Вкажіть колір для тексту (латиницею)', 'white');
const typingUserText = prompt('Запишіть будь-яке речення для подальшого виводу:', 'Слава Україні!');


function addedClass(item) {
    item.classList.add('march-2022');
}

function changeWidth(item) {
    item.style.width = 400 + 'px';
}

function changedWidthElements(nodeList) {
    nodeList.forEach(item => item.style.width = 50 + '%');
}

function getTextItem(item) {
    console.group('Отримує текст який зберігається в елементі з класом listElement2')
    console.log(item.innerText);
    console.groupEnd();
}

function changeColorLiItem(nodeList) {
    nodeList.forEach(item => item.style.backgroundColor = 'grey');
}

function addedClassAnchor(nodeList) {
    nodeList.forEach(item => {
        item.classList.add('anchor');
        if (item.innerText === 'link3') {
            item.style.fontSize = 40 + 'px';
        }
        item.classList.add('element_' + item.innerText);
    });
}

function changesColorWithPrompt(nodeList) {
    nodeList.forEach(item => {
        if (getColor) {
            item.style.backgroundColor = getColor.toLowerCase();
        }

        if (item.innerText === 'content 2 segment' && getColorText !== '') {
            item.style.color = getColorText.toLowerCase();
        }
    });
}

function changeTextOnBlock(item) {
    if (typingUserText !== '') {
        item.innerText = typingUserText;
    }
}

function changingText(nodeList) {
    nodeList.forEach(item => item.innerText = 'Mach-2022');
}

addedClass(mainHeader);
changeWidth(underListItem);
changedWidthElements(allLinks);
getTextItem(listElement);
changeColorLiItem(allLiItems);
addedClassAnchor(allAnchorElements);
changesColorWithPrompt(subHeader);
changeTextOnBlock(oneContent);
changingText(elementText);