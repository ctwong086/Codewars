//https://www.codewars.com/kata/5a045fee46d843effa000070

//Attempt#1
function decomp(n) {
    let facList = printList(n);
    let primeList = printPrimeList(n);

    let res = primeList.map(primeNum => {
        let count = facList.reduce((acc, cur) => {
            let temp = 0;
            while(cur % primeNum === 0) {
                cur /= primeNum;
                temp++;
            }
            return acc + temp;
        }, 0)
        
        if(count === 0) {
            return;
        } else if(count === 1) {
            return primeNum;
        } else {
            return `${primeNum}^${count}`;
        }
    })

    return res.join(' * ');
}

function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

function printList(n) {
    let result = [];
    for(let i = 1; i <= n; i++) {
        result.push(i);
    }
    return result;
}

function printPrimeList(n) {
    let result = [];
    for(let i = 2; i <= n; i++) {
        if(isPrime(i)) {
            result.push(i);       
        }  
    }
    return result;
}