//https://www.codewars.com/kata/5902bc7aba39542b4a00003d

//Attempt#1
let whoEatsWho = function(zoo) {
    let foodChain = {'antelope': 'grass',
                     'big-fish': 'little-fish',
                     'bug': 'leaves',
                     'bear': ['big-fish', 'bug', 'chicken', 'cow', 'leaves', 'sheep'],
                     'chicken': 'bug',
                     'cow': 'grass',
                     'fox': ['chicken', 'sheep'],
                     'giraffe': 'leaves',
                     'lion': ['antelope', 'cow'],
                     'panda': 'leaves',
                     'sheep': 'grass'}
    
    let animals = zoo.split(',');
    let res = [zoo];

    for(let i = 0; i < animals.length;) {
        let cur = animals[i];
        let left = animals[i - 1];
        let right = animals[i + 1];
      
        if(foodChain[cur]) {
            if(foodChain[cur].includes(left)) {
                res.push(`${cur} eats ${left}`);
                animals.splice(i - 1, 1);
                i = 0;
            } else if(foodChain[cur].includes(right) ) {
                res.push(`${cur} eats ${right}`);
                animals.splice(i + 1, 1);
                i = 0;
            } else {
                i++;
            }
        } else {
            i++;
        }
    }
    res.push(animals.join(','));
    return res;
}