// let instructor = 'Anis'

// if(instructor === 'Anis'){
//     console.log('Да')
// }else{
//     console.log('Нет')
// }

// let favoriteFood = prompt('Какая ваша любимая блюда')

// if(favoriteFood==='пицца'){
//     alert('Вау! Я тоже люблю пицца')
// }else{
//     alert('Круто! Я люблю шоколадний торт!!!')
// }

//    let guess = prompt('Угадай! О каком числе я думаю?')
// if(guess ==='7'){
//    alert ('Правильно!')
//   }else{
//     alert('Неправильно!')
// } /// ин якта мисол

//   guess ==='7' ? console.log('Правильно!') : console.log('Неправильно!') // инаш 2-умаш хардаш якхел

// let love = prompt('Salohiddin tu kira giriftan mekhohi??')
// if(love ===  'Malika'){
//     console.log('Yofti! Kalat kor mekaras')
// }else if(love === 'Bunafsha'){
//    console.log('In vrode meshad')
//    }else{
//     console.log('Ne nayfti tuba nameshad')
//    }    // Misoli khudam

// let i = 0;
// do {
// console.log(i)
//     i++
// } while(i < 5 )

// let numbers = [1,2,3,4]
// for(let num of numbers){
//     console.log(num)
// }

// const myFunk = () =>{
//     console.log('Man Ahliddn')
//     console.log('InShoOLLOH'+ ' Programmist'+ ' Mesham')
//     console.log('Harakat Kun!! Meshi')
// }
// myFunk()  // in hamtu Strelochni function az khudam =>

// const myFunk = (a,b,c) => a*2*b/c
// console.log(myFunk(6,8,10) ) // Cтрелочние функции =>

// function calculateValue(a,b,c){
//     return [
//     a+b,
//     a*b,
//     a*c
//     ]
// }
// const [sum,sup,sur] =calculateValue(2,4,6)
// console.log(sum,sup,sur)// массивба буромад чавобои мисолхо

// const person = {
//   name:'Ahliddin',
//   age:19,
//   adress:{
//       country:'Arabia',
//       city:'Dubai'
// }
// }
// const {name,age,adress:{
//     country,
//     city:homeTown//инхел нома алиш кара мешад
// }}= person
// console.log(name,age,country,homeTown)

// // const{name,...info} = person
// // console.log(name,info) //=>>>>> якта дигар вариант ки хамаша номаша надоним info ёри метият

// const cityRussia = ['Moskow','Kazan','Soji','Samara']
// console.log(cityRussia) //инчаба хамаша кавс кати мебурорад
// console.log(...cityRussia)//инчаба бошад хамаша нагз бе хичи мебурорад агар ки console.log-бошад (...)

// const populationCityRussia = {
//     Moscow:10,
//     Kazan:8,
//     Soji:6,
//     Samara:4
// }
// // console.log({...populationCityRussia})
// const populationCityEuropa = {
//     Berlin:11,
//     Madrid:9,
//     Itail:7,
//     Isaland:5
// }
//   console.log({...populationCityRussia,...populationCityEuropa})
//   console.log({...populationCityEuropa,...populationCityRussia})//инчаба ранги болонги (...) мони агар хато мегуд инхел каран даркор

// const numbers = [5,6,4,8,50,88]
// console.log(Math.max(...numbers)) //=>>>. inashba inkhel karan darkor!!!!
// console.log(Math.max(10,11,12,13)) //=>>>> inba max a meburorad

// function sum(a,b, ...rest){
//     return a+b + rest.reduce((a,i) => a + i ,0)
//  sum();
// }
// const numbers = [100,-2,6,4.5,5,20,55]
// console.log(sum(...numbers)) // бо воситаи  rest.reduce((a,i) => a + i ,0) чанд ракаме бошад чамъ мекунад
// const numbers = [1,2,6,4,5,20,55]
// const [a,b,... other] = numbers
// console.log(a,b,...other) //ин пример other) дигар ракамои мондагира мегуд

// // const person = {
// //     name:'Max',
// //     age:22,
// //     city:'Moscow',
// //     country:'Russia'
// // }
// // const {name,age,...ahliddin}=person
// console.log(name,age,ahliddin)  // ба чои ahliddin дигар чи кунам мешуд мондагихоша мегуд

// const a=15
// // if(a>11){
// //     console.log('ahliddin')
// // }else{
// //     console.log('Amriddin')
// // }
// хардуш як кора мекунд
// a>19 ? console.log('ahliddin'): console.log('Amriddin'),,
// хамаш як кора мекунд
// console.log( a>13 ?  'ahliddin' : 'Amriddin')
// хамаш як кора мекунд
// alert( a>19 ?  'ahliddin' : 'Amriddin')

