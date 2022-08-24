//https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

//Attempt#1
function findEvenIndex(arr) {
    for(let i = 0; i < arr.length; i++) {
        let first = arr.slice(0, i).reduce((acc, cur) => acc + cur, 0);
        let second = arr.slice(i + 1).reduce((acc, cur) => acc + cur, 0);
        
        if(first === second) {return i};
    }
  
   return -1;
}