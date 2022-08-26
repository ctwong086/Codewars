//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

//Attempt#1
function solution(str) {
    let res = [];
    for(let i = 0; i < str.length;) {
        if(str.length - i >= 2) {
            res.push(str.slice(i, i + 2));
            i += 2;
        } else {
            res.push(`${str[i]}_`);
            i++;
        }
    }
    return res;
}

//Attempt#2
function solution(str) {
    let res = (str + '_').match(/.{2}/g) || [];
    return res;
}