// interface IUser{
//     name: string;
//     age: number;
//     status: boolean;
// }
//
// const user2:IUser = {name: 'Ivan', age: 20, status: false};
//
// const user3: Partial<IUser> = {name: 'Alex'};
//
// interface IUsers<T, D> {
//     name: string;
//     age: number;
//     status: boolean;
//     data_one: T;
//     data_two: D;
//     // address: {
//     //     city: string;
//     //     house: number[];
//     // }
// }
//
// const users: IUsers<number[], number> = {name: 'Max', data_one: [1,2,3], age: 12, status: true, data_two: 34};
//
// // Create person types
//
// type UserID = number;

// // New type
// type useStateType = [string, (a: number, b: string) => string];
//
// const useState: useStateType = ['hello', (a, b) => {
//     return `${a} -- ${b}`;
// }];
//
// let [user, setUser] = useState;
//
// setUser(20, 'hello');

// Create Class TS

class User {
    // id: number;
    // name: string;
    // age: number;

    // Якщо не використовуємо поля, що вище, прописуємо кодному із властивостей настпні поля: "private, protected, public"
    // Після створення екземпляру класу, ми не зможемо достукатися до полів, що мають ідентифікатор доступу "private and protected"

    constructor(public id: number, private name: string, protected age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

const user = new User(12, 'Max', 15);