// let user = "Ahliddin";

// let number = prompt("");
// if (number == 7) {
//   alert(4);
// } else if (number == 4) {
//   alert(7);
// } else {
//   alert(0);
// }

// const labels = {
//   4: 7,
//   7: 4,
//   default: 0,
// };

// const check = (e) => labels[e] || labels["default"];

// let number = prompt("");
// console.log(check(number));

// const people = [
//   { name: "Vladilen", age: "25", budget: 4000 },
//   { name: "Elena", age: "17", budget: 3400 },
//   { name: "Igor", age: "49", budget: 5000 },
//   { name: "Mikhail", age: "15", budget: 1800 },
//   { name: "Vasiliy", age: "36", budget: 3000 },
//   { name: "Max", age: "41", budget: 2300 },
// ];

//--------------->>
// for(let i = 0; i < people.length; i ++ ) {
//     console.log(people[i]);
// }

// for(let user of people) {
//     console.log(user);
// }
// <<----------

// forEach ------>>
// people.forEach(function(person) {
//     console.log(person);
// })

// people.forEach((person) => console.log(person));

// people.forEach(person => console.log(person));
// <<----------

//Map ---------->>
// const newPeople = people.map(person => {
//     return person
// })
// console.log(newPeople);

// const newPeople = people.map(person => (person));
// console.log(newPeople);

// const newPeople = people.map(person => person.age)
// console.log(newPeople);
// <<------------

// const isFresh = people.map(people.fruits ) {
//    return   console.log(isFresh)

// }

// const isFreshApple = people.map(person  => (person ));
// console.log(isFreshApple);

// const users = [
//   { name: "Ahliddin", age: 20, hobby: "book" },
//   { name: "Ali", age: 15, hobby: "fooball" },
//   { name: "Vali", age: 26, hobby: "laptop" },
//   { name: "Ayub", age: 18, hobby: "eat" },
//   { name: "Somon", age: 19, hobby: "Lunch" },
// ];

// const nameAge = users.map((user) => user.name && user.age);
// console.log(nameAge);

// const hobbys = users.map((user) => user.hobby);
// console.log(hobbys);

// const ages = users.map((user) => user.age * 2);
// console.log(ages);

// const names = users.map((user) => user.name);
// console.log(names);

// const arr = []

// let first = prompt("Кто там ?", Админ);

// alert(`Тебе ${first} лет!`); // Тебе 100 лет!

// alert(``);

// let name = prompt("Пожалуйста, представьтесь?", 100);
// alert(`Tu ${name} лет!`); // Тебе 100 лет!

// let first = prompt("");

// if (first == "Admin") {
//   alert("Parol");
// } else if (first == "") {
//   alert("Я вас не знаю");
// } else {
//   alert("Отменено");
// }

// let first = prompt("Кто там");

// if ("") {
//   prompt("Parol");
// } else if ("Я главный") {
//   alert("Здравствуйте");
// } else {
//   alert("Я вас не знаю");
// }

// let number = prompt("");

// let name = "Админ";

// prompt("Кто там");
// if (!first === "") {
//   alert("Я вас не знаю");
// } else {
//   alert("Отменено");
// }

// let first = prompt("Кто там");

// if (!first) {
//   alert("Отменено");
// } else if ((first = "Админ")) {
//   prompt(first = "Парол");
// } else if (!first){
//   alert("Отменено");
// } else if (q){

// }

// let first = prompt("Кто там");

// let parol = prompt("Парол");

// if (!first) {
//   alert("Отменено");
// } else if (first != "Админ") {
//   alert("я вас не знаю");
// } else if ((first = "Админ")) {
//   prompt((parol = "Парол"));
// } else if ((parol = "Я главный")) {
//   alert("зд");
// } else {
//   alert("Отменено");
// }

let first = prompt("Кто там");
let parol = prompt("Парол");

if (!first) {
  alert("Отменено");
} else if (first != "Админ") {
  alert("я вас не знаю");
} else if ((first = "Админ")) {
  alert("Здравствуйте");
} else if (!parol) {
  alert("Отменено");
} else if ((parol = "Я Главный")) {
  alert("не Здравствуйте");
} else if (parol != "Я Главный") {
  alert("Неверный пароль");
} else {
  alert("Отменено");
}

// let first = prompt("Кто там");

// if (!first) {
//   alert("Отменено");
// } else if (first != "Админ") {
//   alert("я вас не знаю");
// } else if ((first = "Админ")) {
//   alert("salom");
// } else {
//   alert("кто вы");
// }
