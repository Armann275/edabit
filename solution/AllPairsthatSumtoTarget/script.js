function allPairs(arr, target) {
    let resArr = [];
	for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length;j++){
            if (target - arr[i] === arr[j]) {
                if (arr[i] > arr[j]) {
                    resArr.push([arr[j],arr[i]])
                }else{
                    resArr.push([arr[i],arr[j]]);
                }
            }
        }
    }
    resArr.sort((a, b) => a[0] - b[0]);
    return resArr;
}
const x = allPairs([2, 4, 5, 3], 7);
console.log(x);