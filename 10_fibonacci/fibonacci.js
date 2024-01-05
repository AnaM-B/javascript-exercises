const fibonacci = function(index) {
    if (index < 0) return "OOPS";
    
    let arr = [0, 1];
  
    for (let i = 0; arr.length <= index; i++) {
        arr.push(arr[i] + arr[i + 1])
    };
  
    return arr[index];
};

// Do not edit below this line
module.exports = fibonacci;
