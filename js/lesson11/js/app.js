'use strict';

// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

function senderData() {
    const users = {};
    const formData = document.forms['formData'];

    users.name = formData.name.value;
    users.age = formData.age.value;

    localStorage.setItem("users", JSON.stringify(users));

    formData.name.value = '';
    formData.age.value = '';
}

document.getElementById('button').addEventListener('click', senderData);

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

function autoParameters() {
    const formData = document.forms['auto'];
    const array = [];
    const auto = {};

    auto.model = formData.model.value;
    auto.type = formData.type.value;
    auto.volume = formData.volume.value;

    array.push(auto);

    localStorage.setItem('auto', JSON.stringify(array));

    // const result = localStorage.getItem('auto');
    // console.log(JSON.parse(result));

}

document.getElementById('auto-data').addEventListener('click', autoParameters);