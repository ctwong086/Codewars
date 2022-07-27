//https://www.codewars.com/kata/52f787eb172a8b4ae1000a34

//Attempt#1
function zeros(n) {
    let count = 0;
    for(let i = 5; Math.floor(n / i); i *= 5) {
        count += Math.floor(n / i);
    }
    return count;
}