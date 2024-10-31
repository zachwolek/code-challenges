// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero. There cannot be more than 3 identical symbols in a row.

// In Roman numerals:

// 1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
// 2008 is written as 2000=MM, 8=VIII; or MMVIII.
// 1666 uses each Roman symbol in descending order: MDCLXVI.

const solution = (number) => {
    let numeralArray = []
    
    while (number > 0) {
        if (number >= 1000){
            numeralArray.push('M')
            number -= 1000
        } else if (number >= 900){
            numeralArray.push('CM')
            number -= 900
        } else if (number >= 500){
            numeralArray.push('D')
            number -= 500
        } else if (number >= 400){
            numeralArray.push('CD')
            number -= 400
        } else if (number >= 100){
            numeralArray.push('C')
            number -= 100
        } else if (number >= 90){
            numeralArray.push('XC')
            number -= 90
        } else if (number >= 50){
            numeralArray.push('L')
            number -= 50
        } else if (number >= 40){
            numeralArray.push('XL')
            number -= 40
        } else if (number >= 10){
            numeralArray.push('X')
            number -= 10
        }  else if (number >= 9){
            numeralArray.push('IX')
            number -= 9
        } else if (number >= 5){
            numeralArray.push('V')
            number -= 5
        } else if (number >= 1){
            numeralArray.push('I')
            number -= 1
        }
    }
    const romanNumerals = numeralArray.join('')
    return romanNumerals.toString()
  }

  console.log(solution(909))