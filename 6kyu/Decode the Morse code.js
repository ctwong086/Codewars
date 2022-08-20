//https://www.codewars.com/kata/54b724efac3d5402db00065e

//Attempt#1
let decodeMorse = function(morseCode) {
    let arr = morseCode.trim().split(' ');
    let res = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === '') {
            res.push(' ');
            i++;
        } else {
            res.push(MORSE_CODE[arr[i]]);
        }
    }
    return res.join('');
}