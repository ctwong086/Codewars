//https://www.codewars.com/kata/514a024011ea4fb54200004b

//Attempt#1
function domainName(url) {
    let reg1 = new RegExp('^(http://|https://)?(www.)?', 'gi');
    let first = url.match(reg1);
  
    url = url.slice(first[0].length);
    return url.split('.')[0];
}

//Attempt#2
function domainName(url) {
    return url.slice(url.match(/^(http(s?):\/\/)?(www\.)?/gi)[0].length).split('.')[0];
}

//Attempt#3
function domainName(url) {
    url = url.replace(/http(s?):\/\//, '');
    url = url.replace(/www./, '');
    return url.split('.')[0];
}