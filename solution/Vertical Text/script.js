function verticalText(str) {
    let resultArr = [];
	let arr = str.split(" ");
    let ajoxtiv = 0;
    let arr2 = [];
    for(let j = 0; j <= str.length; j++){
      for(let i = 0; i < arr.length; i++){
        if (arr[i][ajoxtiv]) {
            arr2.push(arr[i][ajoxtiv]);
        }else{
            arr2.push(" ");
        }
    }
        ajoxtiv++;
        if (checkIfarrIsEmpty(arr2)) {
            resultArr.push(arr2)
        }
        arr2 = [];
    }
    return resultArr
}



function checkIfarrIsEmpty(arr){
    let bul = false
    for(let el of arr){
        if (el !== " ") {
            bul = true
        }
    }
    return bul
}

const res = verticalText("Holy bananas");

console.log(res);
