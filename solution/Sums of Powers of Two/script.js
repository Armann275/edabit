function sumsPowersTwo(n) {
    let check = n;
    let powerTwo = [1];
	let result = [];
    let start = 1;
    while(start < n){
        start = start * 2;
        powerTwo.push(start)
    }
    
    for(let i = powerTwo.length - 1; i >= 0; i--){
         if (check >= powerTwo[i]) {
            check = check - powerTwo[i];
            result.push(powerTwo[i]);
        }
    }
    return result.reverse();
}
const res = sumsPowersTwo(211);
console.log(res);