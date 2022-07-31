//https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

//Attempt#1
function firstNonRepeatingLetter(s) {
    let arr = s.split('');
    let result = arr.find(e => {
        if(arr.indexOf(e) === arr.lastIndexOf(e)) {
            if(/[\W\d]/.test(e)) {
                return e;
            };
            if(arr.indexOf(e.toUpperCase()) == -1 || arr.indexOf(e.toLowerCase()) == -1) {
                return e;
            }
        }
    });
    return result || '';
}

//Attempt#2
function firstNonRepeatingLetter(s) {
    let l = s.toLowerCase();
    
    for(let i = 0; i < l.length; i++) {
        if(l.indexOf(l[i]) === l.lastIndexOf(l[i])) {
            return s[i];        
        } 
    }
    return '';
}

//Attempt#3
function firstNonRepeatingLetter(s) {
    return s.split('').find(e => {
        return s.match(new RegExp(`${e}`, 'gi')).length === 1;
    }) || '';
}