'use strict';

// Task 1
for (let i = 0; i < 10; i++) {
    document.write(`<div class="task-1">Lorem ipsum dolor sit amet, consecrate radicalising elite. Dicta dolor unique expedite gusto nemo reprehend?</div>`);
}

// Task 2
for (let i = 0; i < 10; i++) {
    document.write(`<div class="task-2">Iterations ${i + 1}</div>`);
}

// Task 3
let i = 0;
while (i < 20) {
    document.write(`<h1 class="task-1">Lorem ipsum dolor sit amet, consecrate radicalising.</h1>`);
    i++;
}

// Task 4
let j = 0;
while (j < 20) {
    document.write(`<h1 class="task-2">Iterations ${j + 1}</h1>`);
    j++;
}

// Task 5
const listOfItems = [
    'html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'nodejs'
];

document.write(`<ul class="task-1">`);
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`
    <li>
        ${listOfItems[i]}
    </li>
`);
}
document.write(`</ul>`);

// Task 6
const products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

document.write(`<div class="products">`);

for (let product of products) {

    document.write(`
        <div class="product-card">
            <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
            <img src="${product.image}" alt="img">
        </div>
    `);
}

document.write(`</div>`);