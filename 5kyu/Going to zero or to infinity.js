//https://www.codewars.com/kata/55a29405bc7d2efaff00007c

//Attempt#1 Big number case fail
function going(n) {
    console.log(n)
    let sum = sumFacNum(n);
    let res = (1 / sum[0]) * sum[1];
    console.log(res)
 
    if(res.toString().split('.')[1].length <= 6) {
        return res;
    } else {
        return trunc(res);
    }
}

function sumFacNum(val) {
    let n = 1;
    let fac = 1;
    let sum = 0;
    while(n <= val) {
        fac *= n;
        sum += fac;
        n++;
    }
    return [fac, sum];
}

function trunc(num) {
    let arr = num.toString().split('.');
    arr[1] = arr[1].slice(0, 6);
    arr = arr.join('.');
    
    return Number(arr);
}

//Attempt#2
function going(n) {
    let res = 1;
    let temp = 1;
    
    while(n > 1) {
        temp *= 1 / n; 
        res += temp;
        n--;
    }
    return truncNum(res);
}

function truncNum(val) {
    return Math.floor(val * 1000000) / 1000000;
}