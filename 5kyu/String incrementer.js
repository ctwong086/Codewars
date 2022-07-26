//https://www.codewars.com/kata/54a91a4883a7de5d7800009c

//Attempt#1
function incrementString (str) {
    return str.replace(/([0-8]|\d?9+)?$/, e => e ? parseInt(e) + 1 : 1);
}