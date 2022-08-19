//https://www.codewars.com/kata/55c45be3b2079eccff00010f

//Attempt#1
function order(words) {
    if(words === '') {return ''}
  
    let arr = words.split(' ');
    let res = [];
    let n = 1;
  
    while(arr.length > 0) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i].includes(String(n))) {
                res.push(...arr.splice(i, 1));
            }
        }
        n++;
    }
    return res.join(' ');
}

//Attempt#2
function order(words) {
    return words.split(' ').sort((a, b) => {
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}