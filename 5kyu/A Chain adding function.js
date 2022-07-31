//https://www.codewars.com/kata/539a0e4d85e3425cb0000a88

//Attempt#1 Need more prac
function add(n) {
    let func = function(m) {
        return add(n + m);
    }
    
    func.valueOf = function() {
        return n;
    }
    return func;
}