//https://www.codewars.com/kata/526dbd6c8c0eb53254000110

//Attempt#1
function alphanumeric(str) {
    if(/\W/.test(str)) {return false};
    let res = str.match(/[a-z0-9]/gi);

    return res ? res.length === str.length : false;
}

//Attempt#2
function alphanumeric(string) {
    return (/^[a-z0-9]+$/i).test(string);
}