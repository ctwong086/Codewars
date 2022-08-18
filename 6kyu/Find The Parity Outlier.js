//https://www.codewars.com/kata/5526fc09a1bbd946250002dc

//Attempt#1
function findOutlier(integers) {
    let odd = integers.filter(e => e % 2 !== 0);
    let even = integers.filter(e => e % 2 === 0);

    return odd.length === 1 ? odd[0] : even[0];
}