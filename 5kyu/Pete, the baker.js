//https://www.codewars.com/kata/525c65e51bf619685c000059

//Attempt#1
function cakes(recipe, available) {
    let result = [];
    for(let i in recipe) {
        if(available[i]) {
            result.push(parseInt(available[i] / recipe[i]));
        } else {
          return 0;
        } 
    }
    return Math.min(...result);
}

//Attempt#2
function cakes(recipe, available) {
    return Math.min(...Object.keys(recipe).map(e => {
        return Math.floor(available[e] / recipe[e]) || 0;
    }))
}
