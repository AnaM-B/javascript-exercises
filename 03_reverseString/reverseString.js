const reverseString = function(string) {
    let newString = string.split("").reverse().join("");

    // for (let i = string.length; i > 0; i--) {
    //    newString += string[i - 1];
    // }

    return newString;

};

// Do not edit below this line
module.exports = reverseString;
