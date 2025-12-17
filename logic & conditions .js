// let num = 0;
// -----------------1 check odd/even


// if(num%2===0){
//     console.log('even');

// }
// else{
//     console.log('odd');

// }
// 2------------- check positive/negitive/zero
// if(num===0){
// console.log('zero');
// }
// else if(0<num){
//     console.log('positive');

// }
// else{
//     console.log('negitive');

// }
// 3 ----------------compare two nums

// let num1 = 112;
// let num2 = 100;
// if(num1<num2){
// console.log(`${num2} is greater`);
// }
// else{
//    console.log(`${num1} is greater`); 
// }

// 4--------------find the largest of 3 nums
// let num1 = 1;
// let num2 = 0;
// let num3 =  1;

// if (num1 > num2 && num1 > num3) {
//     console.log(`${num1} is greater`);
// }
// else if (num2 > num1 && num2 > num3) {
//     console.log(`${num2} is greater`);

// }
// else if (num3 > num1 && num3 > num2) {
//     console.log(`${num3} is greater`);

// }
// else{
//     console.log('more than 1 are equal');

// }
//5 -------------check if the num is divisible by 5
// let num = 15;
// if(num % 5 === 0){
//     console.log('the num is divisible by 5');

// }
// else{
//     console.log('Not divisible by 5');

// }
// 6--------------check leap year
// function isleapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
     
// }
// console.log(isleapYear(2028));

// 7--------------check if character is vowel
// let char = 'o';
// if(char === 'a' ||char === 'e' ||char === 'i' ||char === 'o' ||char === 'u' ){
//     console.log('char is vowel');
    
// }
// else{
//     console.log('not vowel');
    
// }
// 8-----------check upper case or lowwer case
// let str = "apple"
// if(str===str.toUpperCase()){
//     console.log('uppercase');
    
// }
// else{
//     console.log('Lowercase');
    
// }

//9--------------------check if the string contains "a"
// let str = "nida"
// let containsA = str.includes('a')
// console.log(containsA);

// 10----------------convert celsius into fahrenheit
// let C = 2;
// let F = (C *1.8) + 32;
// console.log(F);

//11 -------- check if number is prime number
// let num = 33;
// if(num<=1){
//     return false
// }
// if(num===2){
//     return true
// }
// if(num%2===0){
//     return false
// }
// for (let i = 3; i <= Math.sqrt(num); i += 2) {
//     if (num % i === 0) {
//       return false; 
//     }
//   }

//   return true;

//12------------

// 13-----------table of 5
// for (let i = 1; i <= 10; i++) {
//     let table = 5*i;
//     console.log(table);
    
    
// }

//14-----------cube of num 
// let num = 10;
// let cube = num *num * num;
// console.log(cube);

// 15---------sum of first 10 natural number
// let  SumNaturalNumber = 1+2+3+4+5+6+7+8+9+10
// console.log(SumNaturalNumber);
// 16---------------count digits of a number
// let n = 123456;
// let count = String(Math.abs(n)).length;
// console.log(count);
// 17---------Reverse digits of a number
// let num = 234512308;
// let numStr = num.toString()
// for (let i = numStr.length; i >0  ; i--) {
//    console.log(numStr[i]);
   
    
// }r.sort()
// 18---------palindrome checker
// let str = "madam"
// let sortStr = str.split('')
// let ReverseStr = sortStr.reverse().join('')
// if(ReverseStr === str){
//     console.log('yes palindrom');
    
// }
// else{
//     console.log('NOT');
    
// }
// 19-----------Factorial find kro
// function Factorial(n){
//     if(n===0 || n===1){
//         return 1;
//     }
//     else{
//         return n*Factorial(n-1)
//     }
    
// }
// console.log(Factorial(5))
// 20-------------sum oof even nums 1-100
// let sum =0;
// for (let i = 1; i <= 100; i++) {
//     let even = i % 2 ===0;
//     if(even){
//         sum +=i
//     }
   
// }
// console.log(sum);




    
    

 



    




