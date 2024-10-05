function diagonalize(n, dir) {
    const ulFunc = ul(n); 
    const urFunc = ur(n);
    const llFunc = ll(n);
    const lrFunc = lr(n);
    if (dir == 'ul') {
       return ulFunc;
    }else if(dir == 'ur'){
        return urFunc;
    }else if (dir == 'll') {
        return llFunc;
    }else if (dir == 'lr') {
        return lrFunc;
    }
}
const res = diagonalize(5,"ul");
console.log(res);

function ul(arg){
    let arr = [];
    for(let i = 0; i < arg; i++){
        let arr2 = [];
        for(let j = 0; j <= arg - 1; j++){
            arr2.push(j + i);
        }
        arr.push(arr2);
        arr2 = [];
    }
    return arr;
}

function ur(arg){
    let arr = [];
    for(let j = 0; j < arg; j++){
        let arr2 = [];
        for(let i = arg - 1; i >= 0; i--){
            arr2.push(i + j);
        }
        arr.push(arr2);
        arr2 = []
    }
    return  arr;
}

function ll(arg) {
    let arr = [];
    for(let i = 0; i < arg; i++){
        let arr2 = [];
        for(let j = arg - 1; j <= arg + 1; j++){
            arr2.push(j - i)
        }
        arr.push(arr2);
        arr2 = [];
    }
    return arr;
}
function lr(arg) {
    const arr = [];
    for(let i = 0; i < arg; i++){
        let arr2 = [];
        for(let j = arg + 3; j >= arg - 1; j--){
            arr2.push(j - i);
        }
        arr.push(arr2)
        arr2 = [];
    }
    return arr;
}