//https://www.codewars.com/kata/55aa075506463dac6600010d

//Attempt#1
function listSquared(m, n) {
    let result = [];
    for(let i = m; i <= n; i++) {
        let divisor = [];
        for(let j = 1; j <= i; j++) {
            if(i % j === 0) {
                divisor.push(j);              
            }
        }
        let squareSum = divisor.reduce((acc, cur) => {
            return acc + (cur ** 2);
        }, 0)
        let sqrt = Math.sqrt(squareSum);
        if(Number.isInteger(sqrt)) {
            result.push([i, squareSum]);
        }
    }
    return result;
}

//Attempt#2
function listSquared(m, n) {
    let result = [];
    for(let i = m; i <= n; i++) {
        let divisor = 0;
        for(let j = 1; j <= i; j++) {
            if(i % j === 0) {
                divisor += (j ** 2);              
            }
        }
        let sqrt = Math.sqrt(divisor);
        if(Number.isInteger(sqrt)) {
            result.push([i, divisor]);
        }
    }
    return result;
}