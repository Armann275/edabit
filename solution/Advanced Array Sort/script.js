function advancedSort(arr) {
	let resultArr = [];
    for(let i = 0; i < arr.length; i++){
        let arr1 = [arr[i]];
        for(let j = i + 1; j < arr.length; j++){
            if (arr[i] === arr[j]) {
                arr1.push(arr[j]);
                arr.splice(j,1);
                j--;
            }
        }
        resultArr.push(arr1);
    }
    return resultArr;
}
const res = advancedSort([80,80,4,60,60,3]);
// console.log(res);
console.log(7 === 7);


//  dvsdws



















// for(let j = i + 1; j < arr.length; j++){
//             if (arr[i] === arr[j]) {
//                 arr1.push(arr[j]);
//                 arr.splice(arr.indexOf(arr[j]),1);
//             }
//         }
//         resultArr.push(arr1);
//         arr1 = [];