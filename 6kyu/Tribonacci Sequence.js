//https://www.codewars.com/kata/556deca17c58da83c00002db

//Attempt#1
function tribonacci(sign, n) {
    for(let i = 0; i < n - 3; i++) {
        sign.push(sign[i] + sign[i + 1] + sign[i + 2]);
    }
    return sign.slice(0, n);
}