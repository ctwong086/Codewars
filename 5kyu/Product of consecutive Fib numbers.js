//Attempt#1
function productFib(prod) {
    let fibNum = [0, 1];
    let result = [0, 0, false];
  
    while(fibNum[fibNum.length - 1] * fibNum[fibNum.length - 2] < prod) {
        let prev = fibNum[fibNum.length - 2]; 
        let cur = fibNum[fibNum.length - 1];
        
        fibNum.push(prev + cur);
        if(fibNum[fibNum.length - 2] * fibNum[fibNum.length - 1] === prod) {
          result[2] = true;
        } 
    }
    result[0] = fibNum[fibNum.length - 2];
    result[1] = fibNum[fibNum.length - 1];
    return result;
}
//Attempt#2
function productFib(prod) {
    let [prev, cur] = [0, 1];
    
    while(prev * cur < prod) {
      [prev, cur] = [cur, prev + cur];
    }
    return [prev, cur, prev * cur === prod];
}