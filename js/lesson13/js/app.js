'use strict';

/**
 * Розпорядок дня
 *  - підйом
 *  - прасування одягу
 *  - зустріч
 *  - finaly
 */

const container = document.querySelector('.container');

async function wakeUp(time) {
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

async function turnOffIron(action) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (action) {
                resolve('Праска вимкнена, можна йти на маршрутку', action);
            } else {
                reject('Забув вимкнути праску, зустрічі не буде!', action);
            }
        }, 1500);

    });
}

async function goToMeeting(meeting, time) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (meeting && time < 10) {
                resolve('Зустріч з найліпшим другом', meeting, time);
            } else {
                reject('Співрозмовник залишив місце зустрічі...', meeting, time);
            }
        }, 1200);

    });
}

wakeUp(7)
    .then((time) => {

        const div = document.createElement('div');
        div.innerHTML = `<h3 class="green">${time}</h3>`;
        div.classList.add('green-block');

        container.appendChild(div);

        return turnOffIron(true);
    })
    .then((action) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3 class="green">${action}</h3>`;
        div.classList.add('green-block');

        container.appendChild(div);

        return goToMeeting(true, 9);
    })
    .then((meeting) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3 class="green">${meeting}</h3>`;
        div.classList.add('green-block');

        container.appendChild(div);
    })
    .catch((e) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3 class="red">${e}</h3>`;
        div.classList.add('red-block');

        container.appendChild(div);
    })
    .finally(
        function () {
            const div = document.createElement('div');
            div.innerHTML = `<h3 class="green">Додому!</h3>`;
            div.classList.add('green-block');

            container.appendChild(div);
        }
    )