// const array = ['',1,null,undefined,'text','1',5,'010'];
// const result = array
// .map(value => Number(value))
// .reduce((result,value)=>{
//     if(result<value)result = value;
//     return result;
// },0);
// console.log(result);

// const people=
//[
//     {name:'Владилен', age:25, budget:40000},
//     {name:'Ахлиддин', age:19, budget:50000},
//     {name:'Мухаммад', age:21, budget:10000},
//     {name:'Сами', age:42, budget:8000},
// ]
// for (let person of people)
// console.log(person) /// inba hamash meburod

//console.log(Math.floar(5));
// const myNember = 2.459
// console.log(myNember.toFixed(1))

// const names = ['Ahliddin',"Shamsiddin",'Muhiddin','Amriddin']
// names.shift()
// console.log(names)

// if ('Ahliddin' != 'Amriddin'){
//     console.log('Fahmidosi Javascripta')
// }else{
//     console.log('Natonisti')
// }

// for (let i = 0; i < 50; i++){
//     if(i % 2 !== 0)
//     console.log(i);
// } // факат токаша мебурорад

// let i = 5
// while (i>=1){
//    console.log(i)
//    i--
// }

// /*1)*/ function sum (x,y){
//     console.log(x * y)
// }
// sum(2,5)  // ин хардуш 1 2 як маъно дорад

// 2) function sum (x,y){
//     return x * y
// }
// console.log(sum(2,5)) // ин хардуш 1 2 як маъно дорад

//  let myObject = {
//     name:'Ahliddin',
//     surname:'Mazbutov',
//     age:19,
//     proffetion:'Programmist',
//     getFullName: function (){
//         return this.name +' '+ this.surname;
//     }
//  }
//  myObject.age = 52
// console.log(myObject.getFullName()) // рохе ки кофтос буди ному фамилияра  чихел мебурори ёфти!!!

// const names = ['Ahliddin','Ozod','Nabi','Rabi']
// names.join('')
// console.log(names)

// function createCalcFunction(n){
//    return function(){
//         console.log(1000 * n)
//     }
// }
// const calc = createCalcFunction(42)
// calc()  // амали зарбро ичро мекунад

// window.setTimeout(function (){
//     console.log('Ahliddin harakat kun programmist meshi')
// },2000)  // бехтарин приём

// window.setTimeout(function(){
//     console.log('Ahliddin Odamoi ')
// },1000)

// window.setTimeout(function(){
//     console.log('Kalonsol megud ki ')
// },2000)

// window.setTimeout(function(){
//     console.log('33 sola man programmist ')
// },3000)

// window.setTimeout(function(){
//     console.log('mesham ')
// },4000)

// window.setTimeout(function(){
//     console.log('tu shuda nametonimi ')
// },5000)

// window.setTimeout(function(){
//     console.log('IN JI GAP??????')
// },6000)

// console.log('Mazbutov Ahliddin')

// firstName = prompt('Iltimos nomiaton jist')
// lastName = prompt('Iltimos familiyaton jist')
// console.log('Salom Muhtaram ' + lastName + ' ' + firstName)

// let nomiodam = 'Ahliddin'
//     if(nomiodam === 'Ahliddin') {
//          console.log('Rost')
//     }else{
//         console.log('Ne')
//     }

// let instructor = 'Anis'
// if(instructor === 'Anis'){
//     console.log('Да')
// }else{
//     console.log('Нет')
// }

// const programmist = 'Ahliddin'
// if(programmist ==! 'Ahliddin'){
//     console.log('Yofti')
// }else{
//     console.log('Ne Hamun Odama yov')
// }

// const nom = 'Ahliddin'
// const rakam = 15
// const rakam2 = '04'
// const logika = true
// const objackt = {}
// console.log(typeof objackt)

// const cars = ['Mazda','Mersedes','Niva']
// for(car of cars){
//     console.log(car)
// }

// const myNames = ["Николас", "Эндрю", "Максвелл", "Морган"];
// console.log(myNames.join(" "));
// // join(" ") ==>>>>>>> бо воситаи ин хамаш бе кавс консолеба мебурод

// for (let i=100; i>=10; i-=20){
//     console.log(i)
// } //===>>>>>>>>>>>>>>> мисолхои чава

// let  i = 0
// while(i<=10){
//    console.log(i)
//     i++
// }

// let num1 = 15
// let num2 = 04
// let bool = true
//  if(!bool || num1 || !num2){
//     console.log('Rost')
// }else {
//     console.log('khato');
// }

// let res = 3
// switch (res){
//     case 1:
//       alert('res is 1');
//          break;
//     case 2:
//       alert('res is 2');
//          break;
//     case 3:
//       alert('res is 3');
//         break;
//     default:
//       alert('res is uncnown')
// }// агар res = 1 бощад alert('res is 1');-ба ин мебурод ва хамаш такрор мешад 1,2,3 иначе ин мебурод alert('res is uncnown')

