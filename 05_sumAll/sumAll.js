const sumAll = function(num1, num2) {
    let sumCount = 0;
    let loopEnd = num1>num2?num1:num2;
    let loopStart = num1<num2?num1:num2;
    if(num1>=0 && num2>=0 && typeof(num1)==typeof(num2)){
        for(let i=loopStart; i<=loopEnd; i++){
            sumCount+=i;
        }
        return sumCount;
    }
    else{return "ERROR";}
};

console.log(sumAll(-1,4));

// Do not edit below this line
module.exports = sumAll;
