//https://www.codewars.com/kata/5270d0d18625160ada0000e4

//Attempt#1
function score(dice) {
    let result = 0;
    let count = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};
    for(let x of dice) {
        count[x]++;
    }

    for(let i = 1; i <= 6; i++) {
        switch(i) {
            case 1:
                while(count[i] >= 3) {
                    count[i] -= 3;
                    result += 1000;
                }
                while(count[i] >= 1) {
                    count[i] -= 1;
                    result += 100;
                }
                break;
            case 5:
                while(count[i] >= 3) {
                    count[i] -= 3;
                    result += 500;
                }
                while(count[i] >= 1) {
                    count[i] -= 1;
                    result += 50;
                }
                break;
            case 2:
                while(count[i] >= 3) {
                    count[i] -= 3;
                    result += 200;
                }
                break;
            case 3:
                while(count[i] >= 3) {
                    count[i] -= 3;
                    result += 300;
                }
                break;
            case 4:
                while(count[i] >= 3) {
                    count[i] -= 3;
                    result += 400;
                }
                break;
            case 6:
                while(count[i] >= 3) {
                    count[i] -= 3;
                    result += 600;
                }
                break;
        }
    }
    return result;
}

//Attempt#2
function score(dice) {
    let count = [0, 0, 0, 0, 0, 0];
    let tri = [1000, 200, 300, 400, 500, 600];
    let one = [100, 0, 0, 0, 50, 0];
  
    dice.forEach(e => count[e - 1]++);
    return count.reduce((sum, cur, i) => {
        return sum + (cur >= 3 ? tri[i] : 0) + (one[i] * (cur % 3));
    }, 0);
}