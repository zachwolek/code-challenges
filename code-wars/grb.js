// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

function rgb(r, g, b) {
    r = r < 0 ? 0 : r > 255 ? 255 : r;
    g = g < 0 ? 0 : g > 255 ? 255 : g;
    b = b < 0 ? 0 : b > 255 ? 255 : b;

    let rHex = r.toString(16) 
    let gHex = g.toString(16) 
    let bHex = b.toString(16)
    
    if (rHex.length === 1) rHex = "0" + rHex;
    if (gHex.length === 1) gHex = "0" + gHex;
    if (bHex.length === 1) bHex = "0" + bHex;
    console.log("RBG: " + r + " "  + b + " " + g)
  
  let hexCode = rHex + gHex + bHex
  return hexCode.toUpperCase()
}

let num = 255
let num2 = 10
console.log(num.toString(16))
console.log(num2.toString(16))