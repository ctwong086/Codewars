//https://www.codewars.com/kata/5262119038c0985a5b00029f

//Attempt#1
let isPrime = function(n) {
    if(n <= 1) {return false};
 
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}