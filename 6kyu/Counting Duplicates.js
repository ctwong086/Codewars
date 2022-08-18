//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

//Attempt#1
function duplicateCount(text) {
    text = text.toLowerCase().split('').filter((e, i, arr) => {
        return arr.indexOf(e) !== i && arr.lastIndexOf(e) === i;
    });
    return text.length;
}