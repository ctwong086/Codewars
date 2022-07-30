//https://www.codewars.com/kata/53db96041f1a7d32dc0004d2

//Attempt#1
function doneOrNot(board) {
    let columns = [];
    let regions = [];
  
    for(let row = 0; row < board.length; row++) {
        columns[row] = [];
        for(let col = 0; col < board.length; col++) {
            let pos = Math.floor(row / 3) + Math.floor(col / 3) * 3;
            regions[pos] = regions[pos] || [];
            
            regions[pos].push(board[row][col]);
            columns[row].push(board[col][row]);
        }
    }
    let isValidRow = function(row) {
        return row.reduce((acc, cur) => acc + cur) === 45;
    }
    let isValidBoard = board.every(isValidRow) && columns.every(isValidRow) && regions.every(isValidRow);
    return isValidBoard ? 'Finished!' : 'Try again!';
}