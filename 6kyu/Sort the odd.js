//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

//Attempt#1
function sortArray(arr) {
    let odd = arr.filter(e => e % 2 !== 0).sort((a, b) => a - b);
    let index = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            arr[i] = odd[index++];
        }
    }
    return arr;
}