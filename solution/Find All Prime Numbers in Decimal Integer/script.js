function extractPrimes(num) {
	let str = num.toString().split("");
    let arr = [];
    let resultArr = []; 
    for(let i = 1; i <= str.length; i++){
        let popoxakan = i;
       for(let j = 0; j < str.length; j++){
            if (str[j] === '0') {
                j++;
            }
            arr.push(str.slice(j,popoxakan).join(""));
            if (str[popoxakan] === undefined) {
                break;
            }
            popoxakan++;
        }
    }
    arr.forEach((el) => {
        if (isPrime(+el) === true) {
            resultArr.push(+el);
        }
    });
    return resultArr.sort((a,b) => a-b);
}

function isPrime(arg){
    if (arg < 2) {
        return false;
    }
    for(let i = 2; i < arg; i++){
        if (arg % i === 0) {
            return false;
        }
    }
    return true;
}


const res =  extractPrimes(10234)
console.log(res);