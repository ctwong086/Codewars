//https://www.codewars.com/kata/54da539698b8a2ad76000228

//Attempt#1
function isValidWalk(walk) {
    let steps = [0, 0];
    let len = walk.length;
    for(let i = 0; i < walk.length; i++) {
        switch(walk[i]) {
            case 'n': steps[0]++; break;
            case 's': steps[0]--; break;
            case 'e': steps[1]++; break;
            case 'w': steps[1]--; break;  
        }
    }
    return steps[0] === 0 && steps[1] == 0 & len === 10;
}