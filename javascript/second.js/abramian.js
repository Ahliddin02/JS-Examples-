   //Mix26◦//
// function sum (x){
//     let s = 0;
//     for (i = 0; i < x.length; i++){
//        s += x[i]
//     }
//     return s
//  }
//  console.log(sum([1, 4, 5, 7, 9, 23, 14, 10])); 


// Mix27◦
// function mix27() {
//     let k=7;
//     let arr = [2,3,4,5,6,1,12,14,18,59,0];
//     let firstElement;
//     for(let i=0; i < arr.length; i++) {
//         if( arr[i] > k) {
//             firstElement=arr[i];
//             break;
//         }else {
//             arr-1;
//         }
//     }
//     return firstElement;
// }
// console.log(mix27());

//-x-//
// function mix27() {
//     let k=7;
//     let arr = [2,3,4,5,6,1,0];
//     // let arr1 = []
//     let firstElement;
//     for(let i=0; i < arr.length; i++) {
//         if( arr[i] > k) {
//             firstElement=arr[i];
//             // break;
//         // }else {
//         //     firstElement=arr.length-1;
//         }
        
//     }
//     if (firstElement = k){
//         firstElement = 0;
//     }
//     //// console.log(firstElement);
//     return firstElement;
// }
// console.log(mix27());


// // mix28();
// function mix28() {
//     let k=7;
//     let arr = [2,3,4,5,6,1,12,14,18,59,99,0];
//     let firstElement;
//     for(let i=0; i < arr.length; i++) {
//         if( arr[i] > k) {
//             firstElement=arr[i];
//             // break;
//         }else {
//             arr-1;
//         }
//     }
//     return firstElement;
// }
// console.log(mix28());


//-x-//
// function mix28() {
//     let k=20;
//     let arr = [7,9,10,14,19,65,89,97,0];
//     let firstElement;
//     for(let i=0; i < arr.length; i++) { 
//         if(arr[i] > k) {
//             firstElement=arr[i];
//             break;
//         }else {
//             firstElement=arr.length-1;
//         }
//     }
//     //// console.log(firstElement);
//     return firstElement;
// }
// //// mix27();
// console.log(mix28());


// mix 29;
// function mix29() {
//     const B = 7.14;
//     let result = [];
//     const arr = [1,2,4,5,7.05,8,9,10];
//     console.log(arr);
//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] == B){
//             result = arr;
//             break
//         }else if (arr[i] > B){
//             result = arr;
//               result.splice(i, 0, B)
//             break
//         }else {
//             result = arr;
//         }
//     }
//     return console.log(result);
// }
// console.log(mix29());


//-x-//
// mix29();
// let B = Math.floor(Math.random() * 10) + 1;
// console.log("B ", B);
// let N = Math.floor(Math.random() * 20) + 1;
// console.log("N = ", N);

// for(i = 1; i < (N + 1); i++){
//     console.log(i);
// }  
// console.log();
// flag = true;
// for(i = 1; i < (N + 1); i++) {
//     // console.log(i);
// }
// if (i <= B && B <= i+1 && flag) {
//     console.log("B", B = "; " );
// }
// flag = false;


