//https://www.codewars.com/kata/514a024011ea4fb54200004b

//Attempt#1
function domainName(url) {
    let reg1 = new RegExp('^(http://|https://)?(www.)?', 'gi');
    let first = url.match(reg1);
  
    url = url.slice(first[0].length);
    return url.split('.')[0];
}