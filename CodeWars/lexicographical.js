

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.


// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


const sortArray = (array) => {
    //if num % 2 !== 0 it's odd
    //sort
    //if num %2 === 0 it's even 
  }

// // Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// // Example 1:
// const a1 = ["arp", "live", "strong"]

// const a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// // returns ["arp", "live", "strong"]
// // Example 2:
// // a1 = ["tarp", "mice", "bull"]
// // a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// // returns []

// const inArray = (array1,array2) => {
//     let subArray = []
//     array1.forEach(subStr => {
//         array2.forEach(str => {
//             if (str.includes(subStr)){
//                 if (!subArray.includes(subStr)) {
//                     subArray.push(subStr);
//                 }
//                 return;
//             }
//         })
//     })
//     return subArray.sort()
//   }

// console.log(inArray(a1, a2))