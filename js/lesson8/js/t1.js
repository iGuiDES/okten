/**
 * - Напишіть код,  котрий :
 *     -- отримує текст з параграфа з id "content"
 *     -- отримує текст з блоку з id "rules"
 *     -- замініть текст параграфа з id 'content' на будь-який інший
 *     -- замініть текст параграфа з id 'rules' на будь-який інший
 *     -- змініть кожному елементу колір фону на червоний
 *     -- змініть кожному елементу колір тексту на синій
 *     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
 *     -- поміняти колір тексту у всіх елементів fc_rules на червоний
 */

'use strict';

const loremOne = 'Слава Україні!';
const loremTwo = 'Героям Слава!'

const contentData = document.getElementById('content');
const rulesData = document.getElementById('rules');
const fcRules = document.querySelectorAll('.fc_rules');

let allClasses = '';

function changeContent(item) {
    item.style.backgroundColor = 'red';
    item.style.color = 'white';
    item.innerText = loremOne;
}

function changeRule(item) {
    item.style.backgroundColor = 'blue';
    item.style.color = 'white';
    item.innerText = loremTwo;
    allClasses = item.classList;
}

function changeColorLi(nodeList) {
    nodeList.forEach(item => item.style.color = 'red');
}

changeContent(contentData);
changeRule(rulesData);
changeColorLi(fcRules);

console.group('Отримати весь список класів елемента з id=rules і вивести їх в console.log');
console.log(allClasses);
console.groupEnd();