//mix 30;
// function mix30() {
//     const N = 8;
//     let K = 0;
//     const arr = [2,3,4,56,6,65,45,5,4];
//     console.log(arr);
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < arr[i-1]) {
//             arr[i]
//             K++
//             console.log(arr[i]);
//         }
//     }
//     console.log('K = ' + K);
// }
// mix30();



// mix29();
// let B = Math.floor(Math.random() * 20) + 1;
// console.log("B = ", B);

// let N = Math.floor(Math.random() * 20) + 1;
// let prev = N;
// flag = true;
// for(i = 1; i < (N + 1); i++);

//  N = Math.floor(Math.random() * 20) +1;

//     if(prev >= N) {
//         flag = false;
//     }
    // console.log(prev);
    // // Math.floor(Math.random(prev = "; "))
    // prev = N;
    // console.log(N);  

    // console.log("Result = ", flag);
  




// function name() {
//        let B = Math.floor(Math.random() * 5) +1;
//        let arr = [];
//        console.log("B = ", B);
//        for (let i = 0; i < B; i++) {
//            let rand = Math.floor(Math.random() * 20) +1
//             arr.push(rand)
//            console.log(rand);
//        }
//        console.log("arr", arr);
//        let result = !!arr.reduce((n, item) => n !== false && item >= n && item);
//        console.log("result: ", result);
       
// }
// name();

// //mix 38
// let numbers = [1, 2, 3, 4,5,6,7,8,9,10];
// console.log(Math.max(...numbers)); // 
// console.log(Math.min(...numbers)); // 




// mix46
// function bubble() {
//     let N = 10;
//     let arr = [];

//     for (let i = 0; i < N; i++) {
//         arr.push(Math.floor(Math.random()*N))
//     }

//     let main;
//     console.log(arr);
//     do {
//         main = false;

//         arr.forEach((item,i) => {
//             if(item > arr[i + 1]) {
      
//                 let temp= item;
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 main = true;
//             }
//         })
//     }while (main);
//     return console.log(arr);
// }
// bubble();


// 42
// let i = 5
// while (i>=1){
//    console.log(i)
//    i--
// }

//        -----Mix26-----

// let arr = [1,2.3,-3,40,55.45,-45.5,67.34,77,-77,787];
// function sum (){
// // let sum= arr.reduce((a,b) => a+b,0)
// // console.log(sum)

//  let summa= 0;
// for(let i=0; i < arr.length; i++){
//     summa += arr[i]

// }
// console.log(summa)

// }
// sum ();

//Mix27
//        -----Mix27-----

// Дано целое число K и набор ненулевых целых чисел;
//  признак его завершения — число 0. Вывести номер первого числа в наборе,
// большего K. Если таких чисел нет, то вывести 0

// function Mix27() {
//   const K = 1950;
//   console.log(K)
//   const arr = [12,333,343,3000,22343,3434,356,787,98,898,7890, 0];
//   console.log(arr)
//   // const arr = [2, 3, 0, 4, 5, 33, 1212, 434, 454, 454,0];
//   let firstNumber;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > K) {
//       firstNumber = arr[i];
//       break;
//     } else {
//       firstNumber = arr.at(-1);
//     }
//   }
//   console.log(firstNumber);
//   return firstNumber;
// }
// Mix27()
// function Mix27(){
//     const K = 1950;
//     const arr = [2392, 3, 0, 4, 5, 323]
//    const result = arr.find(el => el > K ) 
//    console.log(result)
//   }
//   Mix27();

//        -----Mix28-----
// Дано целое число K и набор ненулевых целых чисел;
//  признак его завершения — число 0.
//  Вывести номер последнего числа в наборе,
// большего K. Если таких чисел нет, то вывести 0.

// function Mix28() {
//   const K = 1950;
//   const arr = [12,333,343,3000,22343,3434,35546,7872,98,348922,7890, 0];
//   // const arr = [2, 3, 0, 4, 5, 33, 1212, 434, 594, 454,0];
//   let firstNumber ;
//   let max = []
//   let max1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > K) {
//     firstNumber = arr[i];
//      max1 = max.push(arr[i]);
//     } else {
//       firstNumber = arr.at(-1);
//     }
//   }
//   let lettesElArr = max.at(-1)
//   let result =  K > max ? firstNumber : lettesElArr
//   return    console.log(result);
//    }
// Mix28();



//        -----Mix29-----
// Дано вещественное число B, целое число N и набор из
// N вещественных чисел, упорядоченных по возрастанию. 
// Вывести элементы набора вместе с числом B, сохраняя упорядоченность выводимых
// чисел.

// test case:
//     input:
//         5
//         4 - [2, 3, 4, 5, 6]
//     oputut:
//         [2, 3, 4, 5, 6]


// function Mix29(){
// const B = 7.14;
//     const N = 8;
//     let result = [] ;
//     const arr =[1,2,4,5,7.05,8,9,10];
//     console.log(arr);
//     for(let i = 0; i < arr.length; i++){
//        if (arr[i] == B){
//           result = arr;
//           break
//        } else if (arr[i] > B){
//           result = arr;   
//              result.splice(i, 0 , B)
           
//           break
//         } else {
//           result = arr;
//         }
//     }
//      return  console.log(result);
//     // const filtered = arr.sort((a,b) => a -b).map(el =>  console.log(B , el))
// }
// Mix29();


//          -----Mix30-----
// Дано целое число N (> 1) и набор из N целых чисел.
// Вывести те элементы в наборе, которые меньше своего левого соседа, и
// количество K таких элементов.

// function Mix30(){
//     const N = 8 ;
//     let K = 0;
//     const arr =[2,3,4,56,6,65,45,5,4];
//     console.log(arr)
//     for(let i = 0; i < arr.length; i++){
//             if(arr[i] < arr[i-1]){
//                 arr[i]
//                 K++
//                 console.log(arr[i]);
//             }
//     }
//     console.log('K = ' + K)
// }
// Mix30()

//          -----Mix31-----

// Дано целое число N (> 1) и набор из N вещественных чисел. 
// Проверить, образует ли данный набор возрастающую последовательность.
//  Если образует, то вывести TRUE, если нет — вывести FALSE.

// function Mix31(){
//     let N = 10;
//   //  let array = [];
//    let arr = [1.2,2.3,3.6,4,5,6,7,8,10]
   
// //    for (let i=0; i < N; i++){
// //        array.push(Math.floor(Math.random()*N))
// //    }
// // console.log(array);
//         const isSorted = (array) => {
//             for (let i = 1; i < array.length; i++) {
//                 if (array[i] < array[i - 1]) {
//                     return false
//                 }
//             }
//             return true
//         }
// return console.log(isSorted(arr))
// }
// Mix31();


//          -----Mix32-----

// Даны целые числа K, N, а также K наборов целых чисел
// по N элементов в каждом наборе. Для каждого набора вывести сумму его
// элементов.

// Mix32();
// const K = 10;
//     const N = 5;
// const arr = [
//     [1,2,3,4,5],
//     [6,7,8,9,10],
//     [11,12,13,14,15],
//     [16,17,18,19,20],
//     [1,2,3,4,5],
//     [1,2,3,4,5],
//     [1,2,3,4,5],
//     [1,2,3,4,5],
//     [1,2,3,4,5],
//     [1,2,3,4,5]
// ];
// const calcArr = (array) => {
//     let obj = []
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i ; j < array[i].length; j++) {
//             const reduced = array[j].reduce((a, b) => a + b, 0)
//             obj.push(reduced)
//         }
//     }
//     return obj
// }
// console.log(calcArr(arr))

  //       -----Mix33-----

//   . [Proc4] Описать процедуру TrianglePS(a, P, S)
// , вычисляющую по
//   стороне a равностороннего треугольника его периметр P = 3·a и площадь S = a
//   2
//   ·
//   √
//   3/4 (a — входной, P и S — выходные параметры; все параметры являются вещественными). С помощью этой процедуры найти
//   периметры и площади трех равносторонних треугольников с данными
//   сторонами



// // ------------Mix33-----------
// const a= 3.1415;

// function TrianglePS(a){
//   let P = 3 * a;
//   let S = Math.pow(a,2) * Math.sqrt(3/4);
//   return console.log('Периметр P=' + P + '\n'+ 'Площадь S=' + S );

// }

// // console.log(TrianglePS(3.1415));
// console.log(TrianglePS(5));
// // console.log(TrianglePS(10.7));


//-------------Mix34------------

// Описать процедуру AddRightDigit(D, K), добавляющую к целому положительному числу K
//  справа цифру D (D — входной параметр
//     целого типа, лежащий в диапазоне 0–9, K — параметр целого типа,
//      являющийся одновременно входным и выходным). С помощью этой процедуры
//     последовательно добавить к данному числу K справа данные цифры D1 и
//     D2, выводя результат каждого добавления.
    


// function AddRightDigit(){
//     let K = prompt(Введите число K:,9);
//     let D = prompt(Введите число :,8);
//     let concat;
//     for (let i=0; i < 3; i++){
        
//          concat = ''+ D + K;
//          console.log(concat)
//     }
// }

// console.log(AddRightDigit());


//    -------------Mix 35 ---------------

// Описать функцию SumRange(A, B) целого типа, находящую
// сумму всех целых чисел от A до B включительно (A и B — целые). Если
// A > B, то функция возвращает 0. С помощью этой функции найти суммы
// чисел от A до B и от B до C, если даны числа A, B, C.
// function SumRange(A,B){
//     let arr = [];
//     let sum = 0;
//     for (let i=A; i<=B; i++){
//           if (A > B ){
//           return  arr = sum;
//           }
//           else {
//             arr.push(i)
//           }
//     }
//         sum = arr.reduce((a,b) => a + b ,0)
//         console.log(arr);
//         // console.log(sum)
//     return  sum ;
// }
// console.log(SumRange(1,5))
// console.log(SumRange(5,9))



//    -------------Mix 36 ---------------

//  Описать функцию IsSquare(K) логического типа, возвращающую TRUE, 
// если целый параметр K (> 0) является квадратом некоторого
// целого числа, и FALSE в противном случае. 
// С ее помощью найти количество квадратов в наборе из 10 целых положительных чисе

// function IsSquare(K){
//   if(K <= 0 ) {
//     return 0
//   }
//   let square = Math.sqrt(K);
//   let isSquare = square %2 === 0;
//   // console.log(isSquare)
//   if(Array.isArray(K)){
//      let resultSqrt = [];
//   for (let i = 0; i < K.length; i++){
//     let square = Math.sqrt(K[i]);
//     resultSqrt.push(square);
//   }
//       console.log( Корень из ${K} = ${resultSqrt})
//       return true
//   } else if(isSquare) {
    
//     console.log( Корень из ${K} = ${square});
//     return true
//   }
 
// return false;
// }
// // const arr =[4,9,16,25,36,49,64,81,100,121]
// console.log(IsSquare(-4))


//    -------------Mix 38 ---------------

// Дано целое число N и набор из N чисел. 
// Найти минимальный и максимальный из элементов 
// данного набора и вывести их в указанном порядке.
//1
// const arr =[4,9,16,25,36,49,64,-81,100,-1];
// function MaxMinArr(myarr){

//   function MyMin(myarr){
//       var al = myarr.length;
//     minimum = myarr[al-1];
//     while (al--){
//         if(myarr[al] < minimum){
//             minimum = myarr[al]
//         }
//     }
//     return minimum;
//   }; 
//   function MyMax(myarr){
//     var al = myarr.length;
//     minimum = myarr[al-1];
//     while (al--){
//         if(myarr[al] > minimum){
//             minimum = myarr[al]
//         }
//     }
//     return minimum;
//   };

//   return console.log( Minimum = ${ MyMax(myarr)}  Maximum = ${MyMin(myarr)});
// }
// MaxMinArr(arr);
  //2


//    -------------Mix 39 ---------------

// Дано целое число N и набор из N целых чисел. Найти
// номера первого минимального и последнего максимального элемента из
// данного набора и вывести их в указанном порядке.

// const arr =[4,9,16,25,36,49,64,-81,100,-1];
// // const sorted = arr.sort((a,b) => a-b);

// // const min = sorted.at(0);
// // const max = sorted.at(-1);
// const max = Math.max(...arr);
// const min = Math.min(...arr);

// const indexMin = arr.indexOf(min);
// const indexMax = arr.indexOf(max);
// console.log("Array = "+ [${arr}], '\n'+ "min = " + min, '\n'+"max = "+max ,'\n'+'index of Max = ' + indexMax,'\n'+'index of Min = ' + indexMin);



//    -------------Mix 40 ---------------

// Дано целое число N и набор из N чисел.
// Найти минимальное положительное число из данного набора.
// Если положительные числа в наборе отсутствуют, то вывести 0

// const arr =[41,9,16,25,36,49,64,-81,100,-1];
// function MinPlus(arr){
//  let minInArr ;
//    let min = arr.sort((a,b) => a - b);
//    for(let i = 0; i < min.length; i++){
//      if(min[i] > 0){
//       minInArr = min[i];
//       break
//      } else {
//        minInArr = 0;
//      }
//    }
//  return console.log(minInArr);
// }
// MinPlus(arr);

//    -------------Mix 41 ---------------

// Дано целое число N и набор из N целых чисел. Найти
// максимальное количество четных чисел в наборе, идущих подряд. Если
// четные числа в наборе отсутствуют, то вывести 0.

// const arr =[41,9,16,25,36,49,64,-81,100,-1];

// function eventNumbers(arr) {
//     let eventN = [];
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//         eventN.push(arr[i]);
//     }
//   }
//   console.log(eventN)
//   return console.log('максимальное количество четных чисел в наборе = '+eventN.length);
// }
// eventNumbers(arr);


//          -----Mix42-----
// Дан массив размера N. Вывести его элементы в обратном
// порядке
    // const ar =[1,2,3,4,5,6,7,8,9];

// function rev(){
//     //1
//     const reversed = [];
//     for(let i = 0; i < ar.length; i++){
//         reversed.push(ar[ar.length-i - 1]) 
//     }  
//     return reversed  
// }
// console.log(rev())
// // 2
// const revs = ar.reverse()
// console.log(revs)
//          -----Mix43-----
// Дан целочисленный массив размера N. Найти количество
// различных элементов в данном массиве.

// const arr = [45, 55, 55, 11, 22, 11,11,12,34,44,6,6,66];
// function variousElement(arr){
//     let variousEl = [];
//     variousEl.push(arr[0]);
//     arr.forEach((item,i) => {if(!(variousEl.indexOf(item) + 1)) variousEl.push(item);});
//     return variousEl;
// }
// let rezult = variousElement(arr)
// console.log(variousElement(arr));
// console.log(rezult.length)


//          -----Mix44-----

// Дан массив A размера N. Сформировать новый массив B того
// же размера по следующему правилу: элемент BK равен сумме элементов
// массива A с номерами от K до N.


// const A = [45, 55, 55, 11, 22, 11,12,34,44,66];

// function Mix44(A){
//   let sumA = A.reduce((a,b) => a + b ,0);
//   console.log(sumA)
//   let B = A.map((el,i) =>${ i + 1} ${sumA}  )
//   console.log(B);
// }
// // ?
// Mix44(A);

//          -----Mix45-----
// Дан массив размера N. Поменять местами его минимальный
// и максимальный элементы.
// const arr =[4,9,16,25,36,49,64,-81,100,-1];
// function SwapArr(arr){
// console.log(arr);
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);

