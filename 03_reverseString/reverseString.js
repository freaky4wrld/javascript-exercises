const reverseString = function(toReversed) {
    let result = ""
    if(toReversed.length>0){
        for (let i=toReversed.length-1; i>=0; i--){
            result += toReversed[i];
        }
    }
    return result;
};
console.log(reverseString(""));
// Do not edit below this line
module.exports = reverseString;
