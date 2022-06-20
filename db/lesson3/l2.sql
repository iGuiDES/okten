db.users.insertMany([
    {
        name: 'Alex', age: 25, gender: 'male', address: {
            city: 'Lviv',
            street: 'Chornovola',
            house: 25,
            flat: 12
        },
        parents: [
            'Vasia',
            'Masha',
        ],
        rating: 5,
        studying: ['js','java']
    },
    {
        name: 'Natalii', age: 29, gender: 'female', address: {
            city: 'Lviv',
            street: 'Marko Vovchok',
            house: 45,
            flat: 45
        },
        parents: [
            'Igor',
            'Nina',
        ],
        rating: 4,
        studying: ['python','java', 'css']
    },
    {
        name: 'Alexsandr', age: 34, gender: 'male', address: {
            city: 'Lviv',
            street: 'Kitayska',
            house: 10,
            flat: 5
        },
        parents: [
            'Petro',
            'Alina',
        ],
        rating: 2,
        studying: ['js','java','html']
    },
    {
        name: 'Sergii', age: 12, gender: 'male',
        parents: [
            'Anton',
            'Tamara',
        ],
        rating: 4,
        studying: ['node','java', 'css','mongo','mysql']
    },
    {
        name: 'Igor', age: 45, gender: 'male', address: {
            city: 'Kyiv',
            street: 'Shevchenko',
            house: 100,
            flat: 66
        },
        parents: [
            'Igor',
            'Igor',
        ],
        rating: 5,
        studying: ['java','node']
    },
    {
        name: 'Eva', age: 26, gender: 'female', address: {
            city: 'Odessa',
            street: 'Derebasovska',
            house: 4,
        },
        parents: [
            'Masha'
        ],
        rating: 2,
        studying: ['js']
    },
    {
        name: 'Kira', age: 49, gender: 'female', address: {
            city: 'Uzgorod',
            street: 'Doroshenka',
            house: 201,
            flat: 1
        },
        parents: [
            'Vitaliy',
            'Olha',
        ],
        rating: 2,
        studying: ['java']
    },
    {
        name: 'Vova', age: 16, gender: 'male', address: {
            city: 'Uzgorod',
            street: 'Bethoven',
            house: 2,
            flat: 145
        },
        rating: 3
    }

])

use users

db.users.find() // Пошук по всій базі (побачити всіх)

db.users.insertOne({car: 'AUDI', model: 'A6', volume: '1.8', type: 'Busines'}) // Додавання нових полів (тільки один екземпляр)

db.users.find({gender: 'female'}) // Фільтрація по певному полю

db.users.find({_id: ObjectId('62a8c3f3d82692696ccd6f25')}) // Вибока по ID (звернути увагу на запис звернення до ID)

db.users.find(
    {gender: 'female', rating: 2},
    {_id: false, address: 0, rating: false} // 0 == false
    ) // В даному випадку виведи тільки name

db.users.find(
    {gender: 'female', rating: 2},
    {name: 1, _id: 0}
    ) // Виборка по окремим полям

db.users.find({
    $or:[
        {rating: 2},
        {rating: 5},
        {age: 12}
    ]
}) // Оператор OR

db.users.find({
    $and:[
        {rating: 2},
        {age: 34}
    ]
}) // Оператор AND

db.users.find({
    age: {$in: [12, 25, 34, 56]}
}) // Виборка по певним полям з використанням $in, які входять в діапазон, визначений в масиві (додатково прочитати по нього)

db.users.find({
    age: {$nin: [12, 25, 34, 56]}
}) // Виборка по певним полям з використанням $nin, які не входять в діапазон, визначений в масиві (додатково прочитати по нього)

db.users.find({
    age: {
        $not: {
            $in: [25, 12]
        }
    }
}) // Де оператор $not являється запереченням, і $in - все що входить в діапазон визначений в value як масив

db.users.find({
    name: /^al/i
}) // Пошук з використанням регулярного виразу (в даному запиті знайдено буде всі імена, в яких в імені є літера "а")

db.users.find({
    name: /a$/i
}) // В даному запиті будуте повернутий результат, де імʼя закінчується на літеру a

db.users.find({
    name: /^a.*x$/i
}) // В даному запиті буде повернуто результат, де в імені початок слова починається на літеру "a" та закінчується на літеру "х"

db.users.find({
    name: /^.{2}t/i
}) // У фігурних кавичках, декларуємо кількість пропускаємих символів

db.users.find({
    name: /.*v.*/i
}) // Буде здійснено вивід даних в яких у зазначених полях в слові є хоча б одна літера 'v'

// Сортування
db.users.find().sort({
    rating: 1
}) // Сортування від меньшого до більшого

// Сортування
db.users.find().sort({
    rating: -1
}) // Сортування від більшого до меншого

db.users.find().sort({
    rating: 1, age: -1
}) // Сортування від меньшого до більшого по рейтингу та від більшого до меншого по age уже з відсортованим rating

db.users.find().sort({
    rating: 1, age: -1
}).limit(2) // Сортуємо по прикладу вище, а потім задаємо ліміт виведення

db.users.find().sort({
    rating: 1, age: -1
}).limit(2).skip(4) // skip працює по принципи ofset, тобто пропускає вказану кількість шукаємих даних та виводить наступну кількість з вказазану в ліміті

// Логічні операції

db.users.find({
    rating: {$gt: 2}
}) // Стороге більше '>'

db.users.find({
    rating: {$lt: 2}
}) // Строге меньше '<'

db.users.find({
    rating: {$lte: 2}
}) // Меньше рівне '<='

db.users.find({
    rating: {$gte: 2}
}) // Більше рівне

db.users.find({
    rating: {$ne: 2}
}) // Не дорівнює

db.users.find({
    rating: {$eq: 2}
}) // Дорівнює

// Оновлення (update)

db.users.updateMany(
    {
        gender: 'animal'
    }, // пошуковий обʼєкт
    {
        $set:{gender: 'male'}
    } // Обʼєкт який на оновлення
    )

db.users.find({
    parents: {
        $size: 1
    } // В значення size не можливо додати динамічне поле, прописувати значення тільки руками
})

db.users.find({
    parents: {
        $exists: 0 // 0 - false 1 - true
    }
})

db.users.updateMany(
    {
        parents: {
            $exists: 1
        }
    },
    {
        $set: {'parents.$[]' : 'No know'}
    }
    )
