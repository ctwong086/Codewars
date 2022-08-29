//https://www.codewars.com/kata/5592e3bd57b64d00f3000047

//Attempt#1
function findNb(n) {
    let sum = 0;
    for(let i = 1; i < Math.sqrt(n); i++) {
        sum += i ** 3;
        if(sum === n) {
            return i;
        }
        if(sum > n) {
            return -1;
        }
    }
    return -1;
}

//Attempt#2
function findNb(m) {
    let n = 0;
    while(m > 0) {
        m -= ++n ** 3;
    }
    return m ? -1 : n;
}