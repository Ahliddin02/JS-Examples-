/* ------------$$$------------ */
// МАССИВЫ

// const groceries = ['Butter', 'Eggs', 'Frosted Flakes'];
// console.log(groceries[1]);
// console.log(groceries.length);
// console.log(groceries[groceries.length-1]);

//push
// const groceries = ['Butter', 'Eggs', 'Frosted Flakes'];
// groceries.push('Radish', 'Tea', 'Sugar', 'Salt')
// console.log(groceries);

//unshift
// const groceries = ['Butter', 'Eggs', 'Frosted Flakes'];
// groceries.unshift('Radish', 'Tea', 'Sugar', 'Salt');
// console.log(groceries);

//pop
// const groceries = ['Butter', 'Eggs', 'Tea', 'Sugar', 'Salt'];
// // groceries.pop();
// console.log(groceries.pop());
// console.log(groceries);

//shift
// const groceries = ['Butter', 'Eggs', 'Tea', 'Sugar', 'Salt'];
// // groceries.shift();
// console.log(groceries.shift());
// console.log(groceries);

//concat
// let fruits = ['Apple', 'Banana', 'orange'];
// let vegetables = ['carrots', 'potatoes', 'cabbage'];

// let myDinner = fruits.concat(vegetables);
// console.log(myDinner);
/* ------------------------ */

/* ------------$$$------------ */
//ОБЪЕКТИ
// let person = {
//     firstName: 'Robert',
//     lastName: 'MacMillan',
//     age: 32,
//     hobbies: ['music', 'skiing', 'coding'],
//     address: {
//         street: '123 Main Street',
//         city: 'New York',
//         state: 'NY',
//         zip: null,
//     },
//     getFullName() {
//         return this.firstName + ' ' + this.lastName;
//     },
// };

// // console.log(person.age);
// // console.log(person.address['city']);
// // console.log(person['age']);
// // console.log(person['hobbies'][2]);

//Добовление
// person.salary = '$100,000';
// // console.log(person);
// person['children'] = ['Mary', 'John'];
// console.log(person);

//Удаление
// delete person.hobbies[1];
// delete person.address.zip;
// person.hobbies = undefined;
// console.log(person);

// let obj = {};
// for(let i = 0; i < 7; i++) {
//     let propertyName = 'num' + (i + 1);
//     obj[propertyName] = Math.random() * 50;
// }
// console.log(obj);

/* ------------$$$------------ */
// let admin = "";

// let name = "Джон";

// admin = name;

// alert(admin);
/* ------------------------ */

/* ------------$$$------------ */
/* 1 Создайте переменную для названия нашей планеты. Как бы вы её назвали? */

// let planets = "";
// let ourPlanetName = "Земля";

/* 2  Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?*/

// let studyJs = "";
// let currentUserName = "Джон";
/* ------------------------ */

/* ------------$$$------------ */
//Взаимодействие: alert, prompt, confirm

// PROMPT
//    let age = prompt('Сколько тебе лет?', 100);

//    alert(`Тебе ${age} лет!`); // Тебе 100 лет!

//CONFIRM
// let isBoss = confirm("Ты здесь главный?");

// alert( isBoss ); // true, если нажата OK

//Задача
// let nameUser = prompt('What is you name ?');
// alert(`Your name is ${nameUser}`);

// let name = prompt("Ваше имя?", "");
// alert(name);
/* ------------------------ */

/* ------------$$$------------ */
//Преобразование типов

// let age = 'idk';
// alert (typeof age); //string
// newAge = Number(age); // string -> number
// alert (typeof newAge); // number как тип данных
// alert (newAge); // NaN как значение
// alert (String(newAge)); // NaN остался, исходное значение мы потеряли

//Надеюсь понятен принцип и последствия таких приведений
/* ------------------------ */

/* ------------$$$------------ */
/* ------------$$$------------ */

// Базовые операторы, математика

//  Взятие остатка %
// alert( 5 % 2 ); // 1, остаток от деления 5 на 2
// alert( 8 % 3 ); // 2, остаток от деления 8 на 3

// alert(4 + 4 + 2); // 10
// alert('4' + 4 + 2); // 442
// alert(4 + '4' + 2); // 442
// alert(4 + 4 + '2'); // 82

// alert( 6 - '2' ); // 4, '2' приводится к числу
// alert( '6' / '2' ); // 3, оба операнда приводятся к числам
/* ------------------------ */

/* ------------$$$------------ */
//Чему будут равны переменные a, b, c и d в примере ниже?

// let a = 1, b = 1;

// let c = ++a; // ?
// let d = b++; // ?
// решение
// Ответ:

// a = 2
// b = 2
// c = 2
// d = 1
// let a = 1, b = 1;

// alert( ++a ); // 2, префиксная форма возвращает новое значение
// alert( b++ ); // 1, постфиксная форма возвращает старое значение

// alert( a ); // 2, значение увеличено один раз
// alert( b ); // 2, значение увеличено один раз
/* ------------------------ */

