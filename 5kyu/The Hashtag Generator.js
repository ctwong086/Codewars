//https://www.codewars.com/kata/52449b062fb80683ec000024

//Attempt#1
//starts with #
//final str.length > 140 == false
//empty string == false
function generateHashtag(str) {
    if(str.length === 0 || !/\w/g.test(str)) {return false};
  
    let result = str.trim().split(' ');  
    for(let i = 0; i < result.length;) {
        if(result[i] === '') {
            result.splice(i, 1);
        } else {
            result[i] = result[i][0].toUpperCase() + result[i].slice(1);
            i++;
        }
    }
    return result.join('').length >= 140 ? false : '#' + result.join('');
}

//Attempt#2
function generateHashtag(str) {
    if(str.length === 0 || !/\w/g.test(str)) {return false};
  
    let result = str.split(' ').map(e => {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }).join('');
    
    return result.length >= 140 ? false : '#' + result;
}