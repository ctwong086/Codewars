//https://www.codewars.com/kata/54d4c8b08776e4ad92000835

//Attempt#1 Execution timed out
var isPP = function(n) {
    for(let base = 2; base <= Math.floor(n / 2); base++) {
        for(let pow = 2; pow  <= Math.floor(n / 2); pow++) {
            if(base ** pow === n) {
                return [base, pow];
            }
            if(base ** pow > n) {
                continue;
            }
        }
    }
    return null;
}

//Attempt#2
var isPP = function(n) {
    for(let base = 2; base < n; base++) {
        for(let pow = 2; pow < n; pow++) {
            if(base ** pow > n) {
                break;
            }
            if(base ** pow === n) {
                return [base, pow];
            }
        }
    }
    return null;
}

//Attempt#3
var isPP = function(n) {
    for(let base = 2; base * base <= n; base++) {
        for(let pow = 2; base ** pow <= n; pow++) {
            if(base ** pow === n) {
                return [base, pow];
            }
        }
    }
    return null;
}