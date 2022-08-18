//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

//Attempt#1
function duplicateEncode(word) {
    return word.toLowerCase().split('').map((e, i, arr) => {
        return arr.indexOf(e) === arr.lastIndexOf(e) ? '(' : ')';
    }).join('');
}