//https://www.codewars.com/kata/5287e858c6b5a9678200083c

//Attempt#1
function narcissistic(value) {
    let d = value.toString().length;
    let n = value.toString().split('').reduce((acc, cur) => {
        return acc + cur ** d;
    }, 0)
    return n === value;
}