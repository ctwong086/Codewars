//https://www.codewars.com/kata/57feb00f08d102352400026e

//Attempt#1
let flapDisplay = function(lines, rotors) {
    const order = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789'; //54
  
    for(let row = 0; row < lines.length; row++) {
        for(let col = 0; col < lines[row].length; col++) {
            
            while(rotors[row][col] > 0) {
                let temp = lines[row];

                lines[row] = temp.split('').map((e, i) => {
                    if(i >= col) {
                        return order[(order.indexOf(e) + 1) % 54];
                    } else {
                        return e;
                    }
                }).join('');
              
                rotors[row][col]--;
            }
        }
    }    
    return lines;
}