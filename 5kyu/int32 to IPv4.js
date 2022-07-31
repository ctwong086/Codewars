//https://www.codewars.com/kata/52e88b39ffb6ac53a400022e

//Attempt#1
function int32ToIp(int32) {
    if(int32 === 0) {return '0.0.0.0'};
  
    let result = [];
    let bit = int32.toString(2).split('');
    while(bit.length > 0) {
        result.push(bit.splice(-8).join(''));
    }
  
    return result2 = result.map(e => {
        return parseInt(e, 2);
    }).reverse().join('.');
}

//Attempt#2
function int32ToIp(int32) {
    return (int32 >>> 24) + '.' + (int32 << 8 >>> 24) + '.' + (int32 << 16 >>> 24) + '.' + (int32 << 24 >>> 24);
}