//https://www.codewars.com/kata/526571aae218b8ee490006f4

//Attempt#1
let countBits = function(n) {
    return n.toString(2).split('').filter(e => e === '1').length;
};

//Attempt#2
let countBits = function(n) {
    return n.toString(2).replace(/0/g, '').length;
};