//     const indexMin = arr.indexOf(min);
//     const indexMax = arr.indexOf(max);

//     console.log('max = ' + max + ' min = '+ min);
//    arr.splice(indexMin,1,arr.splice(indexMax,1,arr[indexMin])[0]);
    
//       console.log(arr)
// }

//     SwapArr(arr);


//          -----Mix46-----

// Дан массив A размера N (≤ 6).
// Упорядочить его по возрастанию методом сортировки простым
//  обменом («пузырьковой» сортировкой): просматривать массив, 
//  сравнивая его соседние элементы (A1 и A2, A2
//   и A3 и т. д.) и меняя их местами, если левый элемент пары больше правого;
//   повторить описанные действия N − 1 раз.
//    Для контроля за выполняемыми действиями выводить содержимое массива
//     после каждого просмотра.
//   Учесть, что при каждом просмотре количество анализируемых пар можно
//   уменьшить на 1

 //        -----Mix46-----



//   function bubbleSort() {
// let N = 10;

// let arr = [];

// for (let i=0; i < N; i++){
//     arr.push(Math.floor(Math.random()*N))
// }

//   let swapped;
//   console.log(arr);
//   do {
//     swapped = false;
    
//     arr.forEach((item, i) => {
//       if (item > arr[i + 1]) {
   
