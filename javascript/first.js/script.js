const cars = ['Mazda','Mersedes','Ford','Ahliddin','Ozod']
for(let car of cars){
    console.log(car)
} // инчаба  for(let car of cars) -->>> ин значени хамаш мебурод  console.log(car)

const stringInt = '40'
const stringFloat = '40.42'
console.log(Number.parseInt(stringInt) + 2)
  /// >>> инчаба мо бояд 42 бурорем ва баровардем бо воситаи ин мисол

// const name = 'Владилен' 
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(4))
// console.log(name.indexOf('д'))
// console.log(name.startsWith('влад'))
// console.log(name.startsWith('Влад'))
// console.log(name.endsWith('ен!'))
// console.log(name.repeat(10))
// const String= '       password       '
// console.log(String.trim())
// console.log(String.trimLeft())
// console.log(String.trimRight())

// let counter = 0
// const interval = setInterval(function(){
//     if (counter === 10){
//         clearInterval(interval)
//     }else{
//         console.log(++counter)
//     }
// },1000) 

//  function greet(name){
//      console.log('Привет - ', name)
//  }
//  const arrow = (name) =>{
//      console.log('Привет - ', name)
//  }
//  greet('Ahliddin')  // маъноии ин ва маънои поёнанги якхел 

// const arrow2 = name => console.log('Привет - ', name)
// arrow2('Vladilen') // маънои хардуш якхел

// const pow2 = num => ** 2
// console.log(pow2(5)) Chrome Man kabul nakard

// const sum = (a=50,b=a*3) => a+b
// console.log(sum(40,5))
// console.log(sum())

// const people = [
//     {name:'Vladilen',budget:4200},
//     {name:'Elena',budget:3500},
//     {name:'Victoria',budget:1700}
// ]
// const person = people.find(person=>person.budget === 3500)
// console.log(person) // инчаба масъала хал караги 3500 будчет доштагиша ёв


// const timeout = setTimeout(() => {
//     console.log('After timeout')
// }, 2500)

// clearTimeout(timeout)
 
// const interval = setInterval(() => {
//     console.log('After timeout')

// },1000) 
// clearInterval(interval) // ('After timeout') хамин чиз такрор шудос суръти баланд кати агар бо ягонта консоле кущ кунимам мешад хардуш 
// // такрор мешад

// var furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];
// var scalyAnimals = ["Удав", "Годзилла"];
// var featheredAnimals = ["Ара", "Додо"];
// var allAnimals = furryAnimals.concat(scalyAnimals,featheredAnimals);
// console.log(allAnimals)
// console.log(furryAnimals)

// const heading = document.getElementById("hello")
// const heading2 = document.querySelector("h2")

// console.dir(heading2)

// const h2List = document.querySelectorAll('h2')
// console.log(h2List)

// const heading3 = h2List[h2List.length -1]
// console.log(heading3)


// setTimeout(()=>{
//     addStylesTo(heading,'Ahliddin',color="green",bgColor="grey")
// },1500)

// setTimeout(()=>{
//     addStylesTo(heading2,'Mehnat Kun!',color="yellow",bgColor="blue",fontSize="3rem")
// },2000)

// setTimeout(()=>{
//     addStylesTo(heading3.children[0],'javascript ссылка',color="Blue",bgColor="green")
// },2500)

// function addStylesTo(node, text){
//     node.textContent=text
//     node.style.color=color
//     node.style.textAlign='center'
//     node.style.backgroundColor=bgColor
//     node.style.padding='2rem'
//     node.style.display='block'
//     node.style.width='100%'
//     if(fontSize){
//         node.style.fontSize = fontSize 
//     }
// }

// heading.onclick = () =>{
//     if (heading.style.color ==='red'){
//         heading.style.color = '#000'
//         heading.style.backgroundColor = '#fff'
//     }else{
//         heading.style.color = '#fff'
//         heading.style.backgroundColor = '#000'
//     }
// }

// heading2.addEventListener('dblclick',()=>{
//     if (heading2.style.color ==='yellow') {
//         heading2.style.color = '#000'
//         heading2.style.backgroundColor = '#fff'
//     } else {
//         heading2.style.color = 'yellow'
//         heading2.style.backgroundColor = '#000'
//     }
// })