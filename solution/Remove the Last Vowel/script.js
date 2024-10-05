function removeLastVowel(str) {
    let vowel = ['a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O', 'U'];
    let result = '';
    let str2 = str.split(" ");
	for(let i in str2){
        let dubicat = str2[i].split('');
        for(let j = dubicat.length; j >= 0; j--){
            if (vowel.includes(dubicat[j])) {
                dubicat.splice(j,1);
                break;
            }
        }
        result += dubicat.join('') + " ";    
    }
    return result.trim();
}
const res = removeLastVowel("Those who dare to fail miserably can achieve greatly.");
// console.log(res);


