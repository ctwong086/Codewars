//https://www.codewars.com/kata/555624b601231dc7a400017a

//Attempt#1
function josephusSurvivor(n, k) {
    let arr = [];
    for(let i = 1; i <= n; i++) {
        arr.push(i);
    }
    
    let index = (k - 1) % arr.length;
    while(arr.length > 1) {
        arr.splice(index, 1);
        index = (index + k - 1) % arr.length;
    }
    return arr[0];
}

//Attempt#2
function josephusSurvivor(n, k) {
    let result = 1;
    for(let i = 1; i <= n; i++) {
        result = ((result + k - 1) % i) + 1;
    }
    return result;
}

console.log(4%4)