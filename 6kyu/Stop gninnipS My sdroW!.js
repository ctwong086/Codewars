//https://www.codewars.com/kata/5264d2b162488dc400000001

//Attempt#1
function spinWords(str) {
    return str.split(' ').map(e => {
        return e.length >= 5 ? e.split('').reverse().join('') : e;
    }).join(' ');
}