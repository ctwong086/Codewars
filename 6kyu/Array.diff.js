//https://www.codewars.com/kata/523f5d21c841566fde000009

//Attempt#1
function arrayDiff(a, b) {
    for(let x in b) {
        a = a.filter(e => e !== b[x]);
    }
    return a;
}

//Attempt#2
function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e));
}