//https://www.codewars.com/kata/525caa5c1bf619d28c000335

//Attempt#1
function isSolved(board) {
    let cols = [];
    let tilts = [];
  
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            cols[j] = cols[j] || [];
            cols[j].push(board[i][j]);
          
            if(i === 0) {
                tilts[0] = tilts[0] || [];
                tilts[0].push(board[j][j]);
            }
            if(i === 2) {
                tilts[1] = tilts[1] || [];
                tilts[1].push(board[j][i - j]);
            }
        }
    }
    if(checkOne(board, cols, tilts)) {
        return 1;
    } else if(checkTwo(board, cols, tilts)) {
        return 2;
    } else if(isFinished(board, cols, tilts)){
        return -1;
    } else {
        return 0;
    }
}

function checkOne(row, col, tilt) {
    let rowRes = row.map(e => {
        return e.every(x => x === 1);
    });
    let colRes = col.map(e => {
        return e.every(x => x === 1);
    });
    let tiltRes = tilt.map(e => {
        return e.every(x => x === 1);
    });
  
    let res = rowRes.concat(colRes).concat(tiltRes);
    return res.some(e => e === true);
}

function checkTwo(row, col, tilt) {
    let rowRes = row.map(e => {
        return e.every(x => x === 2);
    });
    let colRes = col.map(e => {
        return e.every(x => x === 2);
    });
    let tiltRes = tilt.map(e => {
        return e.every(x => x === 2);
    });
  
    let res = rowRes.concat(colRes).concat(tiltRes);
    return res.some(e => e === true);
}

function isFinished(row, col, tilt) {
    let rowRes = row.map(e => {
        return e.includes(0);
    }); 
    let colRes = col.map(e => {
        return e.includes(0);
    });  
    let tiltRes = tilt.map(e => {
        return e.includes(0);
    });  
  
    let res = rowRes.concat(colRes).concat(tiltRes);
    return res.some(e => e === true);
}