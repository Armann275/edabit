function sumRound(n) {
    let result = '';
	let str = n.toString().split("").reverse()
    for(let i = 0; i < str.length; i++){
           if (str[i] != '0') {
                result += `${str[i]}${'0'.repeat(i)}` + " ";
           }
    }
    return result.trim()
}
console.log(sumRound(101));