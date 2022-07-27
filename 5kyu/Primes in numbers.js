//https://www.codewars.com/kata/54d512e62a5e54c96200019e

//Attempt#1 Out of Memory
function primeFactors(n) {
    let prime = [2, 3];
    for(let i = 2; i <= n; i++) {
        if(i % 2 === 0 || i % 3 === 0) {
            continue;
        }
        prime.push(i);
    }
    let count = new Array(prime.length).fill(0);
    console.log(prime)
  
    for(let i = 0; i < prime.length; i++) {
        while(n % prime[i] == 0) {
            n /= prime[i];
            count[i]++;
        }
    }
    return count.map((e, i) => {
        if(e === 0) {return}
        if(e === 1) {
            return `(${prime[i]})`;
        }
        return `(${prime[i]}**${e})`;
    }).join('');
}
//Attempt#2
function primeFactors(n) {
    let result = '';
    for(let i = 2; n > 1; i++) {
        for(var k = 0; n % i === 0; k++) {
            n /= i;
        }
        result += k ? (k === 1 ? `(${i})` : `(${i}**${k})`) : '';
    }
    return result;
}