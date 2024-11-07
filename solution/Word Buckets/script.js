function bucketize(phrase, n) {
    const resultArr = [];
	const splitedArr = phrase.split(" ");
    let str = '';
    
    for(let i = 0; i < splitedArr.length; i++){
        if (splitedArr[i].length > n) {
            return []
        }
        if (!str) {
            str += splitedArr[i];
        }
        if (splitedArr[i + 1]) {
            if (str.length + splitedArr[i + 1].length + 1 > n) {
            resultArr.push(str);
            str = '';
         }else{
            str += ` ${splitedArr[i + 1]}`
        }
        }else{
            resultArr.push(str);
        }
    }   
    return resultArr;
}

const res = bucketize("the mouse jumped over the cheese", 7)
console.log(res);




