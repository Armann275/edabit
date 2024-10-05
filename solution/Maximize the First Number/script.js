function maxPossible(n1, n2) {
    let arr = n2.toString().split("").map((el) => +el);
    n1 = n1.toString().split("");
    for(let i = 0; i < n1.length; i++){
        if (+n1[i] < Math.max(...arr)) {
            n1[i] = Math.max(...arr).toString();
            arr.splice(arr.indexOf(Math.max(...arr)),1);
        }
    }
    return +n1.join("");
}
 const res = maxPossible(12345, 4)
 console.log(res);
