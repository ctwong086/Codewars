//https://www.codewars.com/kata/51e04f6b544cf3f6550000c1

//Attempt#1
var beeramid = function(bonus, price) {
    let can = Math.floor(bonus / price);
    let stack = 0;
    let count = 0;
  
    for(let i = 1; i <= can; i ++) {
        if((stack + i ** 2) > can) {
           break;
        }
        stack += i ** 2;
        count++;
    }
    return count;
}

//Attempt#2
var beeramid = function(bonus, price) {
    let can = Math.floor(bonus / price);
    if(can < 1) {return 0};
    let stack = 0;
  
    for(let i = 1; stack <= can; i++) {
        if(stack + i ** 2 > can) {
            return i - 1;;
        }
        stack += i ** 2;
    }
}

//Attempt#3 Random test may fail
var beeramid = function(bonus, price, level = 1) {
    if(level ** 2 * price > bonus) {
        return level - 1;
    }
    return beeramid(bonus - level ** 2 * price, price, level + 1);
}