//https://www.codewars.com/kata/517abf86da9663f1d2000003

//Attempt#1
function toCamelCase(str) {
    return str.replace(/[-_]\w/g, (e) => {
        return e[1].toUpperCase();
    });
}