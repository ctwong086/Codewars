//https://www.codewars.com/kata/58e24788e24ddee28e000053

//Attempt#1
function simple_assembler(program) {
    let result = {};
    let index = 0;
  
    while(index < program.length) {
        let arr = program[index].split(' ');
        let target = arr[1];
        let temp = arr[2];
  
        switch(arr[0]) {
            case 'mov':
                if(parseInt(temp) != temp) {
                    let n = result[arr[2]];
                    result[target] = n;
                } else {
                    result[target] = parseInt(temp);
                }
                index++;
                break;
            case 'inc':
                result[target]++;
                index++;
                break;
            case 'dec':
                result[target]--;
                index++;
                break;
            case 'jnz':
                if(result[target] != 0) {
                    index += parseInt(temp);
                } else {
                    index++;
                }
                break;
        }
    }
    return result;
}