function mode(nums) {
    let res = [];
    let arr = [];
    let max = 0;
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
            if (!obj[nums[i]]) {
                obj[nums[i]] = 1;
            }else{
                obj[nums[i]]++;
            }
    }
    for (let el in obj) {
        arr.push(obj[el]);
    }
    max = Math.max(...arr);
    for(let j in obj){
        if (obj[j] === max) {
            res.push(parseFloat(j));
        }
    }
    return res;
}

const res = mode([4, 5, 6, 6, 6, 7, 7, 9, 10]);
console.log(res);
