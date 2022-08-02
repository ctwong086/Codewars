//https://www.codewars.com/kata/5550d638a99ddb113e0000a2

//Attempt#1
function josephus(items, k) {
    let result = [];
    let i = k - 1;
  
    while(items.length > 0) {
        for(i; i < items.length; i += k) {
            result.push(items[i]);
            items.splice(i, 1);
            i--;
        }
        i = i - items.length;
    }
    return result;
}

//Attempt#2
function josephus(items, k) {
    let result = [];
    let index = 0;
    while(items.length > 0) {
        index = (index + k - 1) % items.length;
        result.push(items[index]);
        items.splice(index, 1);
    }
    return result;
}