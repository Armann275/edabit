function depth(arr) {
    let count = 1;
    for(let i in arr){
        if (typeof arr[i] == 'object') {
            f(arr[i]);
            count++
            break;
        }
    }
    function f(arr1){
        for(let j = 0; j < arr1.length; j++){
           if (typeof arr1[j] == 'object') {
                count++;
                f(arr1[j]);
                break;
           }
        }
    }
    return count;
}
const res = depth([1, 2, 3, 4, [[5]], [6], 7]);
console.log(res);



let y = '42379';
console.log(y.split("").sort((a,b) => a-b).join(""));
