//https://www.codewars.com/kata/54d7660d2daf68c619000d95

//Attempt#1
function convertFrac(lst) {
    let numerator = [];
    let denominator = [];

    for(let x of lst) {
        numerator.push(x[0]);
        denominator.push(x[1]);
    }    
    let common = leastCommonDenominator(denominator);
    let result = '';
    for(let i = 0; i < numerator.length; i++) {
        result += `(${(common / denominator[i]) * numerator[i]},${common})`;        
    }
    return result;
}

function leastCommonDenominator(arr) {
    let n = Math.max(...arr);
    while(n) {
        if(arr.every(e => n % e === 0)) {
            return n;
            break;
        } else {
            n++;
        }
    }
}

//Attempt#2 using Euclidean algorithm
function convertFrac(lst) {
    let denominator = lst.reduce((acc, cur) => {
        return lcm(acc, cur[1]);
    }, 1);
    return lst.map((e, i) => {
        return `(${(denominator / e[1]) * e[0]},${denominator})`;
    }).join('');
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function gcd(a, b) {
    return a < b ? gcd(b, a) : b == 0 ? a : gcd(b, a % b);
}