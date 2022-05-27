'use strict';

// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

document.getElementById('button').addEventListener('click', function (event) {
    event.preventDefault();

    const users = {};
    const formData = document.forms['formData'];

    users.name = formData.name.value;
    users.age = formData.age.value;

    if (formData.name.value !== '' && formData.age.value !== '') {
        localStorage.setItem("users", JSON.stringify(users));
    }

    formData.name.value = '';
    formData.age.value = '';
});

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

document.getElementById('auto-data').addEventListener('click', function (event) {
    event.preventDefault();

    const array = [];
    const auto = {};
    const formData = document.forms['auto'];

    auto.model = formData.model.value;
    auto.type = formData.type.value;
    auto.volume = formData.volume.value;

    array.push(auto);
    if (formData.model.value !== '' && formData.type.value !== '' && formData.volume.value !== '') {
        localStorage.setItem('array', JSON.stringify(array));
    }

    formData.model.value = '';
    formData.type.value = '';
    formData.volume.value = '';

    // const result = localStorage.getItem('auto');
    // console.log(JSON.parse(result));
});