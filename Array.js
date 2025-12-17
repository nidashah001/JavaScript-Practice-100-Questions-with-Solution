// 21 --------------Array k sum 
// let arr = [12,3,44,6,20];
// let sum = 0;
// arr.forEach(element => {
//     sum+=element
// });
// console.log(sum);
// 22 --------------Array k Average
// let arr = [12,3,44,6,20];
// let sum = 0;
// arr.forEach(element => {
//     sum+=element
// });
// let avg = sum / arr.integerlength
// console.log(avg);
// 23--------------Array ma largest number
// let array = [1,12,31,4,422,21,33]
// let sortArray = array.sort()
// let largestNum = sortArray.at(-1)
// console.log(largestNum);
// 24--------------Array ma Smallest number
// let array = [12,31,422,21,33]
// let sortArray = array.sort((a, b) => b - a)
// console.log(sortArray);

// let smallestNum = sortArray.at(-1)
// console.log(smallestNum);

// 25--------------Array ko reverse 
// let array = [1,2,3,4,5,55];
// let reverseArray = array.reverse();
// console.log(reverseArray);

// 26-------------Neg(-) remove
// let array = [23,44,-3,-55,61,-2,40]
// let removeNeg = array.filter(e=>0<e);
// console.log(removeNeg);
// 27-------------Dublicate Number
// let arr =[11,22,33,44,55,11,22,3,44,33]
// let Dublicate = arr.filter((item,index)=>arr.indexOf(item) !== index);
// console.log(Dublicate);
// 28------------ Unique Number
// let arr =[11,22,33,44,55,11,22,3,44,33]
// let Unique = arr.filter((item,index)=>arr.indexOf(item) === arr.lastIndexOf(item));
// console.log(Unique);
// 29------------merge two arrays

// let array1 = [10,31,25,12,4,88,64]
// let array2 = [20,25,30,35,40]
// let mergeArray = [...array1,...array2] 
// let sortMergeArray = mergeArray.sort((a, b) => a - b)
// console.log(mergeArray);

// 30-----------------split array into two halves
// let arr = [11,22,10,31,5,6];
// let mid = Math.floor(arr.length/2);

// let first = arr.slice(0, mid);
// let second = arr.slice(mid);

// console.log(first, second);


// 31-------------------Even Num Return from array
// let arr = [11, 22, 10, 31,  5, 6];
// arr.forEach(element => {
//     if(element % 2 === 0){
//         console.log(element);
        
//         return element
//     }
// });
// 32-----------------odd Num Return from array
// let arr = [11, 22, 10, 31,  5, 6];
// arr.forEach(element => {
//     if(element % 2 !== 0){
//         console.log(element);
        
//         return element
//     }
// });
// 33----------------Search elemnt in array
// let array = [ 1,2,3,4,5,6,7]
// let SearchElement = 5;
// array.forEach((element , index) => {
//     if(element === SearchElement){
//         console.log(`Elemt found at index ${index}`);
        
//     }
// });
// 34-------------count occurrencess of given value
// let array = [1,2,3,4,2,5,3,4,4,4,4]
// let target = 4;
// let count = array.filter(num => num === target).length;
// console.log(count);

// 35-------------insert element at index
// let array = [ 1,2,3,4,5,6,7]
// let Elem = 50;
// array.forEach((element ,index) => {
//      array[4] = 50
// });
// console.log(array);
// 36-------------Remove element at index
// let removeindex = 4
// let array = [ 1,2,3,4,5,6,7]
// for (let i = removeindex; i < array.length -1; i++) {
//   array[i] = array[i+1]
    
// }
// array.length = array.length-1

// console.log(array);
// 37-------------find second largest num
//  let array = [ 12,33,4,12,5,6,18,4,10,7,10,4]
//  let sortedArray = array.sort((a, b) => a - b)
//  console.log(sortedArray);
 
//  let SecLargest = sortedArray.at(-2)
//  console.log(SecLargest);

// 38------------2D array flatten

// let twoDarray =[[1,2],[3,4],[5,6]]
// let flattenArray = twoDarray.flat()
// console.log(flattenArray);

 
// 39------------rotate array left by 1

// let array = [12,3,44,5,8,22,63,9]
// let array = [1,2,3,4,5]
// let firstindexelm = array[0]

// for (let i = 0; i < array.length; i++) {
//     array[i] = array[i+1];   
// }
// array[array.length -1] = firstindexelm
// console.log(array);
// 40------------rotate array right by 1

// let array = [1,2,3,4,5]
// let lastindexelm = array[array.length -1]

// for (let i = array.length - 1; i > 0; i--) {
//     array[i] = array[i - 1];

// }
// array[0] = lastindexelm
// console.log(array);
