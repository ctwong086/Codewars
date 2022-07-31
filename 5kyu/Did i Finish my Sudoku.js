//https://www.codewars.com/kata/53db96041f1a7d32dc0004d2

//Attempt#1
function doneOrNot(board) {
    //declaration
    let blocks = [];
    let columns = [];
  
    //mutute board to blocks/columns
    for(let i = 0; i < board.length; i++) {
        //init if not exist
        columns[i] = [];
        for(let j = 0; j < board.length; j++) {
            //cal which index to push
            let pos = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            //init if not exist
            blocks[pos] = blocks[pos] || [];  
          
            blocks[pos].push(board[i][j]);
            columns[i].push(board[j][i]);
        }
    }
    
    //test if every row is valid
    let isValidRow = function(arr) {
        return (arr.reduce((acc, cur) => acc + cur) === 45 && arr.every(e => arr.indexOf(e) === arr.lastIndexOf(e)));
    }
    //test if blocks/columns/board is valid
    let isValid = board.every(isValidRow) &&
                  columns.every(isValidRow) &&
                  blocks.every(isValidRow);
    
    return isValid ? "Finished!" : "Try again!";
}