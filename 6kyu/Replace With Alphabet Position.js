//https://www.codewars.com/kata/546f922b54af40e1e90001da

//Attempt#1
function alphabetPosition(text) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    return text.toLowerCase()
               .split('')
               .filter(e => e.match(/[a-z]/))
               .map(e => alphabet.indexOf(e) + 1)
               .join(' ');
}