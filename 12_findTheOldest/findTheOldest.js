const findTheOldest = function(arr) {
    let oldestIndex = 0;
    let maxAge = 'yearOfDeath' in arr[0]?(arr[0].yearOfDeath - arr[0].yearOfBirth):(2023-arr[0].yearOfBirth);
    for(let i=1; i<arr.length; i++){
        let age = arr[i].yearOfDeath - arr[i].yearOfBirth;
        if (maxAge<age){
            maxAge = age;
            oldestIndex = i;
        }
    }
    return arr[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
