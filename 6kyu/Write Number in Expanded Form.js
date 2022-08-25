//https://www.codewars.com/kata/5842df8ccbd22792a4000245

//Attempt#1
function expandedForm(num) {
    let arr = num.toString()
                 .split('')
                 .reverse()
                 .map((e, i) => {
                      return e * (10 ** i);
                 })

    return arr.filter(e => e !== 0).reverse().join(' + ');
}