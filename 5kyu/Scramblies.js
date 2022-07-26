//https://www.codewars.com/kata/55c04b4cc56a697bb0000048

//Attempt#1 Short String testcase PASS | Long String testcase FAIL
function scramble(str1, str2) {
    for(let i = 0; i < str2.length; i++) {
        let cur = str2[i];
        let index = str1.indexOf(cur);
        if(index === -1) {
            return false;
        }
        str1 = str1.slice(0, index) + str1.slice(index + 1);
    }
    return true;
}
//Attempt#2
function scramble(str1, str2) {
    return str2.split('').every(e => {
        let reg = new RegExp(`${e}`, 'gi');
        return str1.match(reg) >= str2.match(reg);
    })
}

//Attempt#3
function scramble(str1, str2) {
    let occurrence = str1.split('').reduce((acc, cur) => {
        acc[cur] ? acc[cur]++ : acc[cur] = 1;
        return acc;
    }, {});
    return str2.split('').every(e => --occurrence[e] >= 0);
}