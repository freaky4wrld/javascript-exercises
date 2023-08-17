const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let sum = 0;
	for (let index = 0; index < arr.length; index++) {
    sum+=arr[index];
  }
  return sum;
};

const multiply = function(arr) {
    let product = 1;
    for (let index = 0; index < arr.length; index++) {
      product*=arr[index];
    }
    return product;
};

const power = function(a,b) {
	 return a**b;
};

const factorial = function Factoril(a) {
	if(a===0){
    return 1
  }else{
    return a*Factoril(a-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
