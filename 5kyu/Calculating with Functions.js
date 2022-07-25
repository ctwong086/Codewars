//Attempt#1
function zero(func) {return func ? func(0) : 0};
function one(func) {return func ? func(1) : 1};
function two(func) {return func ? func(2) : 2};
function three(func) {return func ? func(3) : 3};
function four(func) {return func ? func(4) : 4};
function five(func) {return func ? func(5) : 5};
function six(func) {return func ? func(6) : 6};
function seven(func) {return func ? func(7) : 7};
function eight(func) {return func ? func(8) : 8};
function nine(func) {return func ? func(9) : 9};

function plus(right) {
    return left => left + right; 
};
function minus(right) { 
    return left => left - right;
};
function times(right) {
    return left => left * right;
};
function dividedBy(right) { 
    return left => parseInt(left / right); 
};