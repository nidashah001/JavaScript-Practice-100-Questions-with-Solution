// 41----------count vowel in String
// let string = "nIda is hungry";
// let splitStr = string.split('');
// let result = 0
// splitStr.forEach(element => {

//     if(element === 'a' ||element ==='e'|| element === 'i' ||element ==='o'|| element === 'u' ||element ==='A'|| element === 'E' ||element ==='I'||element === 'O' ||element ==='U'){
//         result +=1 ;


//     }
// });
//  console.log(`Totle vowel in String are : ${result}`);
//  42---------count Consonants
// let string = "working";
// let splitStr = string.split('');
// let result = 0
// splitStr.forEach(element => {

//     if(element !== 'a' && element !=='e'&&  element !== 'i' && element !=='o'&&  element !== 'u' && element !=='A'&&  element !== 'E' && element !=='I'&& element !== 'O' && element !=='U'){
//         result +=1 ;  
//     }
// });
//  console.log(`Totle consonansts in String are : ${result}`);

// 43---------------reverse a string
// let string = "nida"
// let reverseString = string.split('').reverse('').join('')
// console.log(reverseString);

// 44 ----------------palindrome String checker
// let string = "mama";
// let reversedString = string.split('').reverse('').join('')
// if(string === reversedString){
//     console.log('yes palindrome');

// }
// else{
//     console.log('NOT palindrome');
// }

// 45----------------Remove Spaces

// let string = "i m hungry";

// let resultstr = string.replaceAll((" ", ""))
// console.log(resultstr);

// 46--------------Replace VOwel with*
// let string = "how are you sis"
// let splitStr = string.split('');
// let replaceStr  = "";
// splitStr.forEach(element => {

//     if(element === 'a' ||element ==='e'|| element === 'i' ||element ==='o'|| element === 'u' ||element ==='A'|| element === 'E' ||element ==='I'||element === 'O' ||element ==='U'){
//             replaceStr += "*"

//     }
//     else{
//         replaceStr += element
//     }
//     });
//     console.log(replaceStr);
// 47---------longest word
// let sentence = "hi whats goinng on here"
// let word = sentence.split(' ')
// let longestWord = ""
// for (let i = 0; i < word.length; i++) {

//     if(word[i].length > longestWord.length ){
//         longestWord = word[i]
//     }

// }
//  console.log(longestWord);

// 48--------------count words in sentence
// let sentence = "hi whats goinng on here muumy daddy pipsy popsy"
//  let splitword = sentence.split(' ')
// let countWord = 0
// for (let i = 0; i < splitword.length; i++) {
//     countWord ++
//     }
//     console.log(countWord);

// 49-------------first letter to uppercase
// let string = "nida"
// let splitStr = string.split('')
// let uppercaseStr = splitStr[0].toUpperCase()
// splitStr[0] = uppercaseStr
// let newString = splitStr.join('')
// console.log(newString);

// 50-------------sentence to title case
// let sentence = "nida is a pro coder"
// let splitStr = sentence.split(' ')
// let titlecase = ""

// splitStr.forEach((element ) => {
// titlecase +=  element.charAt(0).toUpperCase() + element.slice(1) + " ";

// });

// console.log(titlecase);
// 51 ---------- find Duplicate character
// let string = "ninoo"
// let splitStr = string.split('')

// let duplicateChar = splitStr.filter((e,i)=> splitStr.indexOf(e) !== i)
// console.log(duplicateChar);

//52-------------remove duplicate char
// let string = "ninoo"
// let splitStr = string.split('')

// let duplicateChar = splitStr.filter((e,i)=> splitStr.indexOf(e) === i)
// console.log(duplicateChar );
// 53-----------if the string containss number
// let string ="islamabad88"
//     function containsNumber(str) {
//       for (let i = 0; i < str.length; i++) {
//         if (!isNaN(str.charAt(i)) && str.charAt(i) !== ' ') {
//           return true;
//         }
//       }
//       return false;
//     }
//     console.log(containsNumber(string));

// 54----------count uppercase letter
// let string = "AMbrooO"
// let count = 0
// for (let i = 0; i < string.length; i++) {
//    if(string[i]=== string[i].toUpperCase()){
//         count+=1
//     }
// }
// console.log(count);

// 55------------count lowercase letter
// let string = "AMbrooO"
// let count = 0
// for (let i = 0; i < string.length; i++) {
//    if(string[i]=== string[i].toLowerCase()){
//         count+=1
//     }
// }
// console.log(count);
// 56-----------count digits in string 
// let str = "is54lam66abad88"
// let count = 0
// for (let i = 0; i < str.length; i++) {
//     if (!isNaN(str.charAt(i)) && str.charAt(i) !== ' ') {
//         count++
//     }
// }
// console.log(count);
// 57----------------remove Special chars
// let str = " Hello!@#$% World123.";
// let clean = "";

// let allowed = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ";

// for (let i = 0; i < str.length; i++) {
//   if (allowed.includes(str[i])) {
//     clean += str[i];
//   }
// }

// console.log(clean);

// 58----------------Extract num from Strings
// let str = "23ni456da"
// let splitStr = str.split('');
// let ExtractNum = splitStr.filter((e,i)=> !isNaN(e) && e !== ' ')
// console.log(ExtractNum);

// 59---------add hyphen btw chars
// let str = "helloworld"
// let addHy = str.split('').join('-')
// console.log(addHy);
// 60--------------remove vowels
// let str = "i m pro coder"
// let splitStr = str.split('')
// let removeV = splitStr.filter(element=> element !== 'a' && element !=='e'&&  element !== 'i' && element !=='o'&&  element !== 'u' && element !=='A'&&  element !== 'E' && element !=='I'&& element !== 'O' && element !=='U' )

// console.log(removeV.join(''));





















