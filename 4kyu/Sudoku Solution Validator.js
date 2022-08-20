//https://www.codewars.com/kata/529bf0e9bdf7657179000008

//Attempt#1
function validSolution(board) {
    let col = [];
    let square = [];
    
    for(let i = 0; i < board.length; i++){
        col[i] = col[i] || [];
        for(let j = 0; j < board.length; j++) {
            let pos = Math.floor(i / 3) * 3 + Math.floor(j / 3);
          
            col[i].push(board[j][i]);
            square[pos] = square[pos] || [];
            square[pos].push(board[i][j]);
        }
    }
  
    return isValidRow(board) && isValidRow(col) && isValidRow(square);
}

function isValidRow(arr) {
    return arr.every(x => x.every((e, i, arr) => arr.indexOf(e) === arr.lastIndexOf(e) && e !== 0));
}