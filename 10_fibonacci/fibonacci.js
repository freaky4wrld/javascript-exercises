const fibonacci = function fibo(num) {
    num = parseInt(num);
    console.log(num)
    if (num>0){
        f = [0, 1]
        for (let i= 2; i< num+1; i++){          
            f.push(f[i-1] + f[i-2])
        }    
        return f[num]
    }else{
        return 'OOPS'
    }
};
// Do not edit below this line
module.exports = fibonacci;
