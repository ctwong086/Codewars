//https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3

//Attempt#1 Fail Non-latin cases
function findUniq(arr) {
    let temp = [];
    let res = [];
    
    for(let x in arr) {
        let word = arr[x].toLowerCase().split('').sort();
        word = word.filter((e, i) => {
            return word.indexOf(e) === i;
        })
      
        temp.push(word.join(''));
    }

    let index = 0;
    let pivot = temp[0];
    while(!pivot.match(/\w/g)) {
        pivot = temp[index];
        index++;
    }
    let pivotIndex = 0;
  
    for(let i = 0; i < temp.length; i++) {
        if(!temp[i].includes(pivot)) {
            res.push(temp[i]);
            pivotIndex = i;
        }
    }
  
    let arrLeft = temp.filter(e => {
        return e.includes(pivot);
    })

    return res.length > 1 ? arrLeft[0] : arr[pivotIndex];
}

//Attempt#2
function findUniq(arr) {
    let temp = [];
    
    for(let x in arr) {
        let word = arr[x].toLowerCase().split('').sort();
        word = word.filter((e, i) => {
            return word.indexOf(e) === i;
        })
      
        temp.push(word.join(''));
    }
    
    return arr[temp.findIndex((e, i, ar) => {
        return ar.indexOf(e) === ar.lastIndexOf(e);
    })];
}

//Attempt#3
function findUniq(arr) {
    let res = arr.map(e => {
        return [...new Set([...e.toLowerCase()].sort())].join('');
    }).findIndex((e, i, ar) => {
        return ar.indexOf(e) === ar.lastIndexOf(e);
    })
    return arr[res];
}