//https://www.codewars.com/kata/525f50e3b73515a6db000b83

//Attempt#1
function createPhoneNumber(numbers) {
    let one = numbers.slice(0, 3).join('');
    let two = numbers.slice(3, 6).join('');
    let three = numbers.slice(6, 10).join('');
  
    return `(${one}) ${two}-${three}`;
}

//Attempt#2
function createPhoneNumber(numbers) {
    let format = '(xxx) xxx-xxxx';
    
    for(let i in numbers) {
        format = format.replace('x', numbers[i]);
    }
    return format;
}