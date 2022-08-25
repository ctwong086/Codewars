//https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

//Attempt#1
function solution(list) {
    let res = [];
    for(let i = 0; i < list.length; i++) {
        let prev = i;
      
        while(list[i + 1] - list[i] === 1) {
            i++;
        }
        if(prev === i) {res.push(list[prev])}
        else {
            if(i - prev >= 2) {
                res.push(`${list[prev]}-${list[i]}`);  
            } else {
                res.push(list[prev]); 
                res.push(list[i]); 
            }
        }
    }

    return res.join(',');
}