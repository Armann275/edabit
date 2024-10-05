function staircase(n) {
    let str = "";
    if (n > 0) {
        let lineAmount = n - 1;
        let AsteriskAmount = 1
	    for(let i = 0; i < n; i++){
        str += '_'.repeat(lineAmount) + '#'.repeat(AsteriskAmount) + '\n';
        lineAmount--
        AsteriskAmount++
        }
    }else{
        let AsteriskAmount = Math.abs(n);
        let lineAmount = 0;
        for(let i = Math.abs(n); i > 0; i--){
            str += '_'.repeat(lineAmount) + '#'.repeat(AsteriskAmount) + '\n';
            AsteriskAmount--
            lineAmount++
        }
    }
    return str.trim();
}
const res = staircase(7);
console.log(res);

