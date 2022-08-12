//https://www.codewars.com/kata/52756e5ad454534f220001ef

//Attempt#1
function LCS(x, y) {
    let longest = (x, y) => x.length > y.length ? x : y;
    
    if(!x.length || !y.length) {
        return '';
    } else if(x[0] === y[0]) {
        return x[0] + LCS(x.slice(1), y.slice(1));
    } else {
        return longest(LCS(x.slice(1), y), LCS(x, y.slice(1)));   
    }
}

//Attempt#2
function LCS(x, y) {
    x = x.split('');
  
    return y.split('').filter(e => {
        if(x.indexOf(e) !== -1) {
            return x.splice(0, x.indexOf(e) + 1);
        }
    }).join('');
}