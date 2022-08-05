//https://www.codewars.com/kata/5282b48bb70058e4c4000fa7

//Attempt#1
function hexStringToRGB(hexString) {
    hexString = hexString.toUpperCase();

    let r = toDec(hexString.slice(1, 3));
    let g = toDec(hexString.slice(3, 5));
    let b = toDec(hexString.slice(5));

    return {'r': r, 'g': g, 'b': b};
}

function toDec(str) {
    let hexToDec = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15
    }
    return hexToDec[str[0]] * 16 + hexToDec[str[1]];
}

//Attempt#2
function hexStringToRGB(str) {
    return {
        r: parseInt(str.slice(1, 3), 16),
        g: parseInt(str.slice(3, 5), 16),
        b: parseInt(str.slice(5), 16),
    }
}