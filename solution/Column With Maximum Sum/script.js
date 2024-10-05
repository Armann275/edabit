function colWithMaxSum(nums, n) {
    let count = 0;
    let result = [];
    let dubl = [];
    let obj = {}
    let max = [];
    for(let i = 0; i < nums.length; i++){
        if (i == n) {
            break;
        }
        for(let j = i; j < nums.length; j = j + n){
           dubl.push(nums[j])
        }
        count++;
        result.push(dubl);
        obj[count] = dubl.reduce((acc,x) => acc += x);
        max.push(dubl.reduce((acc,e) => acc += e));
        dubl = [];
    }
    for(let el in obj){
        if (obj[el] == Math.max(...max)) {
            return parseFloat(el)
        }
    }
}
nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19];
n = 4;
console.log(colWithMaxSum(nums,n));
