//https://www.codewars.com/kata/541c8630095125aba6000c00

//Attempt#1
function digitalRoot(n) {
    if(n < 10) {return n}
    else {
        let sum = n.toString().split('').reduce((acc, cur) => {
            return acc + Number(cur);
        }, 0);
        return digitalRoot(sum);
    }
}

//Attempt#2
function digitalRoot(n) {
    return (n - 1) % 9 + 1;
}