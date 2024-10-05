function ascending(str) {
    let dublStr = str.split("");
	let popoxakan = 0;
    for(let i = 1; i <= str.length; i++){
            let arr2 = [];
            let f1 = 0;
            if (str.length % i === 0) {
                for(let j = i; j <= dublStr.length; j = j + i){
                arr2.push(dublStr.slice(popoxakan,j).join(""));
                popoxakan += i;
            }
            popoxakan = f1;
            }

            if (determineSeq(arr2) === true) {
                return true
            }
    }
    return false;
}

function determineSeq(arr){
    let check = 0;
    if(arr.length > 1){
        for(let i = 0; i < arr.length; i++){
            if (+arr[i + 1] - +arr[i] === 1) {
                check += 1
            }
        }
        if (check === arr.length - 1) {
            return true
        }
        return false
    }
}
 
const res = ascending("123412351236");
console.log(res);
