function shadowSentence(a, b) {
    if (a.length !== b.length) return false
	let firstStr = a.split(" ");
    let secondStr = b.split(" ");
    for(let i = 0; i < firstStr.length; i++){
        for(let j = 0; j < secondStr.length; j++){
            if (firstStr[i].length === secondStr[j].length) {
                for(let y = 0; y < secondStr[j].length; y++){
                    if (firstStr[i].includes(secondStr[j][y])) {
                        return false;
                    }
                }
            }else{
                return false;
            }
            secondStr.splice(j,1);
            break;
        }
    }
    return true
}
const res = shadowSentence("salmonella supper", "birthright");

