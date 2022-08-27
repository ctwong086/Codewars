//https://www.codewars.com/kata/576757b1df89ecf5bd00073b

//Attempt#1
function towerBuilder(nFloors) {
    let res = [];
    const max = nFloors * 2 - 1;
  
    for(let i = 0; i < nFloors; i++) {
        let stars = 1 + i * 2;
        let spaces = max - stars;
        
        res.push(' '.repeat(spaces / 2) + '*'.repeat(stars) + ' '.repeat(spaces / 2));
    }
    return res;
}

//Attempt#2
function towerBuilder(n) {
    let tower = [];
    for(let i = 0; i < n; i++) {
        tower.push(' '.repeat(n - i - 1) + '*'.repeat(1 + i * 2) + ' '.repeat(n - i - 1)); 
    }
    return tower;
}