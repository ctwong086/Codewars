//https://www.codewars.com/kata/529adbf7533b761c560004e5

//Attempt#1
function fibonacci(n) {
    let fib = [0, 1];
    let count = 0;
    
    while(count < n) {
        let temp = fib[0]
        fib[0] = fib[1];
        fib[1] = temp + fib[1];
        count++;
    }
    return fib[0];
}

//Attempt#2
let memorised = function(f) {
    let cache = {};
    return function(n) {
        if(!cache[n]) {
            cache[n] = f(n);
            console.log(cache)
        }
        return cache[n];
    }
}

let fibonacci = memorised(function(num) {
    if(num <= 1) {
        return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
});