//https://www.codewars.com/kata/5263a84ffcadb968b6000513

//Attempt#1
function matrixMultiplication(a, b) {
    let len = a.length;
    let res = new Array(len);
  
    for(let i = 0; i < len; i++) {
        res[i] = new Array(len);
        for(let j = 0; j < len; j++) {
            res[i][j] = 0;
            for(let x = 0; x < len; x++) {
                res[i][j] += a[i][x] * b[x][j];
            }
        }
    }
    return res;
}