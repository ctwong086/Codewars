//https://www.codewars.com/kata/5279f6fe5ab7f447890006a7

//Attempt#1
function pickPeaks(arr) {
    let result = {pos: [], peaks: []};

    for(let i = 1; i < arr.length - 1; i++) {
        let cur = arr[i];
        if(cur > arr[i - 1] && cur > arr[i + 1]) {
            result.pos.push(i);
            result.peaks.push(cur);
        }
        if(cur === arr[i + 1]) {
            let sliced = arr.slice(i + 1);
            let skip = 0;
            for(let j = 0; j < sliced.length; j++) {
                if(sliced[j] === cur) {
                    skip++;
                } else {
                    break;
                }
            }
            if(cur > arr[i - 1] && cur > arr[i + skip + 1]) {
                result.pos.push(i);
                result.peaks.push(cur);
                i += skip;
            }
        }
    }
    return result;
}

//Attempt#2
function pickPeaks(arr) {
    let result = {pos: [], peaks: []};
    
    if(arr.length > 2) {
        let prevIndex = -1;
        for(let i = 1; i < arr.length; i++) {
            if(arr[i] > arr[i - 1]) {
                prevIndex = i;
            } else if(arr[i] < arr[i - 1] && prevIndex !== -1) {
                result.pos.push(prevIndex);
                result.peaks.push(arr[prevIndex]);
                prevIndex = -1;
            }
        }
    }
    return result;
}