// function summ(a,b){
//  console.log(a+b)
//  console.log(a-b)
//  console.log(a*b)
//  console.log(a/b)
// }
// summ(1,2)  // in function

// const cat ={}
//    cat['name'] ='Nota';
//    cat['legs'] = 3;
//    cat['lastName']='Mota';
// console.log(cat);

// var cat = {};
// cat["legs"] = 3;
// cat["name"] = "Гармония";
// cat["color"] = "Черепаховый";
// console.log(cat);

// const person={
//     name:'Ahliddin',
//     age:19,
//     lastName:'Asliddin',
//     fullName:'Mazbutov'
// }
// console.log(person);

// var myCrazyObject = {
//     "name": "Нелепый объект",
//     "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
//     "random animal": "Банановая акула"
//     };
//     console.log(myCrazyObject);

// const person={
//     name:'Ahliddin',
//     age:19,
//     fullName:'Mazbutov',
//     adress:{
//         street:'Shifokoron',
//         city:'Istaravshan',
//         country:'Tajikistan'
//     },
//     NameAge: function(){
//           return this.name + ' it is fullName ' + this.fullName;
//     }
// }
// console.log(person. NameAge());

// (function(){
//     console.log('Darsi naw ES6 to est 2015')
// }()) // Аноноимное Функции

// function name(){
//     console.log('Darsi naw ES6 to est 2015')
// }  // Аноноимное Функции хардуш якхел
// name()

// const name = () => console.log('Cterelojnie function')
// name()

// const person = () => 'Digar sterelojmie fuction'
// console.log(person())

// for (let i = 0; i <= 50; i ++){
//     console.log('Iron Man, Mark - ' + i)
// }

// const a = 1
// let b = 1
// let c = 2
// let d = 3
// let e = 4
// let f = 5
// // let g = n
// function calculateValue(){
//     console.log(a/b)
//     console.log(a/c)
//     console.log(a/d)
//     console.log(a/e)
//     console.log(a/f)
//     // console.log(a/n)
// }
// calculateValue()

// function calculate(a,b){
//     console.log(a+b)
//     console.log(a-b)
//     console.log(a*b)
//     console.log(a/b)
// }
// calculate(2,4)

// facade.js

// class Complaints{
//     constructor(){
//         this.complaints = []
//     }
//     reply(complaint) {}
//         add(complaint) {
//             this.complaints.push(complaint)
//             return this.reply(complaint)
//         }
//     }
// class ProductComplaints extends Complaints{
//     reply({id,customer,details}){
//         return 'Product: ${id}: ${customer} (${details})'
//     }
// }

// class ServiceComplaints extends Complaints{
//     reply({id,customer,details}){
//         return 'Service: ${id}: ${customer} (${details})'
//     }
// }

// class ComplaintRegistry {
//   register(customer,type,details){
//       const id = Date.now()
//       let complaint

//       if(type === 'Service') {
//          complaint = new ServiceComplaints()
//       } else {
//           complaint = new ProductComplaints()
//       }
//       return complaint.add({id,customer,details})
//   }
// }

// const registry = new ComplaintRegistry()

// console.log(registry.register('Elena','product','вылазит ошибка'))

//модели мошин бо нархаш

// class Car {
//    constructor(model, price) {
//        this.model = model
//        this.price = price
//    }
// }

// class CarFactory {
//    constructor() {
//        this.cars=[]
// }

// create(model,price) {
//     const candidate = this.getCar(model)
//     if (candidate) {
//         return candidate
//     }

//     const newCar = new Car(model, price)
//     this.cars.push(newCar)
//     return newCar
// }

// getCar(model) {
//     return this.cars.find(car => car.model === model)
// }
// }
// const factory = new CarFactory()

// const bmwX6 = factory.create('bmw',10000)
// const audi = factory.create('audi',15000)
// const bmwX3 = factory.create('bmwX3',5000)
// console.log(bmwX6)
// console.log(audi)
// console.log(bmwX3)

//hisob kardan
// class MySum{
//     constructor(initialValue = 42){
//         this.sum = initialValue
//     }
//     add(value){
//         this.sum += value
//          return this
//     }
// }

// const sum1 = new MySum()
// console.log(sum1.add(8).add(55).add(88).sum)
// const sum2 = new MySum()
// console.log(sum2.add(98).add(21).sum)

// мисоли кубба бардоштан
// class MyMath {
//     constructor(initialValue = 0){
//         this.num = initialValue
//     }
//     square(){
//         return this.num ** 2
//     }
//     cube(){
//         return this.num ** 5
//     }
// }
// class Command{
//     constructor(subject){
//         this.subject = subject
//         this.commandsExecuted = []
//     }
//     execute(command){
//         this.commandsExecuted.push(command)
//         return this.subject[command]()
//     }
// }
// const x = new Command(new MyMath(2))

