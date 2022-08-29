//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

//Attempt#1
function high(x) {
    x = x.split(' ');
    let res = x.map(e => [...e].reduce((acc, cur) => {
        return acc + (cur.charCodeAt(0) - 96);
    }, 0));
    return x[res.indexOf(Math.max(...res))];
}