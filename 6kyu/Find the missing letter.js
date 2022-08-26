//https://www.codewars.com/kata/5839edaa6754d6fec10000a2

//Attempt#1
function findMissingLetter(array) {
    let res = array.find((e, i, arr) => { 
        let cur = e.charCodeAt(0);
        let next = arr[i + 1].charCodeAt(0);
        return cur + 1 !== next;
    });
    return String.fromCharCode(res.charCodeAt(0) + 1);
}