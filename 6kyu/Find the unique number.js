//https://www.codewars.com/kata/585d7d5adb20cf33cb000235

//Attempt#1
function findUniq(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            return arr[i];
        }
    }
}

//Attempt#2
function findUniq(arr) {
    return arr.find(e => arr.indexOf(e) === arr.lastIndexOf(e));
}