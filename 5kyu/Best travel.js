//https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa

//Attempt#1 Need more prac on recursive
function chooseBestSum(t, k, ls) {
    let max = 0;
    let recursive = function(towns, index) {
        towns = towns || [];
        if(towns.length === k) {
            let sum = towns.reduce((acc, cur) => acc + cur, 0);
            if(sum <= t && sum > max) {
                max = sum;
            }
            return;
        }
        for(let i = index + 1 || 0; i < ls.length; i++) {
            recursive(towns.concat(ls[i]), i);
        }
    }
    recursive();
  
    return max || null;
}