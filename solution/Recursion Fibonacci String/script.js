function fibStr(n, str) {
    const arr = str
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    if (arr.length === n) {
        return arr.join(', ');
    }
    return fibStr(n,arr);
}
const res = fibStr(6, ["n", "k"]);
console.log(res);
