//https://www.codewars.com/kata/51edd51599a189fe7f000015

//Attempt#1
var solution = function(firstArray, secondArray) {
    let res = firstArray.reduce((acc, cur, i) => {
        let diff = Math.pow(cur - secondArray[i], 2);
        return acc + diff;
    }, 0)
    return res / firstArray.length;
}