//         let temp = item;
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     })
//   } while (swapped);
//   return console.log(arr)
// }

// bubbleSort();


//          -----Mix47-----
// Дан целочисленный массив A размера N. Назовем серией
// группу подряд идущих одинаковых элементов, а длиной серии — количество 
// этих элементов (длина серии может быть равна 1). Сформировать
// два новых целочисленных массива B и C одинакового размера, записав в
// массив B длины всех серий исходного массива, а в массив C — значения
// элементов, образующих эти серии.


// const arr = [1,1,2,2,3,4,4,5,6,6,7,7,7,7,8,8,8,9,9];
// console.log(arr)
// let A = arr;
// function count(array){
//   return array.reduce((el, value) => {
//     return el[value] ? el[value]++ : el[value] = 1, el;
//   },{});
// }



// let KeyValues = count(A);
// let KeysOfObj = Object.keys(KeyValues);
// let ValuesOfObject = Object.values(KeyValues);
// console.log(ValuesOfObject)
// console.log(KeysOfObj);

 
// console.log(j)

//          -----Mix48-----
// Дана матрица размера M × N и целое число K (1 ≤ K ≤ M).
// Вывести элементы K-й строки данной матрицы.
// A = 3, B = 3;
// const K = 2;
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// console.log(matrix[K-1])


