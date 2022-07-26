//https://www.codewars.com/kata/55c6126177c9441a570000cc

//Attempt#1
function orderWeight(str) {
    let result = str.split(' ').sort(function(a, b) {
        if(sortNum(a) === sortNum(b)) {
            return a.localeCompare(b);
        } else {
            return sortNum(a) - sortNum(b);          
        }
    }).join(' ');
    return result;
}

function sortNum(n) {
    return n.split('').reduce((acc, cur) => {
        return acc + parseInt(cur);
    }, 0);
}

//#Attempt2
function orderWeight(str) {
    return str.split(' ').sort(function(a, b) {
        return sortNum(a) === sortNum(b) ? a.localeCompare(b) : sortNum(a) - sortNum(b);          
    }).join(' ');
}

function sortNum(n) {
    return n.split('').reduce((acc, cur) => {
        return acc + parseInt(cur);
    }, 0);
}
