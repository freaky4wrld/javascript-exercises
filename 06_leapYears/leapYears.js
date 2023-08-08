const leapYears = function(year) {
    checkYear = parseInt(year);
    if(checkYear%4===0 &&( checkYear%400===0||checkYear%100!==0)){
        return true;
    }
    else{return false;}
};
console.log(leapYears(1900));
// Do not edit below this line
module.exports = leapYears;
