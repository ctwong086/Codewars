//https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4

//Attempt#1 Execution Timed Out
function gap(g, m, n) {
    let prime = [];
    let result = [];
  
    for(let i = m; i <= n; i++) {
        let flag = false;
        for(let j = 2; j <= Math.sqrt(i); j++) {
            if(i % j === 0) {
                flag = true;
                break;
            }
        }
        if(!flag) {
            prime.push(i);
        }
        
        
    }
    for(let i = 0; i < prime.length - 1; i++) {
        let diff = Math.abs(prime[i + 1] - prime[i]);
      
        if(diff === g) {
            result.push(prime[i]);
            result.push(prime[i + 1]);
            break;
        }
    }

    return result.length ? result : null;
}

//Attempt#2 Execution Timed Out
function gap(g, m, n) {
    let prime = [];
  
    for(let i = m; i <= n; i++) {
        let flag = false;
        for(let j = 2; j <= Math.sqrt(i); j++) {
            if(i % j === 0) {
                flag = true;
                break;
            }
        }
        if(!flag) {
            prime.push(i);
        }
    }
    for(let i = 0; i < prime.length - 1; i++) {
        let cur = prime[i];
        let next = prime[i + 1];
        if(next - cur === g) {
            return [cur, next];
        }
    }
    return null;
}

//Attempt#3
function gap(g, m, n) {
    let prevPrime;
    while(m <= n) {
        if(isPrime(m)) {
            if(m - prevPrime === g) {
                return [prevPrime, m];    
            } else {
                prevPrime = m;
            }
        }
        m++;
    }
    return null;
}

function isPrime(val) {
    for(let i = 2; i <= Math.sqrt(val); i++) {
        if(val % i === 0) {
            return false;
        }
    }
    return true;
}