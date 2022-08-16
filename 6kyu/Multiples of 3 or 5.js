//https://www.codewars.com/kata/514b92a657cdc65150000006

//Attempt#1
function solution(n) {
    if(n <= 0) {return 0};
  
    let res = 0;
    for(let i = 1; i < n; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            res += i;
        }
    }
    return res;
}

//Attempt#2
function solution(n) {
    if(n <= 0) {return 0};
  
    let list = [];
    while(n > 1) {
        list.push(--n);
    }
    
    return list.reduce((acc, cur) => {
        return acc += (cur % 5 === 0 || cur % 3 === 0) ? cur : 0; 
    }, 0)
}