//          -----Mix49-----


// Дана матрица размера M × N. В каждом столбце матрицы
// найти максимальный элемент

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10, 11, 12],
//   [13, 14, 15],
//   [16, 17, 18]
// ];

//  let i = 0;
//  let max = 0;

//  let result = [];

//  while ( i< matrix.length ) {
     
//      for(let j = 0; j < matrix[i].length; j++ ){
//        if(matrix[i][j] > max ){
//          max = matrix[i][j]
//        }
//      }
//      result[i] = max;
//      max = 0;
//      i++
//  }

// let result1 = []
//  for(let i = 0; i <matrix.length; i++){
//   for(let j = 0; j < matrix[i].length; j++ ){
//     if(matrix[i][j] > max ){
//       max = matrix[i][j]
//     }
//   }
//   result1[i] = max;
//  }
//  console.log(result);
//  console.log(result1);




//          -----Mix50-----

// Дана матрица размера M × N. Поменять местами столбец
// с номером 1 и последний из столбцов, содержащих только положительные элементы. 
// Если требуемых столбцов нет, то вывести матрицу без
// изменений.


// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10, 11, 12],
//   [13, 14, 15],
//   [16, 17, 18]
// ];
// let arr = [];

// for(let i = 0; i < matrix.length; i++){
//   for(let j = 0; j < 1; j++){
    
