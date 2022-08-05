//https://www.codewars.com/kata/5267faf57526ea542e0007fb

//Attempt#1
Math.round = function(number) {
    let int = parseInt(number.toString().split('.')[0]);
    let dec = number.toString().split('.')[1] || 0;
    
    return (parseInt(dec[0]) > 4) ? int + 1 : int;
}

Math.ceil = function(number) {
    let int = parseInt(number.toString().split('.')[0]);
    let dec = number.toString().split('.')[1] || 0;
    
    return (parseInt(dec) > 0) ? int + 1 : int;
};

Math.floor = function(number) {
    let int = parseInt(number.toString().split('.')[0]);
  
    return int;
};

//Attempt#2
Math.round = function(number) {
    let int = parseInt(number);
    return (number - int >= 0.5) ? parseInt(number) + 1: parseInt(number);
};

Math.ceil = function(number) {
    let int = parseInt(number);
    return (number - int > 0) ? parseInt(number) + 1 : parseInt(number); 
};

Math.floor = function(number) {   
    return parseInt(number);
};