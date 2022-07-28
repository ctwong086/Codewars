//https://www.codewars.com/kata/54d81488b981293527000c8f

//Attempt#1 Execution Timed out
function sumPairs(ints, s) {
    let result = [];
    let index = Number.MAX_VALUE;
    for(let i = 0; i < ints.length; i++) {
        for(let j = i + 1; j < ints.length; j++) {
            if(ints[i] + ints[j] === s && j - i < index) {
                result = [ints[i], ints[j]];
                index = Math.min(index, j - i);
            }
        }
    }
    return result.length ? result : undefined;
}

//Attempt#2
function sumPairs(ints, s) {
    let list = new Set();
    for(let i = 0; i < ints.length; i++) {
        let opposite = s - ints[i];
        if(list.has(ints[i])) {
            return [opposite, ints[i]];
        } else {
          list.add(opposite);
        }
    }
}