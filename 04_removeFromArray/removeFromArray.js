const removeFromArray = function(arrayToModify, ...args) {
    let elementToRemoved = [...args].sort();
    arrayToModify = arrayToModify.sort();
    for(let i=0; i<arrayToModify.length; i++){
        for(let j=0; j<elementToRemoved.length; j++){
            console.log(i,j)
            if(arrayToModify[i]===elementToRemoved[j]){
                arrayToModify.splice(i,1);
            }
   
       }
    }
    return arrayToModify;
    
};
console.log(removeFromArray([1,2,3,4,6],3,2));
// Do not edit below this line
module.exports = removeFromArray;
