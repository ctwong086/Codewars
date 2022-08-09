//https://www.codewars.com/kata/556b85b433fb5e899200003f

//Attempt#1
function mixedFraction(s) {
    let res = '';
    let firstPart = parseInt(s.split('/')[0]);
    let secondPart = parseInt(s.split('/')[1]);
    if(secondPart === 0) {throw "ZeroDivisionError"};
    if(firstPart / secondPart < 0) {
        res += '-';
    }
  
    firstPart = Math.abs(firstPart);
    secondPart = Math.abs(secondPart);
  
    let int = parseInt(firstPart / secondPart);
    let numerator = firstPart % secondPart;
    let denominator = secondPart;

    if(numerator === 0 || denominator === 0) {
        return res + int.toString();  
    }  
    
    let gcdVal = gcd(numerator, denominator);
    numerator /= gcdVal;
    denominator /= gcdVal;
    
    if(int === 0) {
        res += numerator.toString() + '/'+ denominator.toString();
    } else {
        res += int.toString() + ' ' + numerator.toString() + '/' + denominator.toString();
    }    
    return res;
}

function gcd(a, b) {
     return a < b ? gcd(b, a) : a % b == 0 ? b : gcd(b, a % b);
}