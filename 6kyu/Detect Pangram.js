//https://www.codewars.com/kata/545cedaa9943f7fe7b000048

//Attempt#1
function isPangram(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet.split('').every(e => str.toLowerCase().includes(e));
}