//https://www.codewars.com/kata/54da5a58ea159efa38000836

//Attempt#1
function findOdd(arr) {
    let list = {};
    for(let i = 0; i < arr.length; i++) {
        let cur = arr[i];
        list[cur] = list[cur] + 1 || 1;
    }
    
    for(let x in list) {
        if(list[x] % 2 !== 0) {
            return Number(x);
        }
    }
}