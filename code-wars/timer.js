function humanReadable (seconds) {
    console.log("60 x 60" , 60 * 60)
    console.log(seconds / 3600)
    let hours = 0
    let minutes = 0
    if (seconds / 3600 >= 1) {
        hours = Math.floor(seconds / 3600);
        seconds = seconds - (hours * 3600);
        console.log("Hours = ", hours)
    }
    if (seconds / 60 >= 1){
        minutes = Math.floor(seconds / 60);
        seconds = seconds - (minutes * 60);
        console.log("Minutes = ", minutes)
    }
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return hours + ":" + minutes + ":" + seconds
  }

//   Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

console.log(humanReadable(359999))