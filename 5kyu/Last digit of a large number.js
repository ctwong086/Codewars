//https://www.codewars.com/kata/5511b2f550906349a70004e1

//Attempt#1
var lastDigit = function(str1, str2) { 
    if(str2 === '0') {return 1};
    if(str1 === '0') {return 0};
    
    let exp = (str2.slice(-2) % 4) ? str2.slice(-2) % 4 : 4;
    return Math.pow(str1.slice(-1), exp) % 10;
}