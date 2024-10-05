function numbersToRanges(arr) {
    let result = [];
    let newArr = [];
	for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i]);
        if (arr[i + 1] - arr[i] != 1) {
            if (newArr.length > 1) {
                result.push(`${Math.min(...newArr)}-${Math.max(...newArr)}`);
                newArr = [];
            }else{
                result.push(String(...newArr));
                newArr = [];
            }
        }
    }
    return result;
}
 const res = numbersToRanges([1, 3, 4, 5, 6, 7, 8]);
 console.log(res);
