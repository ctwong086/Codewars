//https://www.codewars.com/kata/51fc12de24a9d8cb0e000001

//Attempt#1
function validISBN10(str) {
    str = str.split('');
    let isValidInput = str.every((n, i)=> {
        if(parseInt(n) == n) {
            return true;
        } else if(i === 9 && n === 'X') {
            return true;
        } else {
            return false;
        }
    }) && str.length === 10;
    
    if(isValidInput) {
        let sum = str.reduce((acc, cur, i) => {
            if(cur === 'X' && i === 9) {
                acc += 100;
            } else {
                acc += parseInt(cur) * (i + 1);
            }
            return acc;
        }, 0)
        
        return sum % 11 === 0 ? true : false;      
    } else {
        return false;
    }
}

//Attempt#2
function validISBN10(isbn) {
    return isbn.length === 10 && isbn.split('').reduce((acc, cur, i) => {
        return acc + (((cur === 'X' && i === 9) ? 10 : cur) * (i + 1));
    }, 0) % 11 === 0;
}