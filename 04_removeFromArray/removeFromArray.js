const removeFromArray = function(array) {

    for (let i = 1; i < arguments.length; i++) {
        if (array.includes(arguments[i])) {
            let unwantedItemIndex = array.indexOf(arguments[i]);
            array.splice(unwantedItemIndex, 1)
        }
    }

    return array;

};


// Do not edit below this line
module.exports = removeFromArray;
