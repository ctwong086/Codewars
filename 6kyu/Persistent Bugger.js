//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

//Attempt#1
function persistence(n) {
    let count = 0;
    
    while(n > 9) {
        n = String(n).split('').reduce((acc, cur) => {
            return acc *= cur;
        }, 1);

        count++;
    }
    return count;
}

//Attempt#2
function persistence(num, count = 0) {
    let arr = String(num).split('');

    return arr.length === 1 ? count : persistence(arr.reduce((acc, cur) => acc * cur), ++count);
}