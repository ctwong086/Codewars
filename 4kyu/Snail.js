//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

//Attempt#1
let snail = function(arr) {
    let res = [];
    
    while(arr.length > 0) {
        res.push(...arr[0]);
        arr.splice(0, 1);
        if(arr.length === 0) {break};
      
        for(let i = 0; i < arr.length - 1; i++) {
            res.push(arr[i][arr[i].length - 1]);
            arr[i].splice(arr[i].length - 1);
        }
        if(arr.length === 0) {break};
        
        let rev = arr[arr.length - 1].reverse();
        res.push(...rev);
        arr.splice(arr.length - 1, 1);
        if(arr.length === 0) {break};
  
        for(let i = 0; i < arr.length; i++) {
            res.push(arr[arr.length - i - 1][0]);
            arr[arr.length - i - 1].splice(0, 1);
        }
        if(arr.length === 0) {break};
    }

    return res;
}

//Attempt#2
let snail = function(arr) {
    let res;
    
    while(arr.length) {
        res = res ? res.concat(arr.shift()) : arr.shift();

        for(let i = 0; i < arr.length; i++) {
            res.push(arr[i].pop());
        }
      
        res = res.concat((arr.pop() || []).reverse());

        for(let i = arr.length - 1; i > 0; i--) {
            res.push(arr[i].shift());
        }
    }
    
    return res;
}