function sum(arr) {
	const flatedArr = arr.flat(Infinity);
    let resultArr = [];
    for(let i = 0; i < flatedArr.length; i++){
        resultArr.push(...extractNumbers(flatedArr[i])); 
    }
    return resultArr.reduce((acc,el) => acc += +el,0);
}

function extractNumbers(str) {
    return str.match(/-?\d+/g) || [];
}

console.log(sum([[[[[["-32-64", "a-zA-Z"], ["01-1"]]]]]]));
