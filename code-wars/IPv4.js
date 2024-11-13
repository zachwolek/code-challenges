// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089

function isValidIP(str) {
    let isValid = true

    const arrayIP = str.split('.')
    if (arrayIP.length !== 4){
        return false
    }

    arrayIP.forEach(num => {
        let numInt = parseInt(num)
        if (numInt <= 0 || numInt >= 255){
            isValid = false
        } else if (numInt !== 0 && num.startsWith('0')){
            isValid = false
        }
    }
    )
    return isValid
  }

  console.log(isValidIP("123b.4e5.67.89"))
  console.log(parseNum)