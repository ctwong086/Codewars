//https://www.codewars.com/kata/5547cc7dcad755e480000004

//Attempt#1 Execution Timed out
function removeNb(n) {
    let sumOfN = (n * (n + 1) / 2);
    let result = [];
    
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            if(i * j === sumOfN - i - j) {
                result.push([i, j]);
            }
        }
    }
    return result;
}

//Attempt#2
function removeNb(n) {
    let sumOfN = (n * (n + 1) / 2);
    let result = [];
  
    for(let i = n; i > 0; i--) {
        let num = (sumOfN - i) / (i + 1);

        if(num < n && Number.isInteger(num)) {
            result.push([num, i]);
        }
    }
    return result;
}