/* ------------$$$------------ */
//Чему будут равны переменные a и x после исполнения кода в примере ниже?

// let a = 2;

// let x = 1 + (a *= 2);
// решение
// Ответ:

// a = 4 (умножено на 2)
// x = 5 (вычислено как 1 + 4)
/* ------------------------ */

/* ------------$$$------------ */
//Какой результат будет у выражений ниже?

// "" + 1 + 0
// "" - 1 + 0
// true + false
// 6 / "3"
// "2" * "3"
// 4 + 5 + "px"
// "$" + 4 + 5
// "4" - 2
// "4px" - 2
// "  -9  " + 5
// "  -9  " - 5
// null + 1
// undefined + 1
// " \t \n" - 2
// Подумайте как следует, запишите ответы и сверьтесь с решением.

// решение
// "" + 1 + 0 = "10" // (1)
// "" - 1 + 0 = -1 // (2)
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = "  -9  5" // (3)
// "  -9  " - 5 = -14 // (4)
// null + 1 = 1 // (5)
// undefined + 1 = NaN // (6)
// " \t \n" - 2 = -2 // (7)
// (1)Сложение со строкой "" + 1 преобразует 1 к строке: "" + 1 = "1", и в следующем случае "1" + 0 работает то же самое правило.
// (2)Вычитание - (как и большинство математических операторов) работает только с числами, пустая строка "" приводится к 0.
// (3)Сложение со строкой превращает число 5 в строку и добавляет к строке.
// (4)Вычитание всегда преобразует к числу, значит строка " -9 " становится числом -9 (пробелы по краям обрезаются).
// (5)null становится 0 после численного преобразования.
// (6)undefined становится NaN после численного преобразования.
// (7)Пробельные символы, такие как \t и \n, по краям строки игнорируются при преобразовании в число, так что строка " \t \n", аналогично пустой строке, становится 0 после численного преобразования.
/* ------------------------ */

/* ------------$$$------------ */
//Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.

// Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).

// В чём ошибка? Исправьте её. Результат должен быть 3.

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+ a+ +b); // 12
// alert(Number(a) + Number(b));

// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);

// alert(a + b); // 3

/* ------------------------ */
/* ------------------------ */

/* ------------$$$------------ */
// Операторы сравнения
// важность: 5
// Каким будет результат этих выражений?

// 5 > 4
// "ананас" > "яблоко"
// "2" > "12"
// undefined == null
// undefined === null
// null == "\n0\n"
// null === +"\n0\n"
// решение
// 5 > 4 → true
// "ананас" > "яблоко" → false
// "2" > "12" → true
// undefined == null → true
// undefined === null → false
// null == "\n0\n" → false
// null === +"\n0\n" → false
// Разъяснения:

// Очевидно, true.
// Используется посимвольное сравнение, поэтому false. "а" меньше, чем "я".
// Снова посимвольное сравнение. Первый символ первой строки "2" больше, чем первый символ второй "1".
// Специальный случай. Значения null и undefined равны только друг другу при нестрогом сравнении.
// Строгое сравнение разных типов, поэтому false.
// Аналогично (4), null равен только undefined.
// Строгое сравнение разных типов.
/* ------------------------ */

/* ------------$$$------------ */
// Условное ветвление: if, '?' Задачи

// Задача 1
// if (строка с нулём)
// важность: 5
// Выведется ли alert?

// if ("0") {
//   alert( 'Привет' );
// }
// решение
// Да, выведется.

// Любая строка, кроме пустой (а строка "0" – не пустая),
// в логическом контексте становится true.

// Можно запустить и проверить:

//Задача 2

// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

// let name = prompt("Какое «официальное» название JavaScript?", "");
// if(name == "ECMAScript")  {
//     alert("Верно")
// } else {
//     alert("Не знаете? ECMAScript!")
// }          Ёфффффтттттттттаааааааааммммммммммммммм

//Задача 3

// let number = prompt("Пажалуйста число", "");
// if(number > 0 ) {
//     alert(1)
// } else if (number < 0) {
//     alert(-1)
// } else  {
//     alert(0)
// }

//Задача 4

// let result;
// if (a + b < 4) {
//     result = "Мало";
// } else {
//     result = "Много"
// }
// console.log(result);

// let = result;
// let (a + b < 4) ? "Мало" : "Много";

// result = (a + b < 4) ? 'Мало' : 'Много';

// let message;
// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// let message = (login == 'Сотрудник') ? 'Привет' :
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина' :
//   '';

// message = (login == 'Сотрудник') ? 'Привет' ? (login == 'Директор') ? 'Здравствуйте' (login == '') ? 'Нет логина' : " ";

// const temp = [0,1,2,3,4,5,6,7,8,9,10];

// let number = temp.map(item => {
//     console.log(item);
// })

// const Message = (props) => {
//     return <div>{props.message}</div>
// }
// let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
// let messagesElements = messages.map(m => <Message massage={m.massage} id={d.id} />);
