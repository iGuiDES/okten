'use strict';

/**
 * Розпорядок дня
 *  - підйом
 *  - прасування одягу
 *  - зустріч
 *  - finaly
 */

const container = document.querySelector('.container');
const content = document.querySelector('.content');

function wakeUp(time) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (time > 7) {
                reject('Ти проспав', time);
            } else {
                resolve('Ранкові процедури та сніданок, попрасувати одяг!');
            }

        }, 1000);

    });
}

function turnOffIron(action) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (action) {
                resolve('Праска вимкнена, можна йти на маршрутку', action);
            } else {
                reject('Забув вимкнути праску, зустрічі не буде!', action);
            }
        }, 1700);

    });
}

function goToMeeting(meeting, time) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (meeting && time < 10) {
                resolve('Зустріч з найліпшим другом', meeting, time);
            } else {
                reject('Співрозмовник залишив місце зустрічі...', meeting, time);
            }
        }, 400);

    });
}

// wakeUp(7)
//
//     .then((action) => {
//         const div = document.createElement('div');
//         div.innerHTML = `<h3 class="green">${action}</h3>`;
//         div.classList.add('green-block');
//
//         container.appendChild(div);
//
//         return goToMeeting(true, 9);
//     })
//     .then((meeting) => {
//         const div = document.createElement('div');
//         div.innerHTML = `<h3 class="green">${meeting}</h3>`;
//         div.classList.add('green-block');
//
//         container.appendChild(div);
//     })
//     .catch((e) => {
//         const div = document.createElement('div');
//         div.innerHTML = `<h3 class="red">${e}</h3>`;
//         div.classList.add('red-block');
//
//         container.appendChild(div);
//     })
//     .finally(
//         function () {
//             const div = document.createElement('div');
//             div.innerHTML = `<h3 class="green">Додому!</h3>`;
//             div.classList.add('green-block');
//
//             container.appendChild(div);
//         }
//     );


// Async

async function goMeeting() {
    try {
        const up = await wakeUp(6);

        const block1 = document.createElement('div');
        block1.innerHTML = `<h3 class="green">${up}</h3>`;
        block1.classList.add('green-block');

        content.appendChild(block1);

        const readyMeeting = await turnOffIron(true);

        const block2 = document.createElement('div');
        block2.innerHTML = `<h3 class="green">${readyMeeting}</h3>`;
        block2.classList.add('green-block');

        content.appendChild(block2);

        const tripToTheMeeting = await goToMeeting(true, 9);

        const block3 = document.createElement('div');
        block3.innerHTML = `<h3 class="green">${tripToTheMeeting}</h3>`;
        block3.classList.add('green-block');

        content.appendChild(block3);

    } catch (e) {
        const blockError = document.createElement('div');
        blockError.innerHTML = `<h3 class="red">${e}</h3>`;
        blockError.classList.add('red-block');

        content.appendChild(blockError);
    } finally {
            const finalyBlock = document.createElement('div');
            finalyBlock.innerHTML = `<h3 class="green">Додому!</h3>`;
            finalyBlock.classList.add('green-block');

            content.appendChild(finalyBlock);
    }
}

goMeeting();