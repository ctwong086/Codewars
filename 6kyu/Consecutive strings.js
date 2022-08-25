//https://www.codewars.com/kata/56a5d994ac971f1ac500003e

//Attempt#1
function longestConsec(str, k) {
    if(str.length < k || !str.length || k <= 0) {return ''};
  
    let max = '';
    for(let i = 0; i <= str.length - k; i++) {
        let cur = str.slice(i, i + k);
        let temp = '';
        for(let x of cur) {
            temp += x;
        }
        max = temp.length > max.length ? temp : max;
    }
    return max;
}

//Attempt#2
function longestConsec(str, k) {
    if(str.length < k || !str.length || k <= 0) {return ''};
  
    let max = '';
    for(let i = 0; i <= str.length - k; i++) {
        let temp = str.slice(i, i + k).join('');
        max = temp.length > max.length ? temp : max;
    }
    return max;
}