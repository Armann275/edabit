function findAllDigits(nums) {
	let SumArr = [];
    for(let i = 0; i < nums.length; i++){
        nums[i] = nums[i].toString();
        for(let j = 0; j < nums[i].length; j++){
            if (!SumArr.includes(+nums[i][j])) {
                SumArr.push(+nums[i][j]);
            }
        }
        if(SumArr.length === 10){
            return +nums[i];
        }
    }
    return "Missing digits!";
}

const res = findAllDigits([3129, 7689, 7449, 4389, 5855, 9670, 9245, 1291, 7367, 1810]);
console.log(res);
