//https://www.codewars.com/kata/54c9fcad28ec4c6e680011aa

//Attempt#1
function isMerge(s, part1, part2) {
    if(s === '' && part1 === '' && part2 === '') {return true};
    
    if(s !== '') {
        if(s[0] === part1[0] && s[0] === part2[0]) {
            return (isMerge(s.slice(1), part1.slice(1), part2) || isMerge(s.slice(1), part1, part2.slice(1)));
        } 
        if(s[0] === part1[0]) {
            return isMerge(s.slice(1), part1.slice(1), part2);
        } 
        if(s[0] === part2[0]) {
            return isMerge(s.slice(1), part1, part2.slice(1));
        }
    }
    return false;
}