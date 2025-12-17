// 81------------fabonacci series
// function fabonacciSeries(n){
//    let fib = [0,1]
//    for (let i = 2; i < n; i++) {
//     fib[i]=fib[i-1]+fib[i-2]
//    }
//    return fib
// }
// console.log(fabonacciSeries(10));

// 82------arstrong number
// function armstrongChecker(n){
//     let strsplit = n.toString().split('')
//     let sum = 0
//     strsplit.forEach(element => {
//         parseInt(element)

//         let cube = element ** 3
//         sum += cube 

//     });
//     console.log(sum);
//     if(sum === n){
//         console.log('yes Armstrong Number');

//     }
//     else{
//         console.log('Not');

//     }

// }
// armstrongChecker(371)
// 84--------------random Number 1-10
// let randomnumber =Math.random()
// let array = []
// for (let i = 0; i < 10; i++) {
//    array.push(randomnumber)

// }
// console.log(array);
// 85----------otp genrator 

// function otpGenerator(){
//     let otp = Math.floor(100000 + Math.random() *900000)
//     return otp.toString()
// }
// console.log(otpGenerator());

// 86----------password genrator 

// function passwordGenerator(){
//     let password = "abc" + Math.floor(1000 + Math.random() *9000) + "$%*"
//    return password.toString()
// }
// console.log(passwordGenerator());
// 87------------lcm finder
// 88------------gcd finder
// function gcd(a,b){
//     for (let temp = b; b!==0;) {//9,3
//         b=a%b//3,3,0
//         a = temp//9,3
//         temp=b//3,3
//     }
//     return a//3
// }
// function LCMFinder(a,b){
//     let gcdValue = gcd(a,b)//3
//     let lcm = (a*b)/gcdValue
//     return lcm
// }
// console.log(LCMFinder(3,9));
// 89--------sum of digits of number
// let number = 23456
// let splitnum = number.toString().split('')
// let sum = 0
// splitnum.forEach((element ,i) => {
//     let intnumm = parseInt(element)
//     sum +=intnumm
// });
// console.log(sum);
// 90--------multiplication of digits of number
// let number = 23
// let splitnum = number.toString().split('')
// let multiplication = 1
// splitnum.forEach((element ,i) => {
//     let intnumm = parseInt(element)
//     multiplication *=intnumm
// });
// console.log(multiplication);
// 91-------------print tringle pattern
// for (let i = 1; i <= 5; i++) {
//     let a = ''
//     for (let j = 1; j <= i; j++) {
//         a += '*'
//     }
//     console.log(a);
// }
// 92-------------print reverse tringle pattern
// for (let i = 5; i >= 1; i--) {
//     let a = ''
//     for (let j = 1; j <= i; j++) {
//         a += '*'
//     }
//     console.log(a);
// }
// 93-------------print piramid pattern
// let n= 5
// for (let i = 1; i <= 5; i++) {
//     let x = n-i
//     let spaces = ''
   
//     let b = ''
//     for (let j = 1; j <= x; j++) {
//                 spaces += ' '
//     }
//             for (let k = 1; k <= i; k++) {
//                 b += ' * '

//             }
        
    
//     console.log(spaces + b);
// }
//94 -------shopping cart totle
// let totle = 0
// let custommerShopping = {
//     perfume:25000,
//     tshirt:2000,
//     pent:1200,
//     pouch:700,
//     pencilbox : 250,
//     charger:400,
// }
// values =  Object.values(custommerShopping).forEach(element => {
//     totle += element
    
// });

// console.log('Thanks for Shopping Totle bill is Rs' + totle + '/-');
// 96----------find Average Age from array of objects
// let ageCollector = 0
// let array = [
//     {
// name:"nida",
// age:19
//     },
//     {
// name:"fara",
// age : 15
//     },
//     {
// name:"kiven",
// age : 25
//     },
//      {
// name:"pantic",
// age : 44
//     },
//      {
// name:"bili",
// age : 36
//     }
// ]
// for (let i = 0; i < array.length; i++) {
//        ageCollector += array[i].age
// }
// let Average = Math.round(ageCollector/ array.length)
// console.log("The average age is "+Average);
// 97-----------find most frquent number
// let count1 = 0
// let count2 = 0
// let count3 = 0
// let count4 = 0
// let count5 = 0
// let count6 = 0
// let num = [1,2,2,2,1,3,3,3,4,4,1,3,5,6,4,5,6]
// for (let i = 0; i < num.length; i++) {
//     if(num[i]===1){
//        count1 ++
//     }
//      if(num[i]===2){
//        count2 ++
//     }
//      if(num[i]===3){
//        count3 ++
//     }
//      if(num[i]===4){
//        count4 ++
//     }
//      if(num[i]===5){
//        count5 ++
//     }
//      if(num[i]===6){
//        count6 ++
//     }
     
    
// }
// if(count1 >count2 && count1 >count3 &&count1 >count4 && count1 >count5 &&count1 >count6){
//     console.log('1 is frequent number');
    
// }
// else if(count2 >count1 && count2 >count3 &&count2>count4 && count2 >count5 &&count2>count6){
//     console.log('2 is frequent number');
    
// }
// else if(count3 >count1 && count3 >count2 &&count3>count4 && count3 >count5 &&count3>count6){
//     console.log('3 is frequent number');
    
// }
// else if(count4 >count1 && count4 >count2 &&count4>count3 && count4 >count5 &&count4>count6){
//     console.log('4 is frequent number');
    
// }
// else if(count5 >count1 && count5 >count2 &&count5>count3 && count5 >count4 &&count5>count6){
//     console.log('5 is frequent number');
    
// }
// else if(count6 >count1 && count6 >count2 &&count6>count3 && count6 >count4 &&count6>count5){
//     console.log('6 is frequent number');
    
// }

// 98---------------convert sec in h:m:s formate
// let seconds = 9000
// let hours = Math . floor(seconds/3600)
// let minutes = Math.floor((seconds%3600)/60)
// seconds = seconds%60
//   document.writeln(hours + ':' + minutes +':' + seconds)

// 99-------------count totle items in cart(quantities)
// let totleItems = 0
// let custommerShopping = {
//     perfume:25000,
//     tshirt:2000,
//     pent:1200,
//     pouch:700,
//     pencilbox : 250,
//     charger:400,
// }
// values =  Object.keys(custommerShopping).forEach(element => {
//     totleItems ++
    
// });
// console.log(totleItems);
// 100------------Bank account logic deposit/withdraw
class BankAccount{
    constructor(accountNumber , innitialBalance = 0){
        this.accountNumber = accountNumber;
        this.balance = innitialBalance;
        console.log(`Account ${this.accountNumber} created with $${this.balance}`);
  
    }
    deposit(amount){
        if(amount>0){
            this.balance += amount
        
        console.log(`Deposited: $${amount}. New Balance: $${this.balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
    }
    withDraw(amount){
        if(amount>0 && amount<=this.balance){
            this.balance -= amount
            console.log(`Withdrawn: $${amount}. New Balance: $${this.balance}`);
        }
        else if(amount> this.balance){
             console.log(`Insufficient funds for withdrawal of $${amount}.`);
    } else {
      console.log("Withdrawal amount must be positive.");
    
        }
    }
    displayBalance() {
    console.log(`Current Balance for A/c ${this.accountNumber}: $${this.balance}`);
  }
}

let myAccount = new BankAccount(12345,12000)
myAccount.deposit(500)
myAccount.withDraw(8000)
myAccount.displayBalance()
