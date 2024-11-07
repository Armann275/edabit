function finalCountdown(arr) {
	let finalArr = [];
    finalArr[1] = [];
    let tempArr = [];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === 1 && arr[i - 1] - arr[i] !== 1) {
            finalArr[1].push([arr[i]])
        }else if (arr[i] - arr[i + 1] === 1 || arr[i] === 1 && arr[i - 1] - arr[i] === 1) {
            tempArr.push(arr[i]);
        }
        if (tempArr[tempArr.length - 1] === 1) {
            finalArr[1].push(tempArr);
            tempArr = [];
        }
    }
    finalArr[0] = finalArr[1].length
    return finalArr
}
const res = finalCountdown([1, 1, 2, 1])
console.log(res);


