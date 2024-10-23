// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

//Submit 1234
//In binary, this is 10011010010 === 10011010010
//Count the number of 1s, 5

var countBits = function(n) {
    let binary = n.toString(2)
    let splitBinary = binary.split('')
    let oneFiltered = splitBinary.filter(num => num === '1')
    return oneFiltered.length
  };

  //First: How does binary work? 
  //Second: What are bits? 
  //Then count bits
  //    return i

//   countBits(1234)




// You are given the heads of two sorted linked lists 
//list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.
let list1 = [1,2,4]
let list2 = [1,3,4]
const mergeTwoLists = (list1, list2) => {
    let concatList = [...list1, ...list2]
    let concatList2 = list1.concat(list2)
    console.log("concat list 2: ", concatList2)
    return concatList.sort((a, b) => a - b)
};

console.log(mergeTwoLists(list1, list2))

//pseudo code: merge the two arrays together
//sort in descending

//list 1 = [1, 2, 4]
//list 2 = [1, 3, 4]
//make it equal [1, 1, 2, 3, 4, 4]