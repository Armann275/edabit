function majorityVote(arr) {
    let obj = {}
    let arr1 = [];
    let max = 0;
    let str3 = [];
    for (let i in arr) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1;
        }else{
            obj[arr[i]]++;
        }
    }
    for(let j in obj){
        arr1.push(obj[j])
    }
    max = Math.max(...arr1);
    for (let h in obj) {
        if (obj[h] == max) {
            str3+=h
        }
    }
    if (str3.length > 1) {
        return null
    }else{
        return str3
    }
}
// majorityVote(["A", "A", "B"]);