//       console.log(matrix[i][j+2])
//       arr.push(matrix[i][j+2])
//   }
// }
// console.log(arr)
// let indexfirstEl = arr.indexOf(arr.at(0));
// let indexlastEl = arr.indexOf( arr.at(-1));
// let firstEl = arr.at(0);
// let lastEl =  arr.at(-1);
//   if(firstEl > 0 && lastEl > 0){
//     arr.splice(indexfirstEl,1,arr.splice(indexlastEl,1,arr[indexfirstEl])[0]);
//     console.log(arr)
//   } else {
//     console.log(arr)
//   }
//          -----Mix51-----

// Дана квадратная матрица A порядка M. 
// Найти сумму элементов каждой ее диагонали,
// параллельной главной (начиная с одноэлементной диагонали A1,M).
// const arr = [
//   [1, 3, 4, 2],
//   [4, 5, 3, 5],
//   [5, 2, 6, 4],
//   [8, 2, 9, 3]
// ];
// const diagonalProduct = arr => {
//   let product = [];
//   for(let i = 0; i < arr.length; i++){
//      for(let j = 0; j < arr[i].length; j++){
//         if(i !== j){
//            product.push(arr[i][j]);
//         };
//      };
//   };
//   return product.reduce((a,b) => a + b, 0);
// };
// console.log(diagonalProduct(arr));



//          -----Mix52-----



// Дана квадратная матрица порядка M. 
// Обнулить элементы матрицы, лежащие ниже главной диагонали.
// Условный оператор не использовать.

// const M = [
//   [1, 3, 4, 2],
//   [4, 5, 3, 5],
//   [5, 2, 6, 4],
//   [8, 2, 9, 3]
// ];
// for(let i = 0; i < M.length;i++){
//   for(let j = 0; j < i; j++)
//       M[i][j]=0;
// }
// console.log(M)


//          -----Mix53-----
// Дано четное число N (> 0) и символы C1 и C2. Вывести
// строку длины N, которая состоит из чередующихся символов C1 и C2,
// начиная с C1.

// const N = 10;

// const C1 = 'A';
// const C2 = 'B';
// let text = '';
// for(let i = 0; i < N; i++){
//   text += ${C1}${C2};
// }

// console.log(text)

//          -----Mix54-----

// Дана строка. Вывести строку, содержащую те же символы,
// но расположенные в обратном порядке.

// let str = 'Hello World!';
// let output = '';

// let words = str.split(' ');
// console.log(words)
// output += str.split('').reverse().join('') + ' ';
// console.log(output)


//          -----Mix55-----

// Дан символ C и строки S, S0. Перед каждым вхождением
// символа C в строку S вставить строку S0.
// let S = 'I learn JavaScript';

// let S0 = 'b';
// const C = 'a';
// let SS = S.split(' ');
// let S1 = Array.from(S)
// console.log(SS)

// let A = S1.length;

// for(let i=0;i < A ; i++){
//   if(S[i] === C) {
//   S1.splice(i,0,S0)
//   // S.padStart(i,S0)
    
//   }

// }

// console.log(A)


// console.log(S1.toString().split(',').join(''))


//          -----Mix56-----


// Дана строка, состоящая из русских слов, 
// разделенных пробелами (одним или несколькими).
//  Найти количество слов в строке.


// let str = ' Найти количество слов в строке';
// console.log(str);
// let counter = 0;
// str = str.replace(/[\s]+/gim, ' ')
// str.replace(/(\s+)/g, function () {
//   counter++;
// });

// console.log(counter)