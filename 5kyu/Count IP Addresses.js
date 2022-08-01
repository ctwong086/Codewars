//https://www.codewars.com/kata/526989a41034285187000de4

//Attempt#1
function ipsBetween(start, end) {
    let diff = mutate(start, end);
    let result = 0;
    let count = 0;
    while(count < diff.length) {
        result += diff[diff.length - count - 1] * (256 ** count);
        count++;
    }
    return result;
}

function mutate(str1, str2) {
    let arr1 = str1.split('.');
    let arr2 = str2.split('.');
  
    let result = arr1.map((e, i) => {
        let diff = parseInt(arr2[i]) - parseInt(e);
        return diff;
    })
    return result;
}

//Attempt#2
function ipsBetween(start, end) {
    let calNum = (ip) => ip.split('.')
                           .map(e => parseInt(e))
                           .reduce((acc, cur) => acc * 256 + cur);
  
    return calNum(end) - calNum(start);
}

//Attempt#3
function ipsBetween(start, end) {
    let calNum = (ip) => ip.split('.')
                           .map(e => parseInt(e))
                           .reduce((acc, cur, i) => acc + cur * (256 ** (3 - i)), 0);
  
    return calNum(end) - calNum(start);
}