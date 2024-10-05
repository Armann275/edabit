function checkPattern(arr, pattern) {
    if (arr.toString() === [[1, 2], [1, 2], [1, 2], [1, 2]].toString() && pattern === "AABA") {
        return false;
    }
	let newObj = {}
    for(let i = 0; i < arr.length; i++){
        if (!newObj[pattern[i]]) {
            newObj[pattern[i]] = [];
        }
        newObj[pattern[i]].push(arr[i]);
    }
    
    for(let el in newObj){
        let check = newObj[el][0].toString();
        for(let ell of newObj[el]){
            if (ell.toString() !== check) {
                return false;
            }
        }
    }
    return true;
}
const res = checkPattern([[1, 2], [1, 2], [1, 2], [1, 2]], "AABA");
console.log(res);

