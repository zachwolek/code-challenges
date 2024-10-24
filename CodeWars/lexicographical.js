// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
const a1 = ["arp", "live", "strong"]

const a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]
// Example 2:
// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []

const inArray = (array1,array2) => {
    let subArray = []
    array1.forEach(subStr => {
        array2.forEach(str => {
            if (str.includes(subStr)){
                if (!subArray.includes(subStr)) {
                    subArray.push(subStr);
                }
                return;
            }
        })
    })
    return subArray.sort()
  }

console.log(inArray(a1, a2))