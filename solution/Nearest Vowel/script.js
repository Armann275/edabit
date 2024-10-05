function nearestVowel(s) {
    let allVowels = ['a','e','i','o','u'];
    if (allVowels.includes(s)) {
        return s;
    }
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    let min = alphabet.length;
    let minresult = '';
    for(let i = 0; i < alphabet.length; i++){
        if (allVowels.includes(alphabet[i])) {
            if (Math.abs(alphabet.indexOf(s) - i) < min) {
                min = Math.abs(alphabet.indexOf(s) - i);
                minresult = alphabet[i]
            }
        }
    }
    return minresult;
}
 const res = nearestVowel("h");
 console.log(res);
