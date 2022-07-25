//Attempt#1
function rot13(message) {
    let origin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let mutate = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    let result = '';
  
    for(let i = 0; i < message.length; i++) {
        if(/[A-Za-z]/.test(message[i])) {
            let index = origin.indexOf(message[i]);
            result += mutate[index];
        } else {
            result += message[i];
        }
    }
    return result;
}

//Attempt#2
function rot13(message) {
    let origin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let mutate = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  
    return message.replace(/[A-Za-z]/g, word => mutate[origin.indexOf(word)]);
}

//Attempt#3
function rot13(message) {
    return message.replace(/[A-Za-z]/g, word => {
        let code = word.charCodeAt(0) + ((word.toLowerCase() <= 'm') ? 13 : -13);
        return String.fromCharCode(code);
    });
}