// console.log(x.execute('square'))
// console.log(x.execute('cube'))
// console.log(x.commandsExecuted)

// sms firistodan
// class User {
//     constructor(name){
//         this.name = name
//         this.room = null
//     }

//     send(message,to){
//         this.room.send(message,this,to)
//     }

//     receive(message,from){
//         console.log(`${from.name} => ${this.name}:${message}`)
//     }
// }
// class ChatRoom{
//     constructor(){
//         this.users = {}
//     }
//     register(user){
//         this.users[user.name] = user
//         user.room = this
//     }
//     send(message,from,to){
//         if(to){
//             to.receive(message,from)
//         }else{
//             Object.keys(this.users).forEach(key =>{
//               if(this.users[key] !== from){
//                   this.users[key].receive(message,from)
//               }
//             })
//         }
//     }
// }
// const vlad = new User('Vladilen')
// const lena = new User('Elena')
// const igor = new User('Igor')

// const room = new ChatRoom()
// room.register(vlad)
// room.register(lena)
// room.register(igor)

// vlad.send('Hello', lena)
// lena.send('Hello hello!', vlad)
// igor.send('Vsem privet',igor)

// const person = new Object ({
//     name:'Maxim',
//     age:25,
//     greet: function (){
//         console.log('Greet!')
//     }
// });

// Object.prototype.sayHello = function() {
//     console.log('Hello!');
// }

// const lena = Object.create(person);
// lena.name = 'Elena' //==>> ин комебтария будагишба поёнги лексия мешад

// const str = new String('I am string');// ==>>>> инчаба кадомаша консоле ба зани мебурод мисол lena.name зани каносолеба
// // "Maxim" мебурод хамаш аз ягдигариш вобаста аст

// function hello() {
//     console.log('Hello',this)
// }
// hello()

// const name = {
//     name:'Ahliddin',
//     age:19,
//     hoppy:'Programmist'
// }
// console.log(name) // objact

// const array = [1,2,3,4,5]
// function multBy(arr,n){
//     return arr.map(function(i){
//         return i*n
//     })
// }
// console.log(multBy(array,15)) //ракамора 15ба зарб карос

// const array = [1,2,3,4,5]
// Array.prototype.multBy = function(n) {
//     return this.map(function(i){
//         return i * n
//     })
// }
// console.log(array.multBy (20))// ракамора 20ба зарб карос*/

// function createCalcFunction(n){
//     return function(){
//         console.log(1000 * n)
//     }
// }
// // createCalcFunction(42)
// const calc = createCalcFunction(42)
// calc(45,12,75) // 42*1000 ба зарб карам

// function createIncrementor(n){
//     return function(num){
//         return n + num
//     }
// }

// const addOne = createIncrementor(45)
// console.log(addOne(10))

// const addTen = createIncrementor(10)
// console.log(addTen(20)) // болою поёна чам кардос

// function urlGenerator(domain) {
//     return function(url) {
//         return 'https://${url}.${domain}'
//     };
// };

// const comUrl = urlGenerator('com');
// const ruUrl = urlGenerator('ru');

// console.log(comUrl('google'));
// console.log(comUrl('netflix'));

// console.log(ruUrl('yandex'));
// console.log(ruUrl('vkantalte'))

// console.log(comUrl('vkantalte')) // chrome - ba didan darkor

// function bind(context, fn){
//     return function(...args){
//         fn.apply(context.args)
//     }
// }

// function logPerson(){
//     console.log('Person:${this.name}, ${this.age},${this.job}')
// }
// const person1 = {name:'Ahliddin', age:19, job:'Frondend'}
// const person2 = {name:'Muatarra', age:18, job:'Web-zero'}
// bind (person1,logPerson)()
// bind (person2,logPerson)() // chrome - ba didan darkor

// Kursi Ilmhona A Akbar

// let days = "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday";
// let splitWords = days.split(",");
// console.log(splitWords[4]);  // split худи массив боин кор мекунад

// let color = "green";
// switch(color) {
//     case "green":
//         alert("this is green");
//         // break;
//     case "red":
//         alert("this is red");
//         // break;
//     case "grey":
//         alert("this is grey");
//         // break;
//     case "blue":
//         alert("this is blue");
//         // break;
//     default:
//         alert("not found color");
// } // swich case  хамихел ки якта условия мети case кати проверка кардан мегири то буромаданаша

// ----------------filter ----------//
const people = [
  { name: "Владилен", age: 25, budget: 4000 },
  { name: "Игорь", age: 27, budget: 6000 },
  { name: "Олег  ", age: 24, budget: 7000 },
  { name: "Елена", age: 21, budget: 3000 },
];

// const adults = people.map((person) => person.budget);
const adults = people.filter((person) => person.age >= 18);

console.log(adults);
