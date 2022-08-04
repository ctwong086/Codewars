//codewars.com/kata/529b418d533b76924600085d

//Attempt#1
function toUnderscore(str) {
    let arr = String(str).match(/[a-zA-Z0-9][a-z0-9]*/g);
    
    return arr.length > 1 ? arr.map(e => {
        return e[0].toLowerCase() + e.slice(1);
    }).join('_') : arr[0];
}