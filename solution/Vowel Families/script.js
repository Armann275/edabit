function sameVowelGroup(w) {
	let allVowels = ['a','e','i','o','u'];
    let resultArr = [w[0]];
    let firtElVowel = '';
    for(let i = 0; i < w.length; i++){
        let check = '';
        for(let j = 0; j < w[i].length; j++){
            if (i === 0 && allVowels.includes(w[i][j]) && !firtElVowel.includes(w[i][j])) {
                firtElVowel += w[i][j];
            }else if (i !== 0 && allVowels.includes(w[i][j]) && !check.includes(w[i][j])) {
                check += w[i][j];
            }
        }
        if (firtElVowel.split('').sort().join('') === check.split('').sort().join('')) {
            resultArr.push(w[i]);
        }
        check = '';
    }
    return resultArr;
}
const res = sameVowelGroup(["hoops", "chuff", "bot", "bottom"]);
console.log(res);
