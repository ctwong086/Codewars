//https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

// all pos => sum of arr
// all neg => 0
// empty => 0

//Attempt#1
var maxSequence = function(arr) {
    console.log(arr);
    if(arr.every(e => Math.sign(e) === '-1') || arr.length == 0) {return 0};
    let maxSum = 0;
  
    for(let i = 0; i < arr.length; i++) {
        let sum = 0;
        for(let j = i; j < arr.length; j++) {
            sum += arr[j];
            maxSum = Math.max(sum, maxSum);  
        } 
    }
    return maxSum;
}

//Attempt#2 Kadane’s Algorithm
var maxSequence = function(arr) {
    if(arr.length === 0 || arr.every(e => Math.sign(e) === -1)) {return 0};
    let max = Number.MIN_VALUE;
    let acc = 0;
    
    for(let i = 0; i < arr.length; i++) {
        acc += arr[i];
        if(max < acc) {
            max = acc;
        }
        if(acc < 0) {
            acc = 0;
        }
    }
    return max;
}