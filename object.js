// 61------object ki sari keys print kro
// let obj = {
//     name : "nida",
//     class : "procoder"
// }
// let objectkeys = Object.keys(obj)
// console.log(objectkeys);
// 62------object ki sari values print kro
// let obj = {
//     name : "nida",
//     class : "procoder"
// }
// let objectvalues = Object.values(obj)
// console.log(objectvalues);
// 63------object is empty
// let obj = {
//     name : "nida",
//     class : "procoder"
// }
// let keys = Object.keys(obj)
// if(keys.length ===0){
//       console.log('object is empty');

// } 
// else{
//     console.log('object is NOT empty');
// }
// 64---------object ma property exists
// let obj = {
//     name : "nida",
//     class : "procoder"
// }
// console.log("class" in obj);
// 65---------object clone in js (shallow)
// let obj = {
//     name : "nida",
//     class : "procoder"
// }
// let shallowClone = {...obj}
// shallowClone.class = "web developer"
// console.log(shallowClone);
// 66-------------------nested object ma value find kro
// let obj = {
//     person1 :{
//         name :"nida",
//         hobbies:{
//             gamming : "football",
//             exercise :"gym"
//         }
//     }
// }
// let value = obj.person1.hobbies
// console.log(value);
// 67-------------Array of objects :ages>18 filter
// let array = [
//     {
//         name: "Nida",
//         age :19
//     },
//     {
//         name: "Ali",
//         age:15
//     },
//     {
//         name: "mesam",
//         age:25
//     }
// ]

// let result = array.filter((element,index)=>element.age>18)
// console.log(result);
// 67-------------Array of objects :highest price product
// let array = [
//     {
//         product: "Speaker",
//         price :1900
//     },
//     {
//         product: "airpods",
//         price:1500
//     },
//     {
//         product: "headphones",
//         price:2500
//     }
// ]
//   let highestPrice = 0
// array.forEach(element => {
// if(element.price > highestPrice){
//     highestPrice = element.price
// }
// });
// console.log(highestPrice);
// 67-------------Array of objects :highest rating product
// let array = [
//     {
//         product: "Speaker",
//         rating: 2.5

//     },
//     {
//         product: "airpods",
//         rating: 4
//     },
//     {
//         product: "headphones",
//         rating: 3.5
//     }
// ]
// let highestrating = 0
// array.forEach(element => {
//     if (element.rating > highestrating) {
//         highestrating = element.rating
//     }
// });
// console.log(highestrating);

// 70---------------------Student markes sy grade calculate
// let array = [
//     {
//         name: "Nida",
//         markes: 550
//     },
//     {
//         name: "Ali",
//         markes: 470
//     },
//     {
//         name: "mesam",
//         markes: 3300
//     },
//         {
//         name: "faisl",
//         markes: 500
//     },
//     {
//         name: "Aleem",
//         markes: 240
//     },
//     {
//         name: "maria",
//         markes: 390
//     },
//         {
//         name: "fara",
//         markes: 310
//     },
//     {
//         name: "billal",
//         markes: 10
//     },
//     {
//         name: "heesa",
//         markes: 230
//     }
// ]
// array.forEach(element => {
//     let percentage = Math.floor(element.markes / 600 * 100)
//     if (percentage >= 80 && percentage <=100) {
//         console.log(` ${element.name} Congratulations you got grade A`);
//     }
//     else if (percentage >= 70 && percentage <=80) {
//         console.log(` ${element.name} EXECLLENT you got grade B`);
//     }
//     else if (percentage >= 60  && percentage <=70) {
//         console.log(` ${element.name} WELL DONE you got grade C`);
//     }
//     else if (percentage >= 50 && percentage <= 60) {
//         console.log(` ${element.name} fair you GOT GRADE D`);
//     }
//     else if (percentage >= 40  && percentage <=50) {
//         console.log(` ${element.name} fair you GOT GRADE E`);
//     }
//     else if(percentage>100){
//         console.log(`${element.name} Sorry your markes entered are WRONG TRY AGAIN LATER`);

//     }
//     else {
//         console.log(`${element.name} you are FAIL`);

//     }

// });
// 71---------------Library Object ma book find
// let Library = [
//    {title : "Sunnah Rasool PBUH",
//     id:1
//    },
//    { title : "where Earth comes from",
//     id:2
//    },
//    { title:"serat al baliga",
//     id:3
//    }
// ]
// let Book = "Sunnah Rasool PBUH"
// let find = Library.find(book =>
//     book.title === Book

// )
// if(find){
// console.log(find);
// }
// else{
//     console.log('NOT FOUND');

// }

// 72 -----------todolist k data logic create kro

// let tasks = {}

// let addbtn = document.getElementById('add')
// let inputcount = 0

// function addTasks() {
//     let input = document.getElementById('input')
//     let inputValue = input.value
//     if (inputValue.trim() !== '') {

//         let key2 = inputcount
//         tasks[key2] = inputValue
//         inputcount++
//         input.value = ''

//     }
// console.log(tasks);
// }

// addbtn.addEventListener('click', addTasks)
// 73------------product list ma discount apply kro
// let productList = {
//     shirt: 2300,
//     traouzer: 1500,
//     blauz: 2000,
//     shoes: 7000,
// }
// let discountpercent = 20 / 100


// Object.keys(productList).forEach(key => {
//     let orignalPrice = productList[key]
//     let calculate = orignalPrice - (orignalPrice * discountpercent)
//     productList[key] = calculate


// });
// console.log(productList);
// 74--------------Employes list ma salary >50K filter
// let EmployesSalaryList = {
// nida :100000,
// aliza : 70000,
// fara:35000,
// leena:45000,
// hooria:66000
// }
// for (const key in EmployesSalaryList) {
//     if(EmployesSalaryList[key] > 50000){
//         let greaterValues = EmployesSalaryList[key]
//        console.log(`${key} : ${greaterValues}`);
//     }
// }

// 75----------------convert Object to Array
// let obj = {
//     1:'a',
//     2:'b',
//     3:'c',
// }
// let array = []
// for (const key in obj) {
//    array.push(key , obj[key])
// }
// console.log(array);

// 76----------------convert Array to Object

// let array = ["nida","great"]
// let obj = Object.fromEntries(array.map(array => [array , true]))
// console.log(obj);

// 77----------------count occurencess of each word
// let obj = {
//     apple:'red green',
//     sky:'blue orange',
//     sun:'rise set',
// }
// let array = []
// let count = 0
// for (const key in obj) {
//    array.push(key , obj[key])
// }
// let sent = array.join('' +' ')
// let splitWord = sent.split(' ')
// splitWord.forEach(element => {
//     element
//     count++

// });

// console.log();

// 79----------Email Validation Logic
// let email = "nidashahnida001@gmail.com"
// let alowed = "abcdefghijklmnopqrstuvwxyz1234567890._-"
// let splitletters = alowed.split('')
// splitletters.forEach(letter => {
//     if (email.includes(letter)) {
//         return "yes"
//     }
    // smj nai ara
// });
// 80-------------- phone number validation
// let phoneNumber = "+921345678567"
// let splitNum =phoneNumber.split('')
// let count = 0
// splitNum.forEach(element => {
//     element
//     count++
// });
// if(phoneNumber.startsWith('+92')){
//     if(count === 13){
//    console.log('call from pakistan');
//    }
// }







