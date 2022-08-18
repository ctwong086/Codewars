//https://www.codewars.com/kata/5259510fc76e59579e0009d4

//Attempt#1
// use length as first filter
// use the same character as second filter
// and also most continuous characters
function Dictionary(words) {
    this.words = words;
}

Dictionary.prototype.findMostSimilar = function(term) {
    let test = this.words.filter(e => {
        return Math.abs(e.length - term.length) <= 2;
    });
    let max = Number.MIN_VALUE;
    let conMax = Number.MIN_VALUE;
    let res = '';

    for(let i = 0; i < test.length; i++) {
        let cur = test[i];
        let temp = term;
        
        let count = same(cur, temp);

        if(count[0] >= max && count[1] > conMax) {
            conMax = count[1];
            max = count[0];
            res = test[i];
        }
    }
    return res;
}

function same(a, b) {
    let tempB = b.split('');
    let tempA = a.split('');
    let count = 0;
    let con = 0;
  
    for(let i = 0; i < tempA.length; i++) {
        for(let j = i; j < tempA.length; j++) {
            let temp = tempA.slice(i, j).join('');

            if(b.includes(temp)) {
                con = Math.max(con, temp.length);
            }
        }
    }
    for(let i = 0; i < tempB.length; i++) {
        if(a.includes(tempB[i])) {
            count++;
            tempA.splice(a.indexOf(tempB[i]), 1);
        }
    }
    return [count, con];
}