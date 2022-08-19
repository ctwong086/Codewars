//https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

//Attempt#1
// year = s / 31,556,952
// day = s / 86,400
// hour = s / 3,600
// minute = s / 60
// second
function formatDuration(s) {
    if(s === 0) {return 'now'};
    let year = 0, day = 0, hour = 0, minute = 0, second = 0;
    let time = [];
    let res = '';
    
    while(s >= 31536000) {
        s -= 31536000;
        year++;
    }

    while(s >= 86400) {
        s -= 86400;
        day++;
    }

    while(s >= 3600) {
        s -= 3600;
        hour++;
    }  
    while(s >= 60) {
        s -= 60;
        minute++;
    }
    second = s;
 
    if(year > 0) {
        if(year > 1) {
            time.push(`${year} years`);
        } else {
            time.push(`${year} year`);
        }
    }
    if(day > 0) {
        if(day > 1) {
            time.push(`${day} days`);
        } else {
            time.push(`${day} day`);
        }
    } 
    if(hour > 0) {
        if(hour > 1) {
            time.push(`${hour} hours`);
        } else {
            time.push(`${hour} hour`);
        }
    }   
    if(minute > 0) {
        if(minute > 1) {
            time.push(`${minute} minutes`);
        } else {
            time.push(`${minute} minute`);
        }
    }   
    if(second > 0) {
        if(second > 1) {
            time.push(`${second} seconds`);
        } else {
            time.push(`${second} second`);
        }
    }
    
    switch(time.length) {
        case 1:
            res += time[0];
            break;
        case 2:
            res += `${time[0]} and ${time[1]}`;
            break;
        default:
            let firstPart = time.slice(0, time.length - 2);
            let secondPart = time.slice(time.length - 2);
            res += `${firstPart.join(', ')}, ${secondPart.join(' and ')}`;
    }

    return res;
}

//Attempt#2
function formatDuration(time) {
    if(!time) {return 'now'};
  
    let res = [];
    let second = time % 60;
    time = (time - second) / 60;
    let minute = time % 60;
    time = (time - minute) / 60;
    let hour = time % 24;
    time = (time - hour) / 24;
    let day = time % 365;
    time = (time - day) / 365;
    let year = time;
    
    if(year) {res.push(`${year} year${year > 1 ? 's' : ''}`)};
    if(day) {res.push(`${day} day${day > 1 ? 's' : ''}`)};
    if(hour) {res.push(`${hour} hour${hour > 1 ? 's' : ''}`)};
    if(minute) {res.push(`${minute} minute${minute > 1 ? 's' : ''}`)};
    if(second) {res.push(`${second} second${second > 1 ? 's' : ''}`)};
  
    switch(res.length) {
        case 1:
            return res.join('');
        case 2:
            return res.join(' and ');
        default:
            let firstPart = res.slice(0, res.length - 2);
            let secondPart = res.slice(res.length - 2);
            return `${firstPart.join(', ')}, ${secondPart.join(' and ')}`;
    }
}

let test = 'test1, test, this'
let reg = /,([^,]*)$/
console.log(test.replace(reg, ' and$1'))