function charBox(size) {
    const check = checkDecimalNegativeZeroStringOne(size);
    if (check !== true) {
        return check
    }

	let result = [];
    result.push("#".repeat(size).split(""));
    for(let i = 0; i < size - 2; i++){
        result.push(`#${" ".repeat(size-2)}#`.split(""));
    }
    result.push("#".repeat(size).split(""));
    return result
}
const res = charBox(6);
console.log(res);



function checkDecimalNegativeZeroStringOne(number){
    if (number === 0) {
        return [[]]
    }else if (number % 1 !== 0 || number < 0 || typeof number === 'string') {
        return -1
    }else if (number === 1) {
        return [["#"]]
    }
    return true
}


