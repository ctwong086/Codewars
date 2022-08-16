//https://www.codewars.com/kata/573992c724fc289553000e95

//Attempt#1
function smallest(n) {
    let min = Number.MAX_VALUE;
    let removeIndex = 0;
    let insertIndex = 0;
    let arr = [...n.toString()].map(e => Number(e));
  
    if(arr.every(e => e === arr[0])) {return [n, 0, 0]};
  
    for(let from = 0; from < arr.length; from++) {
        for(let to = 0; to < arr.length; to++) {
            if(from !== to) {
                let temp = insert(arr, from, to);             
                if(Math.min(min, temp) === temp && min !== temp) {
                    min = temp;
                    removeIndex = from;
                    insertIndex = to;
                }
            }
        }
    }
    return [min, removeIndex, insertIndex];
}

function insert(arr, from, to) {
    let newArr = new Array(...arr);
    let temp = newArr.splice(from, 1);
    newArr.splice(to, 0, ...temp);

    return Number(newArr.join(''));
}