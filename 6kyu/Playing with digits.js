//https://www.codewars.com/kata/5552101f47fc5178b1000050

//Attempt#1
function digPow(n, p) {
    let arr = String(n).split('');
    let res = 0;

    for(let i = 0; i < arr.length; i++) {
        res += arr[i] ** p++;
    }

    return Number.isInteger(res / n) ? res / n : -1; 
}

//Attempt#2
function digPow(n, p) {
    let arr = String(n).split('');
    let res = arr.reduce((acc, cur) => {
        return acc + cur ** p++;
    }, 0);

    return res % n ? -1 : res / n; 
}