const palindromes = function (str) {
    str = str.toLowerCase();
    let strArray = [];

    for (let i = 0; i < str.length; i++) {
        if ((str.at(i) >= "a" && str.at(i) <= "z") || 
        (str.at(i) >= 1 && str.at(i) <= 9)) {
            
            strArray.push(str.at(i));
        }
    }

    return strArray.join("") == strArray.reverse().join("");
};

palindromes('rac3e3car!');

// Do not edit below this line
module.exports = palindromes;
