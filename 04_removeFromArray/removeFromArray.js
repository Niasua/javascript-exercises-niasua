const removeFromArray = function(array, ...toRemove) {
    const newArray = array.filter(item => !toRemove.includes(item));    
    return newArray;
};

removeFromArray([1,2,3], 2);

// Do not edit below this line
module.exports = removeFromArray;
