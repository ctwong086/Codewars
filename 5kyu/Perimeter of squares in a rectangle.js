//https://www.codewars.com/kata/559a28007caad2ac4e000083

//Attempt#1
function perimeter(n) {   
    let fib = [1, 1];
    while(fib.length <= n) {
        let next = fib[fib.length - 2] + fib[fib.length - 1];
        fib.push(next);
    }
    return n ? fib.reduce((acc, cur) => acc + cur) * 4 : 4;
}