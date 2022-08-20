//https://www.codewars.com/kata/54e6533c92449cc251001667

//Attempt#1
let uniqueInOrder = function(str) {
    let res = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i - 1] !== str[i]) {
            res.push(str[i]);
        }
    }
    return res;
}

//Attempt#2
let uniqueInOrder = function(str) {
    return [...str].filter((e, i, arr) => {
        return e !== arr[i - 1];
    })
}