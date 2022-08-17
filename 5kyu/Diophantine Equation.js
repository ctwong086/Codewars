//https://www.codewars.com/kata/554f76dca89983cc400000bb

//Attempt#1 Execution timed out when n = 900000
function solequa(n) {
    let res = [];
    for(let i = 0; i <= Math.ceil(n / 2); i++) {
        for(let j = 0; j <= Math.ceil(i / 2); j++) {
            let temp = (i - 2 * j) * (i + 2 * j);
            if(temp === n) {
                res.unshift([i, j]);
            }
        }
    }
    return res;
}

console.log(Math.sqrt(4))

//Attempt#2
// (x - 2y)(x + 2y)
// if n = 5, i = 1
// a = i, b = n / i
// a = x - 2y, b = x + 2y
// 1 = x - 2y, 5 = x + 2y
// x = 1 + 2y
// --> 5 = (1 + 2y) + 2y
// 5 = 1 + 4y
// y = (5 - 1) / 4
// y = (b - a) / 4

// a = x - 2y, b = x + 2y
// 1 = x - 2y, 5 = x + 2y
// y = (x - 1) / 2
// 5 = x + 2((x - 1) / 2)
// 5 = x + x - 1
// x = (5 + 1) / 2
// x = (b + a) / 2

function solequa(n) {
    let res = [];
    for(let i = 1; i <= Math.sqrt(n); i++) {
        let a = i;
        let b = n / i;
        let c = (a + b) / 2;
        let d = (b - a) / 4;
      
        if(Number.isInteger(b) && Number.isInteger(c) && Number.isInteger(d)) {
            res.push([c, d]);
        }
    }
    return res;
}