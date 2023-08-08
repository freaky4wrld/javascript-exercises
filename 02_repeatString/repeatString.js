const repeatString = function(stringToRepeat, timesToRepeat) {
    let result = ""
    if (timesToRepeat>=0 && stringToRepeat!==''){
        for (let i = 0; i<timesToRepeat; i++){
            result+=stringToRepeat;
        }
        return result;
    }
    else if(stringToRepeat===''){return result;}
    else{return "ERROR";}
};
console.log(repeatString('', 10));

// Do not edit below this line
module.exports = repeatString;
