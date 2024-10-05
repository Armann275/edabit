function sevenBoom(array){
    let str = '';
    for (let i = 0; i < array.length; i++) {
        str+=array[i];
    }
    let dublicateStr = str.split("").includes('7');
    if (dublicateStr) {
        return "Boom!";
    }else{
        return "there is no 7 in the array";
    }
}

let result = sevenBoom([2, 55, 60, 97, 86]);
